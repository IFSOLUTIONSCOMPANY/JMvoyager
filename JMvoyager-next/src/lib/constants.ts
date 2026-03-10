/* ── Informations de contact ── */
export const CONTACT = {
  phone:    '0670331337',
  phoneDisplay: '06 70 33 13 37',
  email:    'jetmvoyager@outlook.fr',
  website:  'www.jm-voyager.fr',
  address:  'France — Paris / Oise',
  hours:    'Lun–Ven : 9h–20h',
  instagram: 'https://www.instagram.com/j.m_voyager/',
  tiktok:   'https://www.tiktok.com/@jm.voyager',
}

/* ── Formspree ── */
export const FORMSPREE = {
  contact: 'https://formspree.io/f/xzzbyzde',
  voyage:  'https://formspree.io/f/mannbyeq',
}

/* ── Google Analytics ── */
export const GA_ID = 'G-RWCPRJV0C0'

/* ── Destinations du menu ── */
export const DESTINATIONS = {
  afrique: [
    { name: 'Afrique du Sud', href: '/destinations/afrique-du-sud' },
    { name: 'Éthiopie',       href: '#' },
    { name: 'Kenya',          href: '#' },
    { name: 'Madagascar',     href: '#' },
    { name: 'Maroc',          href: '#' },
    { name: 'Namibie',        href: '#' },
    { name: 'La Réunion',     href: '#' },
    { name: 'Tanzanie',       href: '#' },
    { name: 'Zanzibar',       href: '#' },
  ],
  ameriqueCentrale: [
    { name: 'Belize',      href: '#' },
    { name: 'Costa Rica',  href: '#' },
    { name: 'Guatemala',   href: '#' },
    { name: 'Panama',      href: '#' },
  ],
  ameriqueNord: [
    { name: 'États-Unis', href: '#' },
    { name: 'Mexique',    href: '#' },
  ],
  ameriqueSud: [
    { name: 'Argentine', href: '#' },
    { name: 'Bolivie',   href: '#' },
    { name: 'Brésil',    href: '/voyages-organises/bresil' },
    { name: 'Colombie',  href: '/voyages-organises/colombie' },
    { name: 'Équateur',  href: '#' },
    { name: 'Pérou',     href: '#' },
  ],
  asie: [
    { name: 'Cambodge',  href: '#' },
    { name: 'Inde',      href: '#' },
    { name: 'Japon',     href: '#' },
    { name: 'Thaïlande', href: '#' },
    { name: 'Vietnam',   href: '/voyages-organises/vietnam' },
  ],
}

/* ── Voyages organisés ── */
export const VOYAGES = [
  {
    slug:      'colombie',
    name:      'Colombie',
    dates:     '28 Avril — 10 Mai 2025',
    price:     '2 350 €',
    places:    'Punta Gallinas · Santa Marta · Carthagène · San Andrés',
    image:     '/images/img_colombie2.jpg',
    href:      '/voyages-organises/colombie',
    formId:    'mannbyeq',
  },
  {
    slug:      'bresil',
    name:      'Brésil',
    dates:     '13 — 23 Août 2025',
    price:     '2 450 €',
    places:    'Rio de Janeiro · Paraty · Corcovado · Ipanema',
    image:     '/images/brasilnew.jpeg',
    href:      '/voyages-organises/bresil',
    formId:    'mannbyeq',
  },
  {
    slug:      'vietnam',
    name:      'Vietnam',
    dates:     '6 — 18 Décembre 2025',
    price:     '2 099 €',
    places:    'Hanoi · Sa Pa · Baie d\'Halong · Hoi An · Da Nang',
    image:     '/images/imageviet1.png',
    href:      '/voyages-organises/vietnam',
    formId:    'mannbyeq',
  },
]

/* ── Destinations populaires (accueil) ── */
export const POPULAR_DESTINATIONS = [
  { name: 'France, Paris',          image: '/images/torre-eiffel-altura.png', href: '#' },
  { name: 'Brésil, Rio de Janeiro', image: '/images/brasilnew.jpeg',          href: '/voyages-organises/bresil' },
  { name: 'Afrique du Sud',         image: '/images/afriquedusud570x370.png', href: '/destinations/afrique-du-sud' },
  { name: 'Espagne, Benidorm',      image: '/images/espagneee.jpg',           href: '#' },
  { name: 'Égypte, Sharm El Sheikh',image: '/images/egypteee.png',            href: '#' },
  { name: 'Mexique, Cancun',        image: '/images/mexiquecancun.jpg',       href: '#' },
]

/* ── Étapes "comment ça marche" ── */
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Imaginez votre voyage',
    text:  'Découvrez nos +50 destinations dans nos guides de voyage pour vous inspirer.',
    icon:  '✈️',
  },
  {
    step: '02',
    title: 'On vous guide',
    text:  'Échangez avec nos experts basés à Paris pour trouver le voyage idéal.',
    icon:  '🗺️',
  },
  {
    step: '03',
    title: 'On prépare tout',
    text:  'Nous créons un itinéraire 100 % sur mesure selon vos envies et votre budget.',
    icon:  '🏙️',
  },
  {
    step: '04',
    title: 'Assistance VIP',
    text:  'Disponibles 24h/24, 7j/7 avant, pendant et après votre voyage.',
    icon:  '🏖️',
  },
]

/* ── Destinations formulaire contact ── */
export const CONTACT_DESTINATIONS = [
  { group: 'Afrique',           options: ['Afrique du Sud','Éthiopie','Kenya','La Réunion','Madagascar','Maroc','Namibie','Tanzanie','Zanzibar'] },
  { group: 'Amérique Centrale', options: ['Belize','Costa Rica','Guatemala','Honduras','Panama'] },
  { group: 'Amérique du Nord',  options: ['États-Unis','Mexique'] },
  { group: 'Amérique du Sud',   options: ['Argentine','Bolivie','Colombie','Équateur','Pérou','Venezuela'] },
  { group: 'Asie',              options: ['Cambodge','Inde','Japon','Thaïlande','Vietnam'] },
]
