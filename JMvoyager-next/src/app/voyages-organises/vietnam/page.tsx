import type { Metadata } from 'next'
import Image from 'next/image'
import { VoyageForm } from '@/components/forms/VoyageForm'
import { SectionHeader } from '@/components/ui/SectionHeader'

export const metadata: Metadata = {
  title: 'Voyage organisé Vietnam',
  description: 'Voyage organisé au Vietnam : Hanoi, Sa Pa, Baie d\'Halong, Hoi An, Da Nang. 6 – 18 Décembre 2025.',
}

const PROGRAMME = [
  { jour: 'J1–J2',   lieu: 'Hanoi',           desc: 'Arrivée à Hanoi, visite du Vieux Quartier, lac de l\'Épée restituée, temple de la Littérature. Dîner traditionnel.' },
  { jour: 'J3–J4',   lieu: 'Sa Pa',            desc: 'Train de nuit vers Sa Pa dans les montagnes du Nord. Rizières en terrasses, rencontre avec les minorités ethniques H\'Mong.' },
  { jour: 'J5–J7',   lieu: 'Baie d\'Halong',  desc: 'Croisière 2 nuits en jonque dans la baie classée à l\'UNESCO. Kayak, grotte des Merveilles, coucher de soleil sur les rochers calcaires.' },
  { jour: 'J8–J9',   lieu: 'Hội An',          desc: 'Vieille ville lanternée, tailleurs sur mesure, cours de cuisine vietnamienne, plage de An Bàng.' },
  { jour: 'J10–J13', lieu: 'Da Nang',          desc: 'Pont du Dragon, collines des Marbres, plage de My Khê. Journée libre, shopping et vol retour.' },
]

const INCLUS = [
  'Vols aller-retour depuis Paris (CDG)',
  'Hébergements sélectionnés (hôtels & jonque de croisière)',
  'Train Hanoi – Sa Pa (aller-retour)',
  'Croisière 2 nuits en Baie d\'Halong',
  'Guide francophone tout au long du séjour',
  'Activités et excursions mentionnées au programme',
  'Assistance JM Voyager 24h/24',
]

const NON_INCLUS = [
  'Assurance voyage (recommandée)',
  'Repas non mentionnés',
  'Dépenses personnelles & pourboires',
  'Visa électronique (e-visa Vietnam obligatoire)',
]

export default function VietnamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end bg-brand-dark overflow-hidden">
        <Image
          src="/images/imageviet1.png"
          alt="Voyage organisé Vietnam"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="img-overlay" />
        <div className="relative z-10 container-site pb-12 text-white">
          <p className="section-tag text-gold mb-3">Voyage organisé · Asie</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Vietnam</h1>
          <p className="text-lg text-gray-200">
            6 — 18 Décembre 2025 &nbsp;·&nbsp; 13 jours &nbsp;·&nbsp; À partir de <strong className="text-gold">2 099 €</strong>
          </p>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-2 space-y-14">

            <div>
              <SectionHeader tag="Le voyage" title="Du Nord au Centre, l'âme du Vietnam" />
              <p className="text-gray-600 leading-relaxed mt-4">
                Des montagnes brumeuses de Sa Pa à la baie mythique d'Halong, jusqu'aux ruelles
                dorées d'Hội An — ce voyage traverse le Vietnam du nord au centre, révélant sa
                beauté naturelle, sa richesse culturelle et sa gastronomie incomparable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['🚤 Croisière', '🌾 Rizières', '🏮 Culture', '🍜 Gastronomie', '🏖️ Plages'].map(tag => (
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
                  <p className="text-sm text-gold font-medium mb-1">Voyage Vietnam · 2025</p>
                  <p className="text-2xl font-bold font-display">2 099 € <span className="text-base font-normal text-gray-300">/ pers.</span></p>
                  <p className="text-xs text-gray-400 mt-1">6 — 18 Décembre 2025 · 13 jours</p>
                </div>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-gray-900 mb-5">Réserver ma place</h2>
                  <VoyageForm voyage="Vietnam" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
