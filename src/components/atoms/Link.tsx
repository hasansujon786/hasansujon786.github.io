import { cn } from '@/lib/utils'
import type { ComponentProps, PropsWithChildren } from 'react'

interface LinkProps extends ComponentProps<'a'>, PropsWithChildren {}

const Link = ({ className, children, ...rest }: LinkProps) => {
  return (
    <a
      className={cn(
        'rounded-xs px-1 underline decoration-zinc-300 decoration-solid decoration-1 underline-offset-2 transition-colors duration-75',
        'inline-flex items-center gap-1 text-center text-sm tracking-wide text-white',
        'hover:decoration-primary hover:text-primary-light active:text-primary active:decoration-primary-dark focus-visible:ring-primary rounded-md focus-visible:ring-2 focus-visible:outline-none',
        className
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Link
