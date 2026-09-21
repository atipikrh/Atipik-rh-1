import { antiSpamMiddleware } from '../../lib/antiSpam'
import {
  sendDualBrevoEmails,
  upsertBrevoContact,
  SERVER_CONFIG_ERROR,
  SEND_EMAIL_ERROR,
} from '../../lib/brevo'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }

  // Vérification anti-spam
  const spamCheck = await antiSpamMiddleware(req, {
    recaptcha: {
      enabled: true,
      version: 'v2',
    },
    akismet: {
      enabled: true,
      type: 'inscription-reunion'
    }
  })
  if (!spamCheck.success) {
    if (spamCheck.statusCode === 429) {
      res.setHeader('Retry-After', spamCheck.retryAfter)
    }
    return res.status(spamCheck.statusCode).json({ 
      message: spamCheck.message,
      error: spamCheck.error
    })
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
    const maskEmail = (value) => {
      if (!value || typeof value !== 'string') return 'inconnu'
      const [localPart = '', domainPart = ''] = value.split('@')
      const maskedLocal = localPart.length > 2
        ? `${localPart.slice(0, 2)}***`
        : '***'
      return domainPart ? `${maskedLocal}@${domainPart}` : maskedLocal
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
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas des 385 heures de stage obligatoires : vous participerez également à des projets collaboratifs avec nos structures partenaires, pour des mises en situation concrètes et proches du réel.

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
● Le programme de la formation en détail et notre approche pédagogique unique. Ici, vous ne vous contenterez pas des 385 heures de stage obligatoires : vous participerez également à des projets collaboratifs avec nos structures partenaires, pour des mises en situation concrètes et proches du réel.

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
            subject: 'Découvrez tout sur la formation Formateur Professionnel d\'Adultes (FPA) !',
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
            subject: 'Découvrez tout sur la formation Formateur Professionnel d\'Adultes (FPA) !',
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

    const result = await sendDualBrevoEmails({
      notificationSubject:
        "Nouvelle inscription à une réunion d'information collective",
      notificationContent: emailContent,
      confirmationToEmail: email,
      confirmationToName: `${prenom} ${nom}`,
      confirmationSubject: confirmationEmail.subject,
      confirmationContent: confirmationEmail.content,
    })

    if (result.missingConfig) {
      return res.status(500).json(SERVER_CONFIG_ERROR)
    }

    if (result.ok) {
      const contactSync = await upsertBrevoContact({
        email,
        nom,
        prenom,
        telephone,
        statut: getStatutLabel(),
        formation,
      })

      if (!contactSync.ok && !contactSync.missingConfig) {
        console.error('[Inscription] Contact non synchronisé dans Brevo', {
          email: maskEmail(email),
          formation,
          statusCode: contactSync.statusCode || 'inconnu',
        })
      }

      return res.status(200).json({
        message: 'Inscription enregistrée avec succès',
        success: true,
        messageIds: result.messageIds,
      })
    }

    return res.status(500).json(SEND_EMAIL_ERROR)
  } catch (error) {
    console.error("[Inscription] Erreur lors de l'envoi:", error)
    return res.status(500).json({
      message: "Erreur lors de l'enregistrement de l'inscription",
      success: false,
    })
  }
}
