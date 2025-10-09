export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  const { 
    formation, 
    modalite, 
    nom, 
    prenom, 
    email, 
    telephone, 
    dateReunion, 
    motivations,
    statut,
    statutAutre,
    commentConnu,
    commentConnuAutre
  } = req.body

  // Validation des données requises
  if (!formation || !nom || !prenom || !email || !dateReunion) {
    return res.status(400).json({ message: 'Données manquantes' })
  }

  try {
    // Configuration Brevo depuis les variables d'environnement
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'contact@atipikrh.com'
    const BREVO_RECIPIENT_EMAIL = process.env.BREVO_RECIPIENT_EMAIL || 'contact@atipikrh.com'

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

    // Fonction pour obtenir les horaires selon la modalité
    const getHoraires = () => {
      if (modalite === 'présentiel') {
        return '10h30'
      } else {
        return '12h30'
      }
    }

    // Fonction pour générer le contenu de l'email selon la formation et la modalité
    const getConfirmationContent = (formation, modalite, prenom, dateReunion) => {
      const horaires = getHoraires()
      const dateFormatee = formatDate(dateReunion)
      
      if (formation === 'CIP') {
        if (modalite === 'présentiel') {
          return {
            subject: 'Découvrez tout sur la formation Conseiller en Insertion Professionnelle (CIP) !',
            content: `Bonjour ${prenom},

Merci pour votre inscription à notre réunion d'information en présentiel !
Nous avons hâte de vous accueillir et de partager avec vous tout ce que la formation CIP peut vous offrir.

📅 Détails de la réunion :
● Formation : Conseiller en Insertion Professionnelle (CIP)
● Date : ${dateFormatee}
● Horaires : ${horaires}
● Lieu : 8 rue du Courant, 33310 Lormont

Lors de cette réunion, notre directrice Vanessa vous présentera :
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas des 11 semaines de stage obligatoires : vous participerez également à des projets collaboratifs avec nos structures partenaires, pour des mises en situation concrètes et proches du réel.

● Les débouchés possibles avec le titre de CIP : bien sûr le rôle de conseiller en insertion professionnelle, mais aussi chargé(e) de relations entreprises, accompagnateur(trice) en parcours professionnels, et bien d'autres opportunités. Bref, des perspectives qui vont bien au-delà du titre !

● Notre équipe pédagogique : composée de professionnels du terrain.

● Les modalités d'inscription et les financements, adaptés à chaque situation.

● Une session questions-réponses, pour répondre à toutes vos interrogations, même celles qui vous semblent un peu audacieuses (on adore ça !).

Si un imprévu vous empêche de participer, merci de nous prévenir par mail à contact@atipikrh.com ou par téléphone au 07 83 01 99 55.

Nous avons vraiment hâte de vous rencontrer, de vous présenter notre approche et... de partager un moment sympa et vivant autour de la formation CIP !

À très bientôt,
L'équipe ATIPIK RH`
          }
        } else {
          return {
            subject: 'Découvrez tout sur la formation Conseiller en Insertion Professionnelle (CIP) !',
            content: `Bonjour ${prenom},

Merci pour votre inscription à notre réunion d'information à distance ! Nous avons hâte de vous accueillir et de partager avec vous tout ce que la formation CIP peut vous offrir.

📅 Détails de la réunion :
● Formation : Conseiller en Insertion Professionnelle (CIP)
● Date : ${dateFormatee}
● Horaires : ${horaires}
● Modalité : visioconférence (Teams)
● Lien de connexion : envoyé par mail le jour J. Petit conseil : vérifiez aussi vos spams ou indésirables, parfois nos mails aiment jouer à cache-cache 😉.

Lors de cette réunion, notre directrice : Vanessa, vous présentera :
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas des 11 semaines de stage obligatoires : vous participerez également à des projets collaboratifs avec nos structures partenaires, pour des mises en situation concrètes et proches du réel.

● Les débouchés possibles avec le titre de CIP : bien sûr le rôle de conseiller en insertion professionnelle, mais aussi chargé(e) de relations entreprises, accompagnateur(trice) en parcours professionnels, et bien d'autres opportunités. Bref, des perspectives qui vont au-delà du titre !

● Notre équipe pédagogique : composée de professionnels du terrain.

● Les modalités d'inscription et les financements, adaptés à chaque situation.

● Une session questions-réponses, pour répondre à toutes vos interrogations, même celles qui vous semblent un peu audacieuses (on adore ça !).

Si un imprévu vous empêche de participer, merci de nous prévenir par mail à contact@atipikrh.com ou par téléphone au 07 83 01 99 55.

Nous avons vraiment hâte de vous rencontrer, de vous présenter notre approche et... de partager un moment sympa et vivant autour de la formation CIP !

À très bientôt,
L'équipe ATIPIK RH`
          }
        }
      } else if (formation === 'FPA') {
        if (modalite === 'présentiel') {
          return {
            subject: 'Découvrez tout sur la formation Formateur Professionnel d'Adultes (FPA) !',
            content: `Bonjour ${prenom},

Merci pour votre inscription à notre réunion d'information en présentiel !
Nous avons hâte de vous accueillir et de partager avec vous tout ce que la formation FPA peut vous offrir.

📅 Détails de la réunion :
● Formation : Formateur Professionnel d'Adultes (FPA)
● Date : ${dateFormatee}
● Horaires : ${horaires}
● Lieu : 8 rue du Courant, 33310 Lormont

Lors de cette réunion, notre directrice Vanessa vous présentera :
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas d'apprendre la théorie : vous participerez à des projets pratiques et mises en situation, pour vous préparer à intervenir efficacement auprès des adultes en formation.

● Les débouchés possibles avec le titre de FPA : formateur(trice) d'adultes, consultant(e) en formation, chargé(e) de développement des compétences, et bien d'autres opportunités pour construire une carrière riche et polyvalente.

● Notre équipe pédagogique, composée de professionnels du terrain, prêts à partager leur expérience et leurs conseils pratiques.

● Les modalités d'inscription et les financements, adaptés à chaque situation.

● Une session questions-réponses, pour répondre à toutes vos interrogations, même celles qui vous semblent un peu audacieuses (on adore ça !).

Si un imprévu vous empêche de participer, merci de nous prévenir par mail à contact@atipikrh.com ou par téléphone au 07 83 01 99 55.

Nous avons vraiment hâte de vous rencontrer, de vous présenter notre approche et... de partager un moment motivant et convivial autour de la formation FPA !

À très bientôt,
L'équipe ATIPIK RH`
          }
        } else {
          return {
            subject: 'Découvrez tout sur la formation Formateur Professionnel d'Adultes (FPA) !',
            content: `Bonjour ${prenom},

Merci pour votre inscription à notre réunion d'information à distance !
Nous avons hâte de vous accueillir et de partager avec vous tout ce que la formation FPA peut vous offrir.

📅 Détails de la réunion :
● Formation : Formateur Professionnel d'Adultes (FPA)
● Date : ${dateFormatee}
● Horaires : ${horaires}
● Modalité : visioconférence (Teams)

● Lien de connexion : envoyé par mail le jour J. Petit conseil : vérifiez aussi vos spams ou indésirables, parfois nos mails aiment jouer à cache-cache 😉.

Lors de cette réunion, notre directrice Vanessa vous présentera :
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas d'apprendre la théorie : vous participerez à des projets pratiques et mises en situation, pour vous préparer à intervenir efficacement auprès des adultes en formation.

● Les débouchés possibles avec le titre de FPA : formateur(trice) d'adultes, consultant(e) en formation, chargé(e) de développement des compétences, et bien d'autres opportunités pour construire une carrière riche et polyvalente.

● Notre équipe pédagogique, composée de professionnels du terrain, prêts à partager leur expérience et leurs conseils pratiques.

● Les modalités d'inscription et les financements, adaptés à chaque situation.

● Une session questions-réponses, pour répondre à toutes vos interrogations, même celles qui vous semblent un peu audacieuses (on adore ça !).

Si un imprévu vous empêche de participer, merci de nous prévenir par mail à contact@atipikrh.com ou par téléphone au 07 83 01 99 55.

Nous avons vraiment hâte de vous rencontrer, de vous présenter notre approche et... de partager un moment motivant et convivial autour de la formation FPA !

À très bientôt,
L'équipe ATIPIK RH`
          }
        }
      }
    }

    // Fonction pour formater le statut
    const getStatutLabel = () => {
      if (statut === 'salarie') return 'Salarié(e) en poste'
      if (statut === 'demandeur') return 'Demandeur(se) d\'emploi'
      if (statut === 'autre' && statutAutre) return `Autre : ${statutAutre}`
      if (statut === 'autre') return 'Autre (non précisé)'
      return 'Non renseigné'
    }

    // Fonction pour formater la source de connaissance
    const getCommentConnuLabel = () => {
      if (commentConnu === 'instagram') return 'Instagram'
      if (commentConnu === 'linkedin') return 'Linkedin'
      if (commentConnu === 'facebook') return 'Facebook'
      if (commentConnu === 'google') return 'Google'
      if (commentConnu === 'site') return 'Site internet'
      if (commentConnu === 'mail') return 'Mail'
      if (commentConnu === 'autre' && commentConnuAutre) return `Autre : ${commentConnuAutre}`
      if (commentConnu === 'autre') return 'Autre (non précisé)'
      return 'Non renseigné'
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

🎯 FORMATION ET RÉUNION :
- Formation d'intérêt : ${formation === 'FPA' ? 'Formation Professionnelle pour Adultes (FPA)' : 'Conseiller en Insertion Professionnelle (CIP)'}
- Date de la réunion choisie : ${formatDate(dateReunion)}
- Modalité choisie : ${modalite === 'présentiel' ? 'En présentiel à Lormont' : 'En distanciel (visioconférence)'}

👤 PROFIL DU CANDIDAT :
- Statut : ${getStatutLabel()}
- Comment nous a connu : ${getCommentConnuLabel()}

${motivations ? `💬 MOTIVATIONS :\n${motivations}\n` : ''}
---
Notifications automatiques - Site web Atipik RH
Date : ${new Date().toLocaleString('fr-FR')}`

    // Obtenir le contenu de l'email de confirmation selon la formation et la modalité
    const confirmationEmail = getConfirmationContent(formation, modalite, prenom, dateReunion)

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
        subject: confirmationEmail.subject,
        textContent: confirmationEmail.content
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
    console.error('IP du serveur:', req.headers['x-forwarded-for'] || req.connection.remoteAddress)
    console.error('Données reçues:', { formation, modalite, nom, prenom, email, telephone, dateReunion })
    res.status(500).json({ 
      message: 'Erreur lors de l\'enregistrement de l\'inscription',
      success: false,
      details: error.message,
      error: error.toString()
    })
  }
}
