import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact — Demande de voyage sur mesure',
  description: 'Contactez JM Voyager pour créer votre voyage sur mesure. Réponse sous 24h.',
}

const INFOS = [
  {
    icon: PhoneIcon,
    label: 'Téléphone',
    value: CONTACT.phoneDisplay,
    href: `tel:${CONTACT.phone}`,
  },
  {
    icon: EmailIcon,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: LocationIcon,
    label: 'Localisation',
    value: CONTACT.address,
    href: undefined,
  },
  {
    icon: ClockIcon,
    label: 'Disponibilité',
    value: CONTACT.hours,
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* ── En-tête ── */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container-site text-center">
          <p className="section-tag text-gold mb-4">Voyage sur mesure</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Créons votre voyage ensemble</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Parlez-nous de votre projet. Nos experts vous répondent sous 24h avec une proposition personnalisée.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Formulaire ── */}
            <div className="lg:col-span-2">
              <SectionHeader tag="Votre demande" title="Décrivez votre voyage idéal" />
              <div className="mt-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <ContactForm />
              </div>
            </div>

            {/* ── Infos de contact ── */}
            <div className="space-y-6">
              <SectionHeader tag="Nous joindre" title="Contact direct" />

              <div className="mt-2 space-y-4">
                {INFOS.map(info => {
                  const Icon = info.icon
                  const content = (
                    <div className="flex items-start gap-4 p-5 bg-brand-light rounded-2xl border border-gray-100 group hover:border-gold/30 transition-colors">
                      <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium mb-0.5">{info.label}</p>
                        <p className="text-gray-900 font-medium group-hover:text-gold transition-colors">{info.value}</p>
                      </div>
                    </div>
                  )
                  return info.href ? (
                    <a key={info.label} href={info.href}>{content}</a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  )
                })}
              </div>

              {/* Réseaux sociaux */}
              <div className="p-5 bg-brand-light rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-400 font-medium mb-3">Suivez-nous</p>
                <div className="flex gap-3">
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-gold/50 hover:text-gold transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" /> Instagram
                  </a>
                  <a
                    href={CONTACT.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-gold/50 hover:text-gold transition-colors"
                  >
                    <TikTokIcon className="w-4 h-4" /> TikTok
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

/* ── Icônes ── */
function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
    </svg>
  )
}

function EmailIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LocationIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ClockIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function TikTokIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z" />
    </svg>
  )
}
