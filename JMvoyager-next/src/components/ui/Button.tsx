import Link from 'next/link'
import { type ComponentProps } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size    = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-gold text-white hover:bg-gold-600 shadow-md shadow-gold/20',
  outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-white',
  ghost:   'text-gold hover:bg-gold/10',
}

const sizes: Record<Size, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-2.5 text-sm',
  lg:  'px-8 py-3.5 text-base',
}

interface ButtonProps extends ComponentProps<'button'> {
  variant?: Variant
  size?: Size
  href?: string
  fullWidth?: boolean
  icon?: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  icon,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2 font-semibold rounded-full
    transition-all duration-200 focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 focus-visible:outline-gold
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]} ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
        {icon && <span aria-hidden>{icon}</span>}
      </Link>
    )
  }

  return (
    <button className={base} {...rest}>
      {children}
      {icon && <span aria-hidden>{icon}</span>}
    </button>
  )
}
