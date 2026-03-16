'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const REVIEWS = [
  {
    name: 'Séverine Decreus',
    initials: 'SD',
    text: 'Un énorme merci à l\'équipe JM Voyager pour notre superbe séjour à Bali 🇮🇩 ! Organisation parfaite du début à la fin, toujours disponibles et très pros. On s\'est sentis accompagnés tout au long du voyage, une expérience qu\'on renouvellera avec plaisir !',
    meta: 'Visité en octobre 2025',
    photo: '/images/photoSéverineDecreus01.webp',
  },
  {
    name: 'DENOLF Stephanie',
    initials: 'DS',
    text: '🌺 Un voyage parfait à l\'île Maurice ! Je suis absolument ravie de mon expérience. L\'agence a été disponible à chaque instant, réactive et attentionnée. Tout était pris en charge de A à Z, sans le moindre stress pour moi — un vrai luxe ! Grâce à leur professionnalisme et leur bienveillance, j\'ai pu profiter pleinement de mon séjour et découvrir l\'île en toute sérénité. Je recommande les yeux fermés ✨',
    meta: 'Voyage à l\'île Maurice',
    photo: '/images/photoDENOLFstephanie01.webp',
  },
  {
    name: 'Samia Mezouane',
    initials: 'SM',
    text: 'Merci infiniment à l\'équipe ! Ce voyage à Bali restera gravé dans nos mémoires. Tout était pensé dans les moindres détails. On s\'est senti accompagnés et rassurés du début à la fin. Rare de trouver un tel niveau de service et de bienveillance. Merci pour l\'anniversaire de mon amie que vous m\'avez aidé à organiser, elle était ravie !! Bravo et à très vite pour la prochaine destination !',
    meta: 'Voyage à Bali',
    photo: '/images/photoSamiaMezouane01.webp',
  },
  {
    name: 'Yousra Moutai',
    initials: 'YM',
    text: 'Une expérience exceptionnelle du début à la fin ! L\'équipe de JM Voyager a été attentive et très réactive. Chaque détail était soigneusement pensé, les conseils précieux, et l\'accompagnement irréprochable. Tout a été parfaitement organisé et l\'équipe s\'est montrée d\'un grand professionnalisme. Je recommande sans la moindre hésitation !',
    meta: '',
    photo: '/images/photoYousraMoutai01.webp',
  },
  {
    name: 'Adil Dahmane',
    initials: 'AD',
    text: 'J\'ai eu la chance de participer aux deux premiers voyages organisés par JM Voyager, au Brésil et en Colombie. Ces deux voyages resteront gravés à jamais dans ma mémoire. L\'organisation était au top : logements, activités, découverte des plus gros coins mythiques dans chacun des pays, transports pris en charge par la structure (locations de voiture). En bref, je n\'hésiterai pas à demander à JM Voyager de me prévoir la totalité de mes futures vacances.',
    meta: 'Brésil & Colombie',
    photo: '/images/photoadildahmane.webp',
  },
]

const TOTAL = REVIEWS.length

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex(i => (i + 1) % TOTAL), [])
  const prev = () => setIndex(i => (i - 1 + TOTAL) % TOTAL)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next])

  const review = REVIEWS[index]

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Card ── */}
      <div className="relative overflow-hidden rounded-3xl bg-brand-light border border-gray-100 shadow-sm">
        <div className="flex flex-col md:flex-row min-h-[320px]">

          {/* Photo */}
          {review.photo ? (
            <div className="relative w-full md:w-2/5 h-56 md:h-auto shrink-0 overflow-hidden">
              <Image
                key={review.photo}
                src={review.photo}
                alt={`Voyage de ${review.name}`}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              {/* Gradient overlay on desktop (right edge fade) */}
              <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F8F7F4] to-transparent" />
            </div>
          ) : (
            /* Placeholder si pas de photo */
            <div className="hidden md:flex w-2/5 shrink-0 bg-gold/5 items-center justify-center">
              <span className="text-6xl opacity-20">✈️</span>
            </div>
          )}

          {/* Contenu */}
          <div className="flex flex-col justify-between p-7 sm:p-10 flex-1">
            {/* Stars */}
            <div>
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
                &ldquo;{review.text}&rdquo;
              </blockquote>
            </div>

            {/* Author + counter */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold text-sm shrink-0">
                  {review.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  {review.meta && (
                    <p className="text-gray-400 text-xs mt-0.5">{review.meta}</p>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-300 font-medium tabular-nums">
                {index + 1} / {TOTAL}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        aria-label="Avis précédent"
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Avis suivant"
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold/30 transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ── Dots ── */}
      <div className="flex justify-center gap-2 mt-6" role="tablist">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Avis ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? 'w-6 h-2 bg-gold' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
