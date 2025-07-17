import type { ComponentProps, PropsWithChildren } from 'react'

interface IconLinkProps extends ComponentProps<'a'>, PropsWithChildren {}

const IconLink = ({ children, ...props }: IconLinkProps) => {
  return (
    <a
      className='grid h-12 w-12 cursor-pointer place-items-center rounded-full transition-colors duration-200 hover:bg-white/5 active:bg-white/5'
      {...props}
    >
      {children}
    </a>
  )
}

export default IconLink
