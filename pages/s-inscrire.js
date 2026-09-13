import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HoneypotField from '../components/HoneypotField'
import FormAlert from '../components/FormAlert'
import FinancementDisclaimer from '../components/FinancementDisclaimer'
import RecaptchaV2Invisible from '../components/RecaptchaV2Invisible'

export default function SInscrire() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    formation: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateReunion: '',
    motivations: '',
    statut: '',
    statutAutre: '',
    commentConnu: '',
    commentConnuAutre: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showAllDates, setShowAllDates] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [formTimestamp, setFormTimestamp] = useState(null)
  const recaptchaRef = useRef(null)

  useEffect(() => {
    // Enregistrer le timestamp de chargement du formulaire
    setFormTimestamp(Date.now())
  }, [])

  useEffect(() => {
    if (!router.isReady) return
    const raw = router.query.formation
    const value = Array.isArray(raw) ? raw[0] : raw
    const formation = String(value || '').toUpperCase()
    if (formation !== 'CIP' && formation !== 'FPA') return
    setFormData((prev) => (prev.formation ? prev : { ...prev, formation }))
  }, [router.isReady, router.query.formation])

  // Prochaines dates de réunions par formation
  const datesFPA = [
    { date: '2025-09-25', jour: 'Jeudi 25 Septembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-10-11', jour: 'Samedi 11 Octobre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-10-23', jour: 'Jeudi 23 Octobre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-11-06', jour: 'Jeudi 6 Novembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-11-22', jour: 'Samedi 22 Novembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-12-08', jour: 'Lundi 8 Décembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-01-08', jour: 'Jeudi 8 Janvier 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-01-17', jour: 'Samedi 17 Janvier 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-02-07', jour: 'Samedi 7 Février 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-02-19', jour: 'Jeudi 19 Février 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-03-05', jour: 'Jeudi 5 Mars 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-05-22', jour: 'Vendredi 22 Mai 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-06-13', jour: 'Samedi 13 Juin 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-06-22', jour: 'Lundi 22 Juin 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-07-11', jour: 'Samedi 11 Juillet 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-09-03', jour: 'Jeudi 3 Septembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-09-26', jour: 'Samedi 26 Septembre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-10-05', jour: 'Lundi 5 Octobre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-10-24', jour: 'Samedi 24 Octobre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-11-05', jour: 'Jeudi 5 Novembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-11-21', jour: 'Samedi 21 Novembre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-12-11', jour: 'Vendredi 11 Décembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2027-01-30', jour: 'Samedi 30 Janvier 2027', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2027-02-15', jour: 'Lundi 15 Février 2027', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2027-03-06', jour: 'Samedi 6 Mars 2027', heure: '10h30 - 12h30', modalite: 'présentiel' }
  ]

  const datesCIP = [
    { date: '2025-09-08', jour: 'Lundi 8 Septembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-09-27', jour: 'Samedi 27 Septembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-10-09', jour: 'Jeudi 9 Octobre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-10-25', jour: 'Samedi 25 Octobre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-11-08', jour: 'Samedi 8 Novembre 2025', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2025-11-20', jour: 'Jeudi 20 Novembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2025-12-06', jour: 'Samedi 6 Décembre 2025', heure: '10h00 - 12h00', modalite: 'présentiel' },
    { date: '2025-12-11', jour: 'Jeudi 11 Décembre 2025', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-01-05', jour: 'Lundi 5 Janvier 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-02-02', jour: 'Lundi 2 Février 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-02-21', jour: 'Samedi 21 Février 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-03-14', jour: 'Samedi 14 Mars 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-03-23', jour: 'Lundi 23 Mars 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-04-11', jour: 'Samedi 11 Avril 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-04-24', jour: 'Vendredi 24 Avril 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-05-11', jour: 'Lundi 11 Mai 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-05-30', jour: 'Samedi 30 Mai 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-06-04', jour: 'Jeudi 4 Juin 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-06-20', jour: 'Samedi 20 Juin 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-07-06', jour: 'Lundi 6 Juillet 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-07-18', jour: 'Samedi 18 Juillet 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-08-22', jour: 'Samedi 22 Août 2026', heure: '12h30 - 14h30', modalite: 'présentiel' },
    { date: '2026-08-24', jour: 'Lundi 24 Août 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-09-12', jour: 'Samedi 12 Septembre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-09-24', jour: 'Jeudi 24 Septembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-10-10', jour: 'Samedi 10 Octobre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-10-27', jour: 'Mardi 27 Octobre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-11-07', jour: 'Samedi 7 Novembre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-11-26', jour: 'Jeudi 26 Novembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2026-12-05', jour: 'Samedi 5 Décembre 2026', heure: '10h30 - 12h30', modalite: 'présentiel' },
    { date: '2026-12-17', jour: 'Jeudi 17 Décembre 2026', heure: '12h30 - 14h30', modalite: 'distanciel' },
    { date: '2027-01-09', jour: 'Samedi 9 Janvier 2027', heure: '10h30 - 12h30', modalite: 'présentiel' }
  ]

  // Dates à afficher selon la formation sélectionnée (filtrées automatiquement)
  const getDatesParFormation = () => {
    let dates = []
    if (formData.formation === 'FPA') dates = datesFPA
    if (formData.formation === 'CIP') dates = datesCIP
    
    // Filtrer automatiquement les dates passées
    const aujourdhui = new Date()
    aujourdhui.setHours(0, 0, 0, 0) // Remettre à minuit pour comparaison
    
    return dates.filter(reunion => {
      const dateReunion = new Date(reunion.date)
      return dateReunion >= aujourdhui
    })
  }

  const prochainesdates = getDatesParFormation()
  
  // Obtenir la modalité de la date sélectionnée
  const getModaliteFromDate = () => {
    if (!formData.dateReunion) return null
    const reunionSelectionnee = prochainesdates.find(r => r.date === formData.dateReunion)
    return reunionSelectionnee ? reunionSelectionnee.modalite : null
  }
  
  const modaliteSelectionnee = getModaliteFromDate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    // Si on change de formation, on remet à zéro la date sélectionnée
    if (name === 'formation') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        dateReunion: '' // Reset de la date quand on change de formation
      }))
      // Reset aussi l'affichage des dates si on change de formation
      setShowAllDates(false)
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Vérification honeypot côté client
    if (honeypot) {
      console.log('Honeypot déclenché')
      return
    }
    
    setIsSubmitting(true)
    setSubmitError('')

    try {
      const recaptchaToken = recaptchaRef.current
        ? await recaptchaRef.current.execute()
        : null

      const dataToSend = {
        ...formData,
        modalite: modaliteSelectionnee,
        honeypot,
        timestamp: formTimestamp,
        recaptchaToken,
      }

      const response = await fetch('/api/inscription-reunion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        recaptchaRef.current?.reset()
        setIsSubmitted(true)
      } else {
        recaptchaRef.current?.reset()
        throw new Error(data.message || 'Erreur lors de l\'inscription')
      }
    } catch (error) {
      recaptchaRef.current?.reset()
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitError(
        `Erreur lors de l'inscription : ${error.message}. Veuillez réessayer ou nous contacter directement.`
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Inscription confirmée - Réunions d'information collective | Atipik RH</title>
          <meta name="description" content="Votre inscription à nos réunions d'information a été confirmée. Nous vous contacterons prochainement." />
        </Head>

        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          {/* Background animé */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10">
            <Header />
            
            <section className="py-16 lg:py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                  <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    
                    <h1 className="text-3xl font-bold text-[#013F63] mb-4">
                      Inscription confirmée !
                    </h1>
                    
                    <p className="text-[#013F63] mb-6 leading-relaxed">
                      Merci pour votre inscription à nos réunions d'information collective. 
                      Nous vous contacterons prochainement pour confirmer votre présence 
                      et vous fournir tous les détails pratiques.
                    </p>
                    
                    <div className="bg-blue-50 rounded-lg p-6 mb-6">
                      <ul className="text-sm text-[#013F63] space-y-1">
                        <li>• Confirmation par email dans les 24h</li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#013F63] text-white font-semibold rounded-lg hover:bg-[#012a4a] transition-colors duration-300"
                      >
                        Retour à l'accueil
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#013F63] text-[#013F63] font-semibold rounded-lg hover:bg-[#013F63] hover:text-white transition-colors duration-300"
                      >
                        Nous contacter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Footer />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>S'inscrire aux réunions d'information collective | Atipik RH</title>
        <meta name="description" content="Inscrivez-vous à nos réunions d'information pour découvrir nos formations. Réunions organisées 2 fois par mois, le samedi matin à Lormont." />
        <meta name="keywords" content="inscription, réunion information, formation, Atipik RH, Lormont, samedi" />
        <link rel="canonical" href="https://www.atipikrh.com/s-inscrire" />
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background animé */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-3000"></div>
        
        <div className="relative z-10">
          <Header />
          
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                
                {/* En-tête */}
                <div className="text-center mb-12">
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#013F63] mb-4">
                    S'inscrire aux <span className="text-orange-500 font-brittany text-4xl lg:text-5xl">Réunions d'Information Collective</span>
                  </h1>
                  <p className="text-lg text-[#013F63] max-w-2xl mx-auto">
                    Participez à nos réunions d'information pour découvrir nos formations <strong>FPA</strong> et <strong>CIP</strong> et rencontrer notre équipe pédagogique.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Informations pratiques */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-6">Informations pratiques</h2>
                    
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#013F63] mb-1">Horaires</h3>
                          {(formData.formation === 'FPA' || formData.formation === 'CIP') && (
                            <p className="text-[#013F63]">Samedi matin de 10h30 à 12h30</p>
                          )}
                          {!formData.formation && (
                            <p className="text-[#013F63] italic">Sélectionnez une formation pour voir les horaires</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          {modaliteSelectionnee === 'distanciel' ? (
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#013F63] mb-1">
                            {modaliteSelectionnee === 'distanciel' ? 'Modalité' : 'Lieu'}
                          </h3>
                          {modaliteSelectionnee === 'distanciel' ? (
                            <>
                              <p className="text-[#013F63] font-medium">Visioconférence en ligne</p>
                              <p className="text-[#013F63]">Lien envoyé par email</p>
                              <p className="text-sm text-[#013F63] mt-1">Connexion sécurisée • Test technique possible</p>
                            </>
                          ) : modaliteSelectionnee === 'présentiel' ? (
                            <>
                              <p className="text-[#013F63] font-medium">ATIPIK RH</p>
                              <p className="text-[#013F63]">8 Rue du Courant</p>
                              <p className="text-[#013F63]">33310 Lormont</p>
                              <p className="text-sm text-[#013F63] mt-1">Parking gratuit disponible</p>
                            </>
                          ) : (
                            <p className="text-[#013F63] italic">Sélectionnez une date pour voir les détails</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                          <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#013F63] mb-1">Au programme</h3>
                          <div className="text-[#013F63] space-y-1">
                            <div>Présentation des formations FPA ou CIP</div>
                            <div>Détails sur les contenus et débouchés</div>
                            <div>Questions / Réponses personnalisées</div>
                            <div>Informations sur les financements</div>
                          </div>
                          <FinancementDisclaimer className="mt-4 text-left" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Formulaire d'inscription */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-6">Formulaire d'inscription</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <HoneypotField value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                      <FormAlert message={submitError} onDismiss={() => setSubmitError('')} />
                      <div>
                        <label htmlFor="formation" className="block text-sm font-medium text-[#013F63] mb-2">
                          Formation qui vous intéresse <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="formation"
                          name="formation"
                          required
                          value={formData.formation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors text-[#013F63]"
                        >
                          <option value="">Choisir une formation</option>
                          <option value="FPA">Formation Professionnelle pour Adultes (FPA)</option>
                          <option value="CIP">Conseiller en Insertion Professionnelle (CIP)</option>
                        </select>
                        <p className="mt-2 text-sm text-[#013F63]">
                          Sélectionnez la formation pour laquelle vous souhaitez obtenir des informations lors de la réunion.
                        </p>
                      </div>


                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="nom" className="block text-sm font-medium text-[#013F63] mb-2">
                            Nom <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="nom"
                            name="nom"
                            required
                            value={formData.nom}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                            placeholder="Votre nom"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="prenom" className="block text-sm font-medium text-[#013F63] mb-2">
                            Prénom <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="prenom"
                            name="prenom"
                            required
                            value={formData.prenom}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                            placeholder="Votre prénom"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#013F63] mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                          placeholder="votre.email@exemple.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-[#013F63] mb-2">
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          required
                          value={formData.telephone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                          placeholder="06 12 34 56 78"
                        />
                      </div>

                      <div>
                        <label htmlFor="dateReunion" className="block text-sm font-medium text-[#013F63] mb-2">
                          Date de réunion souhaitée <span className="text-red-500">*</span>
                        </label>
                        {formData.formation ? (
                          <select
                            id="dateReunion"
                            name="dateReunion"
                            required
                            value={formData.dateReunion}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors text-[#013F63]"
                          >
                            <option value="">Choisir une date pour {formData.formation === 'FPA' ? 'la FPA' : 'le CIP'}</option>
                            {prochainesdates.map((reunion) => (
                              <option key={reunion.date} value={reunion.date}>
                                {reunion.jour} - {reunion.heure} (en {reunion.modalite})
                              </option>
                            ))}
                          </select>
                        ) : (
                          <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-[#013F63]">
                            Sélectionnez d'abord une formation pour voir les dates disponibles
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="motivations" className="block text-sm font-medium text-[#013F63] mb-2">
                          Vos motivations (optionnel)
                        </label>
                        <textarea
                          id="motivations"
                          name="motivations"
                          rows={4}
                          value={formData.motivations}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                          placeholder="Parlez-nous de votre projet professionnel..."
                        />
                      </div>

                      <div>
                        <label htmlFor="statut" className="block text-sm font-medium text-[#013F63] mb-2">
                          Votre statut <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="statut"
                          name="statut"
                          required
                          value={formData.statut}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors text-[#013F63]"
                        >
                          <option value="">Choisir votre statut</option>
                          <option value="salarie">Salarié(e) en poste</option>
                          <option value="demandeur">Demandeur(se) d'emploi</option>
                          <option value="autre">Autre</option>
                        </select>
                        {formData.statut === 'autre' && (
                          <div className="mt-3">
                            <label htmlFor="statutAutre" className="block text-sm font-medium text-[#013F63] mb-2">
                              Précisez votre statut
                            </label>
                            <input
                              type="text"
                              id="statutAutre"
                              name="statutAutre"
                              value={formData.statutAutre}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                              placeholder="Précisez votre statut"
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <label htmlFor="commentConnu" className="block text-sm font-medium text-[#013F63] mb-2">
                          Comment avez-vous connu notre centre ? <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="commentConnu"
                          name="commentConnu"
                          required
                          value={formData.commentConnu}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors text-[#013F63]"
                        >
                          <option value="">Choisir comment vous nous avez connus</option>
                          <option value="instagram">Instagram</option>
                          <option value="linkedin">Linkedin</option>
                          <option value="facebook">Facebook</option>
                          <option value="google">Google</option>
                          <option value="site">Site internet</option>
                          <option value="mail">Mail</option>
                          <option value="autre">Autre</option>
                        </select>
                        {formData.commentConnu === 'autre' && (
                          <div className="mt-3">
                            <label htmlFor="commentConnuAutre" className="block text-sm font-medium text-[#013F63] mb-2">
                              Précisez comment vous nous avez connus
                            </label>
                            <input
                              type="text"
                              id="commentConnuAutre"
                              name="commentConnuAutre"
                              value={formData.commentConnuAutre}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#013F63] focus:border-transparent transition-colors"
                              placeholder="Précisez comment vous nous avez connus"
                            />
                          </div>
                        )}
                      </div>


                      <RecaptchaV2Invisible ref={recaptchaRef} />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#013F63] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#012a4a] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Inscription en cours...
                          </span>
                        ) : (
                          'S\'inscrire à la réunion'
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center leading-relaxed">
                        Ce site est protégé par reCAPTCHA.{' '}
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#013F63]"
                        >
                          Politique de confidentialité
                        </a>{' '}
                        et{' '}
                        <a
                          href="https://policies.google.com/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#013F63]"
                        >
                          Conditions d&apos;utilisation
                        </a>{' '}
                        de Google.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </>
  )
}
