import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SInscrire() {
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
  const [showAllDates, setShowAllDates] = useState(false)

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
    { date: '2026-03-05', jour: 'Jeudi 5 Mars 2026', heure: '12h30 - 14h30', modalite: 'distanciel' }
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
    { date: '2026-01-05', jour: 'Lundi 5 Janvier 2026', heure: '12h30 - 14h30', modalite: 'distanciel' }
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
    setIsSubmitting(true)

    try {
      // Ajouter la modalité aux données envoyées
      const dataToSend = {
        ...formData,
        modalite: modaliteSelectionnee
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
        setIsSubmitted(true)
      } else {
        throw new Error(data.message || 'Erreur lors de l\'inscription')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      console.error('Données envoyées:', dataToSend)
      console.error('Response status:', response?.status)
      console.error('Response data:', data)
      alert(`Erreur lors de l'inscription: ${error.message}. Veuillez réessayer ou nous contacter directement.`)
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
        <link rel="canonical" href="https://atipikrh.fr/s-inscrire" />
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
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Formulaire d'inscription */}
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-2xl font-bold text-[#013F63] mb-6">Formulaire d'inscription</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
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
