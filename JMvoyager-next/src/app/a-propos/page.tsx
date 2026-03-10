import type { Metadata } from 'next'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'À propos — Notre histoire et nos valeurs',
  description: 'Découvrez l\'histoire de JM Voyager, notre équipe de passionnés et notre approche du voyage sur mesure.',
}

const VALEURS = [
  {
    icon: '✈️',
    title: 'Expertise terrain',
    text: 'Nos experts ont parcouru chaque destination pour vous garantir des conseils authentiques et des expériences hors des sentiers battus.',
  },
  {
    icon: '🤝',
    title: 'Relation de confiance',
    text: 'Nous prenons le temps de vous écouter pour créer un voyage qui vous ressemble vraiment — pas un catalogue, mais votre histoire.',
  },
  {
    icon: '⭐',
    title: 'Excellence du service',
    text: 'De la première discussion à votre retour, nous sommes présents 24h/24 pour que chaque moment soit parfait.',
  },
  {
    icon: '🌍',
    title: 'Tourisme responsable',
    text: 'Nous sélectionnons des hébergements et partenaires locaux engagés, pour un voyage respectueux des populations et de l\'environnement.',
  },
]

const SERVICES = [
  {
    title: 'Voyages sur mesure',
    text: 'Itinéraire 100 % personnalisé selon vos dates, votre budget et vos envies. Une seule règle : vos désirs.',
    icon: '🗺️',
  },
  {
    title: 'Voyages organisés',
    text: 'Partez en groupe avec un programme clés en main, un guide francophone et une ambiance garantie.',
    icon: '👥',
  },
  {
    title: 'Assistance VIP',
    text: 'Un interlocuteur dédié, joignable avant, pendant et après le voyage pour répondre à toutes vos questions.',
    icon: '📞',
  },
  {
    title: 'Hébergements de charme',
    text: 'Hôtels boutique, lodges, écolodges, ryokans… nous sélectionnons des adresses qui ont une âme.',
    icon: '🏨',
  },
]

export default function AProposPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-site text-center">
          <p className="section-tag text-gold mb-4">Notre histoire</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Une passion, une agence</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            JM Voyager est née d'une conviction simple : chaque voyage doit être unique, comme celui qui le vit.
          </p>
        </div>
      </section>

      {/* ── Histoire ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader tag="Qui sommes-nous" title="Nés du voyage, construits pour vous" />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  JM Voyager, c'est une agence fondée par des voyageurs passionnés, las des formules toutes faites
                  et des groupes impersonnels. Notre conviction : le voyage doit vous transformer,
                  vous surprendre, vous enrichir.
                </p>
                <p>
                  Basés à Paris et dans l'Oise, nous avons sillonné plus de 50 destinations à travers
                  le monde — Amérique latine, Asie, Afrique — pour construire un carnet d'adresses
                  exclusive et des itinéraires qui sortent vraiment des sentiers battus.
                </p>
                <p>
                  Que vous partiez en solo, en couple, en famille ou entre amis, nous mettons notre
                  expertise à votre service pour créer le voyage dont vous rêvez.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact">Démarrer mon projet →</Button>
              </div>
            </div>

            {/* Chiffres clés */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '50+',  label: 'Destinations' },
                { value: '3',    label: 'Voyages organisés / an' },
                { value: '100%', label: 'Sur mesure' },
                { value: '24/7', label: 'Assistance' },
              ].map(s => (
                <div key={s.label} className="bg-brand-light rounded-2xl p-8 text-center border border-gray-100">
                  <p className="font-display text-4xl font-bold text-gold mb-2">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-20 bg-brand-light">
        <div className="container-site">
          <SectionHeader
            tag="Nos valeurs"
            title="Ce qui nous guide chaque jour"
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALEURS.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <SectionHeader
            tag="Nos services"
            title="Tout ce dont vous avez besoin"
            center
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="flex gap-5 p-6 bg-brand-light rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="container-site max-w-2xl">
          <h2 className="font-display text-3xl font-bold mb-4">Prêt à partir avec nous ?</h2>
          <p className="text-gray-400 mb-8">Contactez-nous, on adore parler voyages.</p>
          <Button href="/contact" size="lg">Créer mon voyage →</Button>
        </div>
      </section>
    </>
  )
}
