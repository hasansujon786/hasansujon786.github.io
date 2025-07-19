import { cn } from '@/lib/utils'
import type { ComponentProps, PropsWithChildren } from 'react'

interface IconLinkProps extends ComponentProps<'a'>, PropsWithChildren {
  label?: string
}

const IconLink = ({ children, label, ...props }: IconLinkProps) => {
  return (
    <a
      className={cn(
        'hover:text-primary relative z-10 grid h-12 w-12 cursor-pointer place-items-center rounded-full focus-visible:outline-none active:scale-90 transition-all',
        'after:absolute after:z-[-1] after:h-full after:w-full after:scale-75 after:rounded-full after:bg-white/5 after:opacity-0 after:transition-all after:ease-out',
        'hover:after:scale-100 hover:after:opacity-100 focus-visible:after:scale-100 focus-visible:after:opacity-100 active:after:scale-100 active:after:opacity-100'
      )}
      {...props}
    >
      {children}
      <span className='sr-only'>{label}</span>
    </a>
  )
}

export default IconLink
