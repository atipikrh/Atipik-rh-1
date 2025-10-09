export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { userInfo, answers, questions } = req.body

  // Validation des données requises
  if (!userInfo || !userInfo.name || !userInfo.email) {
    return res.status(400).json({ error: 'Informations utilisateur manquantes' })
  }

  if (!answers || !questions) {
    return res.status(400).json({ error: 'Données du quiz manquantes' })
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

    // Préparer le contenu de l'email
    const scoreTotal = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const scoreMoyen = (scoreTotal / questions.length).toFixed(1)
    
    const reponsesSynthese = questions.map((q, index) => {
      const answer = answers[q.id]
      const selectedOption = q.options.find(opt => opt.score === answer)
      return `${index + 1}. ${q.question}\n   Réponse : ${selectedOption ? selectedOption.text : 'Non répondu'} (Score: ${answer}/4)`
    }).join('\n\n')

    // Contenu de l'email de notification interne
    const emailContent = `NOUVEAU LEAD QUALIFIÉ - QUIZ BILAN DE COMPÉTENCES
================================================

INFORMATIONS CONTACT :
- Prénom : ${userInfo.name}
- Email : ${userInfo.email}
- Téléphone : ${userInfo.phone || 'Non renseigné'}

SYNTHÈSE DES RÉPONSES :
${reponsesSynthese}

SCORE TOTAL : ${scoreTotal}/${questions.length * 4}
SCORE MOYEN : ${scoreMoyen}/4

---
Email généré automatiquement depuis le quiz bilan de compétences
Date : ${new Date().toLocaleString('fr-FR')}`

    // Contenu de l'email de confirmation pour le prospect
    const getConseilPersonnalise = (scoreMoyen) => {
      if (scoreMoyen >= 3.5) {
        return `🎯 EXCELLENT ! Votre score de ${scoreMoyen}/4 indique que vous êtes très motivé(e) pour faire un bilan de compétences. C'est le moment idéal pour vous accompagner dans votre projet professionnel !`
      } else if (scoreMoyen >= 2.5) {
        return `👍 BON POTENTIEL ! Votre score de ${scoreMoyen}/4 montre que vous avez des questionnements légitimes sur votre carrière. Un bilan de compétences pourrait vous aider à y voir plus clair.`
      } else if (scoreMoyen >= 1.5) {
        return `🤔 À RÉFLÉCHIR ! Votre score de ${scoreMoyen}/4 suggère que vous êtes encore en phase d'exploration. Prenez le temps de réfléchir à vos besoins avant de vous engager.`
      } else {
        return `💭 PREMIÈRE RÉFLEXION ! Votre score de ${scoreMoyen}/4 indique que vous commencez tout juste à vous interroger sur votre carrière. C'est un bon début !`
      }
    }

    const confirmationContent = `Bonjour ${userInfo.name},

Merci d'avoir participé à notre quiz d'orientation professionnelle !

📊 VOS RÉSULTATS :
- Score total : ${scoreTotal}/${questions.length * 4}
- Score moyen : ${scoreMoyen}/4

${getConseilPersonnalise(scoreMoyen)}

🎯 PROCHAINES ÉTAPES :
Si vous souhaitez aller plus loin, nous vous proposons :

1. 📞 Un échange téléphonique gratuit avec un de nos conseillers
2. 📅 Une réunion d'information pour découvrir nos accompagnements
3. 💼 Un bilan de compétences personnalisé

📞 CONTACTEZ-NOUS :
- Téléphone : 07 83 01 99 55
- Email : contact@atipikrh.com
- Adresse : 8 Rue du Courant, 33310 Lormont

Nous sommes là pour vous accompagner dans votre évolution professionnelle !

Cordialement,
L'équipe Atipik RH

---
📧 contact@atipikrh.com | 📞 07 83 01 99 55
8 Rue du Courant, 33310 Lormont`

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
          name: 'Quiz Atipik RH',
          email: BREVO_SENDER_EMAIL
        },
        to: [{
          email: BREVO_RECIPIENT_EMAIL,
          name: 'Équipe Atipik RH'
        }],
        subject: `🎯 NOUVEAU LEAD QUALIFIÉ - Quiz Bilan ${userInfo.name}`,
        textContent: emailContent
      })
    })

    // Envoyer l'email de confirmation au prospect
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
          email: userInfo.email,
          name: userInfo.name
        }],
        subject: `🎯 Vos résultats du quiz d'orientation professionnelle - Atipik RH`,
        textContent: confirmationContent
      })
    })

    // Vérifier que les deux emails ont été envoyés avec succès
    if (notificationResponse.ok && confirmationResponse.ok) {
      const notificationResult = await notificationResponse.json()
      const confirmationResult = await confirmationResponse.json()
      console.log('Emails du quiz envoyés avec succès via Brevo:', {
        notification: notificationResult.messageId,
        confirmation: confirmationResult.messageId
      })
      return res.status(200).json({ 
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
        console.error('Erreur notification quiz Brevo:', notificationResponse.status, notificationError)
        errorDetails.notification = notificationError
      }

      if (!confirmationResponse.ok) {
        const confirmationError = await confirmationResponse.text()
        console.error('Erreur confirmation quiz Brevo:', confirmationResponse.status, confirmationError)
        errorDetails.confirmation = confirmationError
      }

      return res.status(500).json({ 
        error: errorMessage,
        details: errorDetails 
      })
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi Brevo:', error)
    return res.status(500).json({ error: 'Erreur serveur', details: error.message })
  }
} 