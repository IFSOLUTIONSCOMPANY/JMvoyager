'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const consent = document.cookie.match(/cookiesAccepted=([^;]+)/)?.[1]
    if (!consent) setVisible(true)
  }, [])

  const setCookie = (value: 'true' | 'false') => {
    const d = new Date()
    d.setTime(d.getTime() + 365 * 86400000)
    document.cookie = `cookiesAccepted=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-3xl mx-auto bg-brand-dark/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-200 leading-relaxed">
            Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic.
            Les cookies essentiels sont toujours actifs.
          </p>
          <label className="flex items-center gap-2 mt-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={accepted}
              onChange={e => setAccepted(e.target.checked)}
              className="w-4 h-4 rounded border-gray-600 text-gold focus:ring-gold/50 bg-gray-700"
            />
            <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
              J'accepte les cookies analytiques
            </span>
          </label>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => setCookie('false')}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/20 rounded-full transition-colors hover:bg-white/10"
          >
            Refuser
          </button>
          <button
            onClick={() => setCookie(accepted ? 'true' : 'false')}
            className="px-5 py-2 text-sm font-semibold bg-gold text-white rounded-full hover:bg-gold-600 transition-colors"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  )
}
