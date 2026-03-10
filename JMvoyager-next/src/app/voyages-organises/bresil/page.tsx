import type { Metadata } from 'next'
import Image from 'next/image'
import { VoyageForm } from '@/components/forms/VoyageForm'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Voyage organisé Brésil',
  description: 'Voyage organisé au Brésil : Rio de Janeiro, Paraty, Corcovado, Ipanema. 13 – 23 Août 2025.',
}

const PROGRAMME = [
  { jour: 'J1–J2',   lieu: 'Arrivée à Rio de Janeiro', desc: 'Accueil à l\'aéroport international. Installation et première soirée sur la plage de Copacabana.' },
  { jour: 'J3–J4',   lieu: 'Rio — Corcovado & Lapa',  desc: 'Visite du Christ Rédempteur, quartier de Santa Teresa, escaliers Selarón, soirée samba à Lapa.' },
  { jour: 'J5–J6',   lieu: 'Ipanema & Îles',          desc: 'Plages d\'Ipanema et Leblon, excursion en bateau vers les îles de Cagarras. Coucher de soleil depuis le Pain de Sucre.' },
  { jour: 'J7–J9',   lieu: 'Paraty',                  desc: 'Route côtière vers Paraty, ville coloniale au cœur de la Mata Atlântica. Croisière dans la baie, plages sauvages.' },
  { jour: 'J10–J11', lieu: 'Retour à Rio',             desc: 'Journée shopping & marché Hippie d\'Ipanema. Dîner d\'au revoir churrascaria. Vol retour vers Paris.' },
]

const INCLUS = [
  'Vols aller-retour depuis Paris (CDG)',
  'Hébergements sélectionnés (hôtels & pousadas)',
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

export default function BresilPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end bg-brand-dark overflow-hidden">
        <Image
          src="/images/brasilnew.jpeg"
          alt="Voyage organisé Brésil"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="img-overlay" />
        <div className="relative z-10 container-site pb-12 text-white">
          <p className="section-tag text-gold mb-3">Voyage organisé · Amérique du Sud</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Brésil</h1>
          <p className="text-lg text-gray-200">
            13 — 23 Août 2025 &nbsp;·&nbsp; 11 jours &nbsp;·&nbsp; À partir de <strong className="text-gold">2 450 €</strong>
          </p>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-14">

            <div>
              <SectionHeader tag="Le voyage" title="Rio, plages et forêt atlantique" />
              <p className="text-gray-600 leading-relaxed mt-4">
                Rio de Janeiro, ses plages mythiques, la forêt tropicale et l'âme festive du Brésil —
                ce voyage vous plonge dans la magie de la Cidade Maravilhosa et vous emmène
                découvrir les trésors cachés de la Costa Verde, entre nature et culture coloniale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['🏖️ Plages', '🌿 Forêt', '🎶 Samba', '⛵ Croisière', '🗿 Culture'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

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

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden">
                <div className="bg-brand-dark p-6 text-white">
                  <p className="text-sm text-gold font-medium mb-1">Voyage Brésil · 2025</p>
                  <p className="text-2xl font-bold font-display">2 450 € <span className="text-base font-normal text-gray-300">/ pers.</span></p>
                  <p className="text-xs text-gray-400 mt-1">13 — 23 Août 2025 · 11 jours</p>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-gray-900 mb-5">Réserver ma place</h2>
                  <VoyageForm voyage="Brésil" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
