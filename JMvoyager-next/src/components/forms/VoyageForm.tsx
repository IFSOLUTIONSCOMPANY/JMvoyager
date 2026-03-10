'use client'

import { useState, useRef } from 'react'
import { FORMSPREE } from '@/lib/constants'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface VoyageFormProps {
  /** Nom du voyage pour le champ caché */
  voyage: string
}

export function VoyageForm({ voyage }: VoyageFormProps) {
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORMSPREE.voyage, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10 px-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-500 text-sm">
          Nous avons bien reçu votre inscription au voyage {voyage}.<br />
          Nous vous contacterons dans les 24h pour confirmer votre place.
        </p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {/* Champ caché pour identifier le voyage */}
      <input type="hidden" name="_voyage" value={voyage} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="form-label">Prénom & Nom *</label>
          <input
            type="text"
            name="nom"
            required
            placeholder="Jean Dupont"
            className="form-input"
          />
        </div>
        <div>
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
            required
            placeholder="jean@email.fr"
            className="form-input"
          />
        </div>
      </div>

      <div>
        <label className="form-label">Téléphone *</label>
        <input
          type="tel"
          name="telephone"
          required
          placeholder="06 xx xx xx xx"
          className="form-input"
        />
      </div>

      <fieldset>
        <legend className="form-label">Participation *</legend>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          {[
            { value: 'solo',   label: 'Je pars seul(e)' },
            { value: 'duo',    label: 'Nous partons à 2' },
            { value: 'groupe', label: 'Nous partons en groupe' },
          ].map(opt => (
            <label
              key={opt.value}
              className="flex items-center gap-2.5 px-4 py-2.5 border border-gray-200 rounded-xl cursor-pointer hover:border-gold/50 hover:bg-gold/5 transition-colors text-sm text-gray-700"
            >
              <input
                type="radio"
                name="participation"
                value={opt.value}
                required
                className="text-gold focus:ring-gold/50"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="form-label">Message / Questions</label>
        <textarea
          name="message"
          rows={4}
          className="form-input resize-none"
          placeholder="Questions sur le programme, le logement, les disponibilités…"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary py-3 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Je réserve ma place →'}
      </button>

      {status === 'error' && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
        </p>
      )}
    </form>
  )
}
