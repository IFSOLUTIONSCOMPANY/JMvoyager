'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DESTINATIONS } from '@/lib/constants'

type DropdownKey = 'destinations' | 'voyages' | null

const continents = [
  { label: 'Afrique',          items: DESTINATIONS.afrique },
  { label: 'Amérique Centrale',items: DESTINATIONS.ameriqueCentrale },
  { label: 'Amérique du Nord', items: DESTINATIONS.ameriqueNord },
  { label: 'Amérique du Sud',  items: DESTINATIONS.ameriqueSud },
  { label: 'Asie',             items: DESTINATIONS.asie },
]

export function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Close mobile menu on ESC */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setMobileOpen(false); setActiveDropdown(null) }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const toggle = (key: DropdownKey) =>
    setActiveDropdown(prev => (prev === key ? null : key))

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="JM Voyager — Accueil">
            <div className="relative w-10 h-10">
              <Image src="/images/Logooriginal2.png" alt="JM Voyager" fill className="object-contain" />
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              JM Voyager
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Destinations dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle('destinations')}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gold hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${activeDropdown === 'destinations' ? (scrolled ? 'text-gold bg-gray-50' : 'text-white bg-white/10') : ''}`}
                aria-expanded={activeDropdown === 'destinations'}
                aria-haspopup="true"
              >
                Nos destinations
                <ChevronIcon open={activeDropdown === 'destinations'} />
              </button>

              {activeDropdown === 'destinations' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6 animate-fade-in">
                  {continents.map(continent => (
                    <div key={continent.label}>
                      <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                        {continent.label}
                      </p>
                      <ul className="space-y-1.5">
                        {continent.items.map(dest => (
                          <li key={dest.name}>
                            <Link
                              href={dest.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block text-sm text-gray-600 hover:text-gold hover:translate-x-1 transition-all duration-150"
                            >
                              {dest.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Voyages dropdown */}
            <div className="relative">
              <button
                onClick={() => toggle('voyages')}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-gold hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'
                } ${activeDropdown === 'voyages' ? (scrolled ? 'text-gold bg-gray-50' : 'text-white bg-white/10') : ''}`}
                aria-expanded={activeDropdown === 'voyages'}
              >
                Voyages organisés
                <ChevronIcon open={activeDropdown === 'voyages'} />
              </button>

              {activeDropdown === 'voyages' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 animate-fade-in">
                  {[
                    { name: 'Colombie', href: '/voyages-organises/colombie', flag: '🇨🇴' },
                    { name: 'Brésil',   href: '/voyages-organises/bresil',   flag: '🇧🇷' },
                    { name: 'Vietnam',  href: '/voyages-organises/vietnam',  flag: '🇻🇳' },
                  ].map(v => (
                    <Link
                      key={v.name}
                      href={v.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gold/5 hover:text-gold transition-colors"
                    >
                      <span className="text-xl">{v.flag}</span>
                      {v.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* À propos */}
            <Link
              href="/a-propos"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-gold hover:bg-gray-50' : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              À propos
            </Link>

          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-600 transition-colors shadow-md shadow-gold/20"
            >
              Créez votre voyage
              <span aria-hidden>→</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: mobileOpen ? 'rotate(45deg) translate(4px, 6px)' : '' }} />
              <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: mobileOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 bg-current transition-all" style={{ transform: mobileOpen ? 'rotate(-45deg) translate(4px, -6px)' : '' }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container-site py-4 space-y-1">

            <MobileSection
              label="Nos destinations"
              expanded={mobileExpanded === 'destinations'}
              onToggle={() => setMobileExpanded(prev => prev === 'destinations' ? null : 'destinations')}
            >
              {continents.map(continent => (
                <div key={continent.label} className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2 pl-4">{continent.label}</p>
                  {continent.items.map(dest => (
                    <Link
                      key={dest.name}
                      href={dest.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-6 py-1.5 text-sm text-gray-600 hover:text-gold"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileSection>

            <MobileSection
              label="Voyages organisés"
              expanded={mobileExpanded === 'voyages'}
              onToggle={() => setMobileExpanded(prev => prev === 'voyages' ? null : 'voyages')}
            >
              {[
                { name: 'Colombie', href: '/voyages-organises/colombie', flag: '🇨🇴' },
                { name: 'Brésil',   href: '/voyages-organises/bresil',   flag: '🇧🇷' },
                { name: 'Vietnam',  href: '/voyages-organises/vietnam',  flag: '🇻🇳' },
              ].map(v => (
                <Link key={v.name} href={v.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 pl-6 py-2 text-sm text-gray-600 hover:text-gold">
                  {v.flag} {v.name}
                </Link>
              ))}
            </MobileSection>

            <Link href="/a-propos" onClick={() => setMobileOpen(false)} className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gold hover:bg-gray-50 rounded-lg">
              À propos
            </Link>

            <div className="pt-3 pb-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block w-full text-center py-3 bg-gold text-white text-sm font-semibold rounded-full hover:bg-gold-600 transition-colors">
                Créez votre voyage →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

/* ── Helpers ── */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function MobileSection({
  label, expanded, onToggle, children,
}: {
  label: string
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gold hover:bg-gray-50 rounded-lg"
        aria-expanded={expanded}
      >
        {label}
        <ChevronIcon open={expanded} />
      </button>
      {expanded && <div className="mt-1 pb-2">{children}</div>}
    </div>
  )
}
