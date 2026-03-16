'use client'

import { useState, useEffect, useCallback } from 'react'

const REVIEWS = [
  {
    name: 'Marie K.',
    initials: 'MK',
    text: 'JM Voyager a organisé notre voyage en Colombie de A à Z. Tout était parfait — les hôtels, les activités, le guide local. Une expérience inoubliable !',
    meta: 'Voyage en Colombie — Avril 2025',
  },
  {
    name: 'Séverine Decreus',
    initials: 'SD',
    text: 'Un énorme merci à l\'équipe JM Voyager pour notre superbe séjour à Bali 🇮🇩 ! Organisation parfaite du début à la fin, toujours disponibles et très pros. On s\'est sentis accompagnés tout au long du voyage, une expérience qu\'on renouvellera avec plaisir !',
    meta: 'Visité en octobre 2025',
  },
  {
    name: 'DENOLF Stephanie',
    initials: 'DS',
    text: '🌺 Un voyage parfait à l\'île Maurice ! Je suis absolument ravie de mon expérience. L\'agence a été disponible à chaque instant, réactive et attentionnée. Tout était pris en charge de A à Z, sans le moindre stress pour moi — un vrai luxe ! Grâce à leur professionnalisme et leur bienveillance, j\'ai pu profiter pleinement de mon séjour et découvrir l\'île en toute sérénité. Je recommande les yeux fermés ✨',
    meta: '',
  },
  {
    name: 'Samia Mezouane',
    initials: 'SM',
    text: 'Merci infiniment à l\'équipe ! Ce voyage à Bali restera gravé dans nos mémoires. Tout était pensé dans les moindres détails. On s\'est senti accompagnés et rassurés du début à la fin. Rare de trouver un tel niveau de service et de bienveillance. Merci pour l\'anniversaire de mon amie que vous m\'avez aidé à organiser, elle était ravie !! Bravo et à très vite pour la prochaine destination !',
    meta: '',
  },
  {
    name: 'Yousra Moutai',
    initials: 'YM',
    text: 'Une expérience exceptionnelle du début à la fin ! L\'équipe de JM Voyager a été attentive et très réactive. Chaque détail était soigneusement pensé, les conseils précieux, et l\'accompagnement irréprochable. Tout a été parfaitement organisé et l\'équipe s\'est montrée d\'un grand professionnalisme. Je recommande sans la moindre hésitation !',
    meta: '',
  },
  {
    name: 'Adil Dahmane',
    initials: 'AD',
    text: 'J\'ai eu la chance de participer aux deux premiers voyages organisés par JM Voyager, au Brésil et en Colombie. Ces deux voyages resteront gravés à jamais dans ma mémoire. L\'organisation était au top : logements, activités, découverte des plus gros coins mythiques dans chacun des pays, transports pris en charge par la structure (locations de voiture). En bref, je n\'hésiterai pas à demander à JM Voyager de me prévoir la totalité de mes futures vacances.',
    meta: '',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function TestimonialsCarousel() {
  const [page, setPage]     = useState(0)
  const [paused, setPaused] = useState(false)
  const [ipv, setIpv]       = useState(1) // items per view

  /* ── Responsive items per view ── */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setIpv(w >= 1024 ? 3 : w >= 768 ? 2 : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(REVIEWS.length / ipv)

  /* Clamp page on resize */
  useEffect(() => {
    setPage(p => Math.min(p, Math.ceil(REVIEWS.length / ipv) - 1))
  }, [ipv])

  const next = useCallback(
    () => setPage(p => (p + 1) % Math.ceil(REVIEWS.length / ipv)),
    [ipv],
  )
  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages)

  /* ── Autoplay ── */
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  /* ── Track geometry ── */
  // Track width = (reviewCount / ipv) × 100% of container
  // Each card  = 100% / reviewCount of track  = 1/ipv of container  ✓
  // translateX = -(page × ipv / reviewCount × 100)%  of track
  const trackWidth  = (REVIEWS.length / ipv) * 100
  const translateX  = -(page * ipv / REVIEWS.length) * 100

  return (
    <div
      className="relative px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide track ── */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-in-out items-stretch"
          style={{
            width: `${trackWidth}%`,
            transform: `translateX(${translateX}%)`,
          }}
        >
          {REVIEWS.map(review => (
            <div
              key={review.name}
              style={{ width: `${100 / REVIEWS.length}%` }}
              className="px-3 py-1"
            >
              <div className="bg-brand-light rounded-3xl p-6 sm:p-8 border border-gray-100 h-full flex flex-col hover:border-gold/20 transition-colors">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 text-sm sm:text-base">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-xs shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    {review.meta && (
                      <p className="text-gray-400 text-xs">{review.meta}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Arrow: prev ── */}
      <button
        onClick={prev}
        aria-label="Avis précédent"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* ── Arrow: next ── */}
      <button
        onClick={next}
        aria-label="Avis suivant"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Pages du carrousel">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === page}
            aria-label={`Page ${i + 1}`}
            onClick={() => setPage(i)}
            className={`rounded-full transition-all duration-300 ${
              i === page
                ? 'w-6 h-2 bg-gold'
                : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
