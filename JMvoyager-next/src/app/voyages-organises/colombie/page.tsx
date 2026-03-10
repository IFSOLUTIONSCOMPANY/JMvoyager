import type { Metadata } from 'next'
import Image from 'next/image'
import { VoyageForm } from '@/components/forms/VoyageForm'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Voyage organisé Colombie',
  description: 'Voyage organisé en Colombie : Punta Gallinas, Santa Marta, Carthagène, San Andrés. 28 Avril – 10 Mai 2025.',
}

const PROGRAMME = [
  { jour: 'J1–J2',  lieu: 'Arrivée à Bogotá',     desc: 'Accueil à l\'aéroport, installation et dîner de bienvenue. Découverte du quartier de la Candelaria.' },
  { jour: 'J3–J4',  lieu: 'Punta Gallinas',        desc: 'Cap sur le désert de La Guajira, le point le plus au nord de l\'Amérique du Sud. Couchers de soleil inoubliables.' },
  { jour: 'J5–J6',  lieu: 'Santa Marta',           desc: 'Parc Tayrona, plages sauvages et jungle luxuriante. Snorkeling et randonnées.' },
  { jour: 'J7–J9',  lieu: 'Carthagène des Indes',  desc: 'Vieille ville coloniale classée à l\'UNESCO, îles du Rosaire, ambiance caribéenne.' },
  { jour: 'J10–J13', lieu: 'San Andrés',           desc: 'Île paradisiaque, mer des Sept Couleurs, plongée, farniente et fête. Retour en France.' },
]

const INCLUS = [
  'Vols aller-retour depuis Paris (CDG)',
  'Hébergements sélectionnés (hôtels boutique & lodges)',
  'Transferts et transports sur place',
  'Guide francophone tout au long du séjour',
  'Activités et excursions mentionnées au programme',
  'Assistance JM Voyager 24h/24',
]

const NON_INCLUS = [
  'Assurance voyage (recommandée)',
  'Repas non mentionnés',
  'Dépenses personnelles & pourboires',
  'Visa (si applicable)',
]

export default function ColombiePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end bg-brand-dark overflow-hidden">
        <Image
          src="/images/img_colombie2.jpg"
          alt="Voyage organisé Colombie"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="img-overlay" />
        <div className="relative z-10 container-site pb-12 text-white">
          <p className="section-tag text-gold mb-3">Voyage organisé · Amérique du Sud</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Colombie</h1>
          <p className="text-lg text-gray-200">
            28 Avril — 10 Mai 2025 &nbsp;·&nbsp; 13 jours &nbsp;·&nbsp; À partir de <strong className="text-gold">2 350 €</strong>
          </p>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ── Contenu principal ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* Intro */}
            <div>
              <SectionHeader tag="Le voyage" title="La Colombie grandeur nature" />
              <p className="text-gray-600 leading-relaxed mt-4">
                De la pointe sauvage de La Guajira aux eaux turquoise de San Andrés en passant par
                les ruelles colorées de Carthagène, ce voyage vous fait traverser les visages les
                plus envoûtants de la Colombie. Un itinéraire soigneusement conçu pour allier
                aventure, culture et détente.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['🏖️ Plages', '🌿 Nature', '🏛️ Culture', '🤿 Plongée', '🌅 Paysages'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Programme */}
            <div>
              <SectionHeader tag="Itinéraire" title="Programme jour par jour" />
              <div className="mt-6 space-y-4">
                {PROGRAMME.map((p, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-brand-light rounded-2xl border border-gray-100">
                    <div className="shrink-0 text-center">
                      <span className="text-xs font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-full">{p.jour}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{p.lieu}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclus / Non inclus */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 border border-green-100 rounded-2xl">
                <h3 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <span className="text-green-600">✓</span> Inclus dans le prix
                </h3>
                <ul className="space-y-2">
                  {INCLUS.map(item => (
                    <li key={item} className="text-sm text-green-700 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl">
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <span className="text-gray-400">✗</span> Non inclus
                </h3>
                <ul className="space-y-2">
                  {NON_INCLUS.map(item => (
                    <li key={item} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="text-gray-400 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Formulaire ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-brand-dark p-6 text-white">
                  <p className="text-sm text-gold font-medium mb-1">Voyage Colombie · 2025</p>
                  <p className="text-2xl font-bold font-display">2 350 € <span className="text-base font-normal text-gray-300">/ pers.</span></p>
                  <p className="text-xs text-gray-400 mt-1">28 Avril — 10 Mai 2025 · 13 jours</p>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-gray-900 mb-5">Réserver ma place</h2>
                  <VoyageForm voyage="Colombie" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
