import type { Metadata } from 'next'
import Image from 'next/image'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Afrique du Sud — Destination',
  description: 'Découvrez l\'Afrique du Sud avec JM Voyager : safari, Cape Town, route des jardins et côte sauvage.',
}

const HIGHLIGHTS = [
  { icon: '🦁', title: 'Safari inoubliable',    text: 'Big Five dans le Kruger National Park, réserves privées, soirées au coin du feu.' },
  { icon: '🏔️', title: 'Cape Town & Table Mountain', text: 'Cap de Bonne-Espérance, câble car vers Table Mountain, quartier de Bo-Kaap.' },
  { icon: '🌊', title: 'Garden Route',           text: 'Mossel Bay, Knysna, Tsitsikamma — des paysages à couper le souffle.' },
  { icon: '🍷', title: 'Route des Vins',         text: 'Stellenbosch et Franschhoek, meilleurs vignobles du continent africain.' },
]

export default function AfriqueDuSudPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end bg-brand-dark overflow-hidden">
        <Image
          src="/images/afriquedusud570x370.png"
          alt="Afrique du Sud"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="img-overlay" />
        <div className="relative z-10 container-site pb-12 text-white">
          <p className="section-tag text-gold mb-3">Destination · Afrique</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">Afrique du Sud</h1>
          <p className="text-gray-200 text-lg">Safari, Cape Town, route des jardins — un pays aux mille visages</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-4xl">
          <SectionHeader tag="La destination" title="La nation arc-en-ciel" center />
          <p className="text-gray-600 leading-relaxed text-center mt-4 max-w-2xl mx-auto">
            L'Afrique du Sud est l'une des destinations les plus riches et contrastées au monde.
            Safaris avec les Big Five, villes cosmopolites, vignobles, falaises océanes,
            peuples et cultures multiples — ce pays vous en donne pour bien plus que ce que vous espériez.
          </p>
        </div>
      </section>

      {/* ── Points forts ── */}
      <section className="py-16 bg-brand-light">
        <div className="container-site">
          <SectionHeader tag="À ne pas manquer" title="Les incontournables" center />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map(h => (
              <div key={h.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="text-4xl mb-4">{h.icon}</div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{h.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infos pratiques ── */}
      <section className="py-16 bg-white">
        <div className="container-site max-w-3xl">
          <SectionHeader tag="Infos pratiques" title="Préparer son voyage" center />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Capitale',        value: 'Pretoria (administrative)' },
              { label: 'Monnaie',         value: 'Rand sud-africain (ZAR)' },
              { label: 'Langue',          value: '11 langues officielles, anglais courant' },
              { label: 'Meilleure période', value: 'Avr – Oct (hiver austral, sec et doux)' },
              { label: 'Vol direct',      value: 'Paris – Johannesburg (~11h)' },
              { label: 'Décalage horaire', value: '+1h (hiver), +0h (été)' },
            ].map(info => (
              <div key={info.label} className="p-4 bg-brand-light rounded-xl border border-gray-100 flex gap-3">
                <p className="text-xs text-gray-400 font-medium w-32 shrink-0">{info.label}</p>
                <p className="text-sm text-gray-800 font-medium">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="container-site max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">Partez en Afrique du Sud</h2>
          <p className="text-gray-400 mb-8">
            Contactez-nous pour créer votre itinéraire sur mesure, à la date et selon le budget qui vous conviennent.
          </p>
          <Button href="/contact" size="lg">Demander un devis gratuit →</Button>
        </div>
      </section>
    </>
  )
}
