import type { Metadata } from 'next'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de JM Voyager.',
}

export default function MentionsLegalesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Mentions légales</h1>
        <p className="text-sm text-gray-400 mb-12">Dernière mise à jour : Mars 2025</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <Section title="Éditeur du site">
            <p>
              <strong>JM Voyager</strong><br />
              Agence de voyages sur mesure<br />
              {CONTACT.address}<br />
              Email : <a href={`mailto:${CONTACT.email}`} className="text-gold hover:underline">{CONTACT.email}</a><br />
              Tél : <a href={`tel:${CONTACT.phone}`} className="text-gold hover:underline">{CONTACT.phoneDisplay}</a>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong><br />
              340 Pine Street, Suite 701 — San Francisco, CA 94104, USA<br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">vercel.com</a>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, icônes, structure) est la propriété exclusive
              de JM Voyager ou de ses partenaires, et est protégé par les lois françaises et internationales sur
              la propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
            </p>
          </Section>

          <Section title="Données personnelles & cookies">
            <p>
              Les informations recueillies via les formulaires de contact sont utilisées exclusivement pour
              répondre à vos demandes et ne sont jamais transmises à des tiers sans votre consentement.
            </p>
            <p className="mt-3">
              Ce site utilise Google Analytics (anonymisation des IP activée) pour mesurer l'audience.
              Vous pouvez refuser ces cookies via la bannière de consentement affichée lors de votre
              première visite. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification
              et de suppression de vos données en nous contactant à :{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-gold hover:underline">{CONTACT.email}</a>.
            </p>
          </Section>

          <Section title="Liens externes">
            <p>
              Ce site peut contenir des liens vers des sites tiers. JM Voyager ne saurait être tenu responsable
              du contenu de ces sites ni de leur politique de confidentialité.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront
              compétents.
            </p>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-gray-900 mb-3 pb-2 border-b border-gray-100">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed">{children}</div>
    </div>
  )
}
