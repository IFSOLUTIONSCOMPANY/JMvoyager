import type { Metadata } from 'next'
import Image from 'next/image'
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

      {/* ── Notre histoire ── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80 aspect-[4/5]">
                <Image
                  src="/images/DSC03060.jpg"
                  alt="JM Voyager — Notre histoire"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Léger voile doré en bas */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-dark/40 to-transparent" />
              </div>

              {/* Badge flottant */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                  ✈️
                </div>
                <div>
                  <p className="font-display font-bold text-gray-900 text-sm leading-tight">50+ destinations</p>
                  <p className="text-xs text-gray-400 mt-0.5">explorées par nos experts</p>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2 pb-8 lg:pb-0">
              <p className="section-tag mb-3">Notre histoire</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Nés du voyage,<br className="hidden sm:block" /> construits pour vous
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  JM Voyager est née d'une évidence : <strong className="text-gray-800 font-medium">voyager devrait toujours être une expérience extraordinaire</strong>,
                  pas une case à cocher sur une liste. Fondée par des passionnés ayant sillonné plus de
                  50 destinations en Amérique latine, en Asie et en Afrique, notre agence repose sur
                  une conviction profonde — chaque client mérite un voyage pensé pour lui, et lui seul.
                </p>
                <p>
                  Basés à Paris et dans l'Oise, nous avons choisi de rester une <strong className="text-gray-800 font-medium">agence à taille humaine</strong>.
                  Pas de centres d'appels, pas de formulaires impersonnels. Chez JM Voyager, vous avez
                  un interlocuteur dédié qui vous connaît, vous écoute et vous accompagne de la première
                  discussion jusqu'à votre retour.
                </p>
                <p>
                  Que vous rêviez d'une escapade romantique à Bali, d'une aventure en famille au Brésil
                  ou d'un voyage culturel en Colombie, nous mettons notre expertise terrain et notre
                  réseau de partenaires locaux à votre service — pour que votre voyage soit
                  exactement ce que vous en avez rêvé.
                </p>
              </div>

              {/* Citation mise en valeur */}
              <blockquote className="mt-8 border-l-4 border-gold pl-5 py-1">
                <p className="text-gray-700 italic leading-relaxed">
                  &ldquo;Chaque voyage que nous organisons est unique, comme la personne qui le vit.
                  C'est cette attention au détail qui fait toute la différence.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-gold font-semibold">— L'équipe JM Voyager</footer>
              </blockquote>

              <div className="mt-10">
                <Button href="/contact">Démarrer mon projet →</Button>
              </div>
            </div>

          </div>

          {/* Chiffres clés */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '50+',  label: 'Destinations' },
              { value: '3',    label: 'Voyages organisés / an' },
              { value: '100%', label: 'Sur mesure' },
              { value: '24/7', label: 'Assistance' },
            ].map(s => (
              <div key={s.label} className="bg-brand-light rounded-2xl p-8 text-center border border-gray-100 hover:border-gold/20 transition-colors">
                <p className="font-display text-4xl font-bold text-gold mb-2">{s.value}</p>
                <p className="text-sm text-gray-500">{s.label}</p>
              </div>
            ))}
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
