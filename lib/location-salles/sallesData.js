/** Données des salles de location — source unique pour pages et sitemap. */
export const SALLES_DATA = {
  'grande-salle-formation': {
    nom: 'Nouvelle donne',
    capacite: '20 personnes',
    surface: '30m²',
    images: [
      '/images/salles/grande-salle-1.jpg',
      '/images/salles/grande-salle-2.jpg',
      '/images/salles/grande-salle-3.jpg',
    ],
    demiJournee: 170,
    journee: 250,
    weekend: 265,
    description:
      "Notre plus grande salle, spacieuse et lumineuse, parfaitement adaptée pour vos formations, séminaires et conférences. Avec ses 30m² et sa capacité d'accueil de 20 personnes, elle offre un environnement professionnel optimal pour tous vos événements.",
    equipements: [
      'Vidéoprojecteur HD 1080p',
      'Tables modulables',
      'Climatisation réversible',
      'Prises électriques multiples',
      'Connexion HDMI/USB',
      'Wi-Fi haut débit',
      'Thé et café',
    ],
    amenagements: [
      'Configuration théâtre (20 personnes)',
      'Configuration U (16 personnes)',
      'Configuration îlots (16 personnes)',
      'Configuration cocktail (20 personnes max)',
    ],
  },
  'salle-reunion-moyenne': {
    nom: 'Mission possible',
    capacite: '15 personnes',
    surface: '25m²',
    images: [
      '/images/salles/salle-moyenne-1.jpg',
      '/images/salles/salle-moyenne-2.jpg',
      '/images/salles/salle-moyenne-3.jpg',
    ],
    demiJournee: 120,
    journee: 195,
    weekend: 210,
    description:
      "Salle polyvalente idéale pour réunions d'équipe, ateliers collaboratifs et sessions de brainstorming. Son aménagement flexible et ses équipements modernes favorisent l'interaction et la créativité.",
    equipements: [
      'Vidéoprojecteur HD 1080p',
      'Tables modulables',
      'Prises électriques multiples',
      'Wi-Fi haut débit',
      'Thé et café',
    ],
    amenagements: [
      'Table de réunion ovale (15 personnes)',
      'Espaces détente',
      'Coin présentation',
      'Configuration workshop',
    ],
  },
  'petite-salle-reunion': {
    nom: 'La passerelle',
    capacite: '10 personnes',
    surface: '20m²',
    images: [
      '/images/salles/petite-salle-1.jpg',
      '/images/salles/petite-salle-2.jpg',
      '/images/salles/petite-salle-3.jpg',
    ],
    demiJournee: 80,
    journee: 130,
    weekend: 145,
    description:
      "Espace chaleureux et feutré, parfait pour réunions restreintes, entretiens confidentiels et sessions de coaching. L'ambiance cosy favorise les échanges privilégiés et la concentration.",
    equipements: [
      'Vidéoprojecteur HD 1080p',
      'Tables modulables',
      'Prises électriques multiples',
      'Wi-Fi haut débit',
      'Thé et café',
    ],
    amenagements: ['Configuration ronde (10 personnes)', 'Espace cocooning'],
  },
  'bureau-individuel-1': {
    nom: 'Leboncoin à idée',
    capacite: '1 personne',
    surface: '7m²',
    images: ['/images/salles/bureau-individuel-1.jpg'],
    demiJournee: 40,
    journee: 70,
    weekend: 85,
    metaTitle: 'Bureau individuel Leboncoin à idée (7 m²) | Location Lormont',
    metaDescription:
      'Louez le bureau Leboncoin à idée à Lormont : 7 m², 1 personne, espace calme pour rédiger, visio ou travail concentré. À partir de 40 € la demi-journée, parking inclus.',
    description:
      'Bureau compact de 7 m², calme et fermé, pensé pour le travail en autonomie : rédaction, visio ou préparation d’un dossier sans open space. Plus intimiste que « La tour de contrôle » (8 m², vue).',
    equipements: [
      'Poste solo (bureau, chaise, rangement fermé)',
      'Wi-Fi haut débit',
      'Prises électriques multiples',
      'Thé et café à l’accueil',
      'Parking privé gratuit',
    ],
    amenagements: ['Configuration bureau compact 7 m²', 'Espace fermé 1 personne', 'Idéal concentration / visio'],
  },
  'bureau-individuel-2': {
    nom: 'La tour de contrôle',
    capacite: '1 personne',
    surface: '8m²',
    images: ['/images/salles/bureau-individuel-2.jpg'],
    demiJournee: 40,
    journee: 70,
    weekend: 85,
    metaTitle: 'Bureau La tour de contrôle (8 m², vue) | Location Lormont',
    metaDescription:
      'Louez La tour de contrôle à Lormont : bureau 8 m² avec vue dégagée, entretiens individuels et préparation de formation. À partir de 40 € la demi-journée, parking inclus.',
    description:
      'Bureau de 8 m² avec vue dégagée, surnommé « La tour de contrôle ». Un peu plus spacieux que le bureau compact voisin (7 m²), il convient aux entretiens individuels, au coaching et à la préparation d’une session de formation.',
    equipements: [
      'Bureau plus large (table, chaise, rangement)',
      'Vue dégagée sur l’extérieur',
      'Wi-Fi haut débit',
      'Accès imprimante du centre',
      'Thé et café à l’accueil',
      'Parking privé gratuit',
    ],
    amenagements: ['Bureau 8 m² avec vue', 'Entretiens et coaching 1:1', 'Préparation de formation'],
  },
}

export const SALLES_IDS = Object.keys(SALLES_DATA)
