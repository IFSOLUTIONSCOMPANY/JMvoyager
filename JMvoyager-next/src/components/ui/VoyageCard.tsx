import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

interface VoyageCardProps {
  name:   string
  dates:  string
  price:  string
  places: string
  image:  string
  href:   string
  flag?:  string
}

export function VoyageCard({ name, dates, price, places, image, href, flag }: VoyageCardProps) {
  return (
    <article className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 flex flex-col">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={`Voyage organisé ${name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge prix */}
        <div className="absolute top-3 right-3 bg-gold text-white text-sm font-bold px-3 py-1 rounded-full shadow">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          {flag && <span className="text-2xl">{flag}</span>}
          <h3 className="font-display text-xl font-bold text-gray-900">{name}</h3>
        </div>

        {/* Dates */}
        <div className="flex items-center gap-1.5 text-sm text-gold font-medium mb-3">
          <CalendarIcon className="w-4 h-4" />
          {dates}
        </div>

        {/* Étapes */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 flex-1">{places}</p>

        <div className="mt-5">
          <Button href={href} fullWidth>
            Voir le voyage →
          </Button>
        </div>
      </div>
    </article>
  )
}

function CalendarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
    </svg>
  )
}
