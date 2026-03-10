'use client'

import { useState, useRef } from 'react'
import { FORMSPREE, CONTACT_DESTINATIONS } from '@/lib/constants'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [unknownBudget, setUnknownBudget] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORMSPREE.contact, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
        setUnknownBudget(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

      {/* Identité */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Prénom *" name="name" type="text" required placeholder="Votre prénom" />
        <Field label="Nom *" name="last-name" type="text" required placeholder="Votre nom" />
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Email *" name="email" type="email" required placeholder="votre@email.fr" />
        <Field label="Téléphone" name="phone" type="tel" placeholder="06 xx xx xx xx" />
      </div>

      {/* Destination */}
      <div>
        <label className="form-label">Destination souhaitée</label>
        <select name="destination" className="form-input">
          <option value="">— Choisissez une destination —</option>
          {CONTACT_DESTINATIONS.map(group => (
            <optgroup key={group.group} label={group.group}>
              {group.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Dates + Profil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Date d'arrivée souhaitée" name="arrival-date" type="date" />
        <div>
          <label className="form-label">Profil voyageur</label>
          <select name="profile" className="form-input">
            <option value="">— Sélectionner —</option>
            <option>Solo</option>
            <option>Couple</option>
            <option>Famille</option>
            <option>Groupe d'amis</option>
            <option>Groupe mixte</option>
          </select>
        </div>
      </div>

      {/* Participants */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Nombre de participants *" name="participants" type="number" required placeholder="ex: 4" min="1" />
        <Field label="Dont enfants" name="children" type="number" placeholder="0" min="0" />
        <Field label="Durée souhaitée (nuits)" name="nights" type="number" placeholder="ex: 10" min="1" />
      </div>

      {/* Préparation */}
      <div>
        <label className="form-label">Où en êtes-vous dans votre préparation ?</label>
        <select name="preparation" className="form-input">
          <option value="">— Sélectionner —</option>
          <option>J'explore les options</option>
          <option>J'ai une idée précise</option>
          <option>Je suis prêt(e) à réserver</option>
        </select>
      </div>

      {/* Vol */}
      <fieldset>
        <legend className="form-label">Avez-vous déjà réservé votre vol ?</legend>
        <div className="flex gap-6 mt-2">
          {['Oui', 'Non', 'En cours'].map(v => (
            <label key={v} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="flight-booked" value={v} className="text-gold focus:ring-gold/50" />
              {v}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Budget */}
      <div>
        <label className="form-label">Budget par personne (€)</label>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            id="unknown-budget"
            checked={unknownBudget}
            onChange={e => setUnknownBudget(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-gold focus:ring-gold/50"
          />
          <label htmlFor="unknown-budget" className="text-sm text-gray-600 cursor-pointer">
            Je ne sais pas encore
          </label>
        </div>
        {!unknownBudget && (
          <Field
            label=""
            name="budget"
            type="number"
            placeholder="ex: 2000"
            min="0"
          />
        )}
        <input type="hidden" name="unknown-budget" value={unknownBudget ? 'oui' : 'non'} />
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Votre message</label>
        <textarea
          name="message"
          rows={5}
          className="form-input resize-none"
          placeholder="Décrivez votre projet de voyage, vos envies, vos contraintes…"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande →'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-600 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          Votre demande a bien été envoyée ! Nous vous répondrons dans les 24h.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
        </p>
      )}
    </form>
  )
}

/* ── Champ générique ── */
interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
  min?: string | number
}

function Field({ label, name, type = 'text', required, placeholder, min }: FieldProps) {
  return (
    <div>
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        className="form-input"
      />
    </div>
  )
}
