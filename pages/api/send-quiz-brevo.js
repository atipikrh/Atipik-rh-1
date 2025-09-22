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

    // Envoyer l'email avec l'API Brevo côté serveur
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
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

    if (response.ok) {
      const result = await response.json()
      console.log('Email envoyé avec succès via Brevo (serveur):', result)
      return res.status(200).json({ success: true, messageId: result.messageId })
    } else {
      const errorText = await response.text()
      console.error('Erreur Brevo:', response.status, errorText)
      return res.status(response.status).json({ error: 'Erreur Brevo', details: errorText })
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi Brevo:', error)
    return res.status(500).json({ error: 'Erreur serveur', details: error.message })
  }
} 