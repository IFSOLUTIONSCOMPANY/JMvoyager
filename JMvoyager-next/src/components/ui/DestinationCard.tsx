import Image from 'next/image'
import Link from 'next/link'

interface DestinationCardProps {
  name:  string
  image: string
  href:  string
  badge?: string
}

export function DestinationCard({ name, image, href, badge }: DestinationCardProps) {
  const isExternal = href === '#'

  return (
    <article className="card-hover relative rounded-2xl overflow-hidden group cursor-pointer shadow-md">
      {/* Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="img-overlay" />
      </div>

      {/* Badge */}
      {badge && (
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-white text-xs font-semibold rounded-full">
          {badge}
        </span>
      )}

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display text-lg font-bold text-white">{name}</h3>
        {!isExternal && (
          <Link
            href={href}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Découvrir <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </article>
  )
}
