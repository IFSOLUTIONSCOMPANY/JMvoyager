import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { VoyageCard } from '@/components/ui/VoyageCard'
import { Button } from '@/components/ui/Button'
import { VOYAGES, HOW_IT_WORKS, POPULAR_DESTINATIONS, CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'JM Voyager — Agence de voyages sur mesure',
  description: 'Créez le voyage de vos rêves avec JM Voyager. Destinations sur mesure, voyages organisés, assistance VIP 24h/24.',
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Fond dégradé */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-slate-900 to-slate-800" />
        {/* Texture dorée légère */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #C9921E 0%, transparent 60%), radial-gradient(circle at 80% 20%, #E2AF3F 0%, transparent 50%)' }}
        />

        <div className="relative z-10 container-site text-center text-white px-4">
          <p className="section-tag text-gold mb-6 tracking-[0.25em]">Agence de voyages sur mesure</p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Voyagez autrement,<br />
            <span className="text-gold">voyagez JM</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Voyages 100&nbsp;% sur mesure, voyages organisés en groupe et assistance VIP&nbsp;—
            vivez des expériences authentiques qui vous ressemblent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Créer mon voyage
            </Button>
            <Button href="/voyages-organises/colombie" variant="outline" size="lg">
              Voir les voyages organisés
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto text-center border-t border-white/10 pt-10">
            {[
              { value: '50+',  label: 'Destinations' },
              { value: '100%', label: 'Sur mesure' },
              { value: '24/7', label: 'Assistance' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-gold font-display">{s.value}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Comment ça marche ── */}
      <section className="py-24 bg-brand-light">
        <div className="container-site">
          <SectionHeader
            tag="Notre approche"
            title="Un voyage pensé pour vous"
            subtitle="De l'inspiration à la valise bouclée, nos experts vous accompagnent à chaque étape."
            center
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="relative text-center group">
                {/* Connecteur entre étapes */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-px bg-gold/20" />
                )}

                <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-5 text-3xl group-hover:shadow-lg transition-shadow">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-gold tracking-widest mb-2">{step.step}</div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Voyages organisés ── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <SectionHeader
            tag="Voyages organisés"
            title="Partez en groupe, l'esprit libre"
            subtitle="Des voyages clés en main avec itinéraire, hébergement et accompagnement inclus."
            center
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {VOYAGES.map(v => (
              <VoyageCard
                key={v.slug}
                name={v.name}
                dates={v.dates}
                price={v.price}
                places={v.places}
                image={v.image}
                href={v.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Destinations populaires ── */}
      <section className="py-24 bg-brand-light">
        <div className="container-site">
          <SectionHeader
            tag="Destinations"
            title="Où voulez-vous aller ?"
            subtitle="Nos experts ont sillonné ces destinations pour vous offrir les meilleures expériences."
            center
          />

          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {POPULAR_DESTINATIONS.map(dest => (
              <DestinationCard
                key={dest.name}
                name={dest.name}
                image={dest.image}
                href={dest.href}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="outline">
              Toutes les destinations →
            </Button>
          </div>
        </div>
      </section>

      {/* ── Sur mesure CTA ── */}
      <section className="py-24 bg-brand-dark text-white">
        <div className="container-site max-w-4xl text-center">
          <p className="section-tag text-gold mb-4">Voyage sur mesure</p>
          <h2 className="section-title text-white mb-6">
            Votre voyage idéal,<br className="hidden sm:block" /> on le crée ensemble
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Vous avez une destination en tête ? Un budget ? Des dates ? Parlez-nous de votre projet
            et nos experts vous proposent un itinéraire 100&nbsp;% personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg">
              Démarrer mon projet de voyage
            </Button>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ── Pourquoi JM Voyager ── */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-tag mb-3">Pourquoi nous choisir</p>
              <h2 className="section-title mb-6">Une agence à taille humaine, un service premium</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Chez JM Voyager, vous n'êtes pas un dossier. Chaque voyage est conçu avec soin
                par des passionnés qui connaissent chaque destination de l'intérieur.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: '✓', text: 'Itinéraires 100 % personnalisés selon vos envies' },
                  { icon: '✓', text: 'Experts terrain avec une connaissance locale' },
                  { icon: '✓', text: 'Assistance 24h/24 avant, pendant et après le voyage' },
                  { icon: '✓', text: 'Rapport qualité-prix optimisé pour chaque budget' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-gold/10 text-gold rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {item.icon}
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/a-propos">Découvrir notre histoire →</Button>
              </div>
            </div>

            {/* Témoignage */}
            <div className="bg-brand-light rounded-3xl p-8 sm:p-10 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                &ldquo;JM Voyager a organisé notre voyage en Colombie de A à Z. Tout était parfait —
                les hôtels, les activités, le guide local. Une expérience inoubliable !&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm">
                  MK
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Marie K.</p>
                  <p className="text-gray-400 text-xs">Voyage en Colombie — Avril 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
  )
}
