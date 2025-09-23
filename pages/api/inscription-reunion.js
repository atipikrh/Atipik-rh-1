export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  const { formation, modalite, nom, prenom, email, telephone, dateReunion, motivations } = req.body

  // Validation des données requises
  if (!formation || !nom || !prenom || !email || !dateReunion) {
    return res.status(400).json({ message: 'Données manquantes' })
  }

  try {
    // Configuration Brevo depuis les variables d'environnement
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'contact@atipikrh.fr'
    const BREVO_RECIPIENT_EMAIL = process.env.BREVO_RECIPIENT_EMAIL || 'contact@atipikrh.fr'

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY n\'est pas configurée')
      return res.status(500).json({ error: 'Configuration serveur manquante' })
    }

    // Formatage de la date pour l'affichage
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }
      return date.toLocaleDateString('fr-FR', options)
    }

    // Fonction pour obtenir les horaires (uniformisés pour toutes les formations)
    const getHoraires = () => {
      return { debut: '10h30', fin: '12h30' }
    }

    // Contenu de l'email de notification interne
    const emailContent = `NOUVELLE INSCRIPTION - RÉUNION D'INFORMATION COLLECTIVE
================================================

Bonjour,

Une nouvelle personne vient de s'inscrire à une réunion d'information collective via le site web Atipik RH.

📌 INFORMATIONS DU CANDIDAT :
- Nom : ${nom}
- Prénom : ${prenom}
- Email : ${email}
- Téléphone : ${telephone || 'Non renseigné'}
- Formation d'intérêt : ${formation === 'FPA' ? 'Formation Professionnelle pour Adultes (FPA)' : 'Conseiller en Insertion Professionnelle (CIP)'}
- Modalité choisie : ${modalite === 'présentiel' ? 'En présentiel à Lormont' : 'En distanciel (visioconférence)'}
- Date de la réunion choisie : ${formatDate(dateReunion)}
${motivations ? `- Motivations : ${motivations}` : ''}

---
Notifications automatiques - Site web Atipik RH
Date : ${new Date().toLocaleString('fr-FR')}`

    // Contenu de l'email de confirmation pour le candidat
    const horaires = getHoraires()
    const confirmationContent = `Bonjour ${prenom},

Merci pour votre inscription à notre réunion d'information collective !

📅 Détail de votre inscription :
- Formation : ${formation === 'FPA' ? 'Formation Professionnelle pour Adultes (FPA)' : 'Conseiller en Insertion Professionnelle (CIP)'}
- Date : ${formatDate(dateReunion)}
- Modalité : ${modalite === 'présentiel' ? 'En présentiel' : 'En distanciel (visioconférence)'}
${modalite === 'présentiel' ? '- Lieu : Atipik RH – 8 Rue du Courant, 33310 Lormont' : '- Lien de connexion : vous sera envoyé 24h avant la réunion'}
- Horaires : de ${horaires.debut} à ${horaires.fin}

👉 Cette réunion vous permettra de découvrir notre organisme de formation, nos méthodes, et d'échanger directement avec nos formateurs.

Si vous avez des questions d'ici là, n'hésitez pas à nous contacter :
📧 contact@atipikrh.com | 📞 07 83 01 99 55

Nous avons hâte de vous rencontrer,
À très bientôt,
L'équipe Atipik RH`

    // Envoyer l'email de notification interne
    const notificationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Site Web Atipik RH',
          email: BREVO_SENDER_EMAIL
        },
        to: [{
          email: BREVO_RECIPIENT_EMAIL,
          name: 'Équipe Atipik RH'
        }],
        subject: `Nouvelle inscription à une réunion d'information collective`,
        textContent: emailContent
      })
    })

    // Envoyer l'email de confirmation au candidat
    const confirmationResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'Atipik RH',
          email: BREVO_SENDER_EMAIL
        },
        to: [{
          email: email,
          name: `${prenom} ${nom}`
        }],
        subject: `Confirmation de votre inscription à la réunion d'information collective Atipik RH`,
        textContent: confirmationContent
      })
    })

    // Vérifier que les deux emails ont été envoyés avec succès
    if (notificationResponse.ok && confirmationResponse.ok) {
      const notificationResult = await notificationResponse.json()
      const confirmationResult = await confirmationResponse.json()
      console.log('Emails envoyés avec succès via Brevo:', {
        notification: notificationResult.messageId,
        confirmation: confirmationResult.messageId
      })
      return res.status(200).json({ 
        message: 'Inscription enregistrée avec succès',
        success: true,
        messageIds: {
          notification: notificationResult.messageId,
          confirmation: confirmationResult.messageId
        }
      })
    } else {
      // Gérer les erreurs
      let errorMessage = 'Erreur lors de l\'envoi des emails'
      let errorDetails = {}

      if (!notificationResponse.ok) {
        const notificationError = await notificationResponse.text()
        console.error('Erreur notification Brevo:', notificationResponse.status, notificationError)
        errorDetails.notification = notificationError
      }

      if (!confirmationResponse.ok) {
        const confirmationError = await confirmationResponse.text()
        console.error('Erreur confirmation Brevo:', confirmationResponse.status, confirmationError)
        errorDetails.confirmation = confirmationError
      }

      return res.status(500).json({ 
        error: errorMessage,
        details: errorDetails 
      })
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    console.error('Stack trace:', error.stack)
    console.error('BREVO_API_KEY présente:', !!process.env.BREVO_API_KEY)
    console.error('Données reçues:', { formation, modalite, nom, prenom, email, telephone, dateReunion })
    res.status(500).json({ 
      message: 'Erreur lors de l\'enregistrement de l\'inscription',
      success: false,
      details: error.message,
      error: error.toString()
    })
  }
}
