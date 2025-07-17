import type React from 'react'
import { cn } from '../../lib/utils'
import type { PropsWithChildren } from 'react'

const varients = {
  // gradient: { bu: 'gradient-bg', sp: 'bg-opacity-95 group-hover:bg-opacity-80 ', },
  outlined: { bu: 'bg-transparent text-zinc-400 border-zinc-400 hover:bg-zinc-300 hover:text-black' },
  translusant: { bu: 'bg-[#282537] border-gray-700 hover:bg-gray-700/50 hover:border-gray-700' },
  solid: { bu: 'bg-black border-black hover:bg-gray-900 hover:border-gray-900' },
  'solid-green': { bu: 'text-gray-800 bg-primary border-primary hover:bg-primary-light hover:border-primary-light' },
  text: { bu: 'text-zinc-400 border-transparent hover:text-zinc-300' },
}

const sizes = {
  sm: { bu: 'px-4 py-2 text-sm' },
  base: { bu: 'px-4 py-2.5 text-base' },
  md: { bu: 'px-7 py-3 text-base' },
  lg: { bu: 'px-9 py-3.5 text-base' },
}

interface ButtonBaseProps extends PropsWithChildren {
  icon?: React.ReactNode
  varient?: keyof typeof varients
  size?: keyof typeof sizes
  className?: string
}

type ButtonProps =
  | ({ as?: 'button' } & React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonBaseProps)
  | ({ as: 'a' } & React.AnchorHTMLAttributes<HTMLAnchorElement> & ButtonBaseProps)

const Button = ({
  children,
  varient = 'solid-green',
  size = 'base',
  icon,
  as: Tag = 'button',
  className,
  ...props
}: ButtonProps) => {
  return (
    <Tag
      className={cn(
        'group inline-flex transform cursor-pointer items-center justify-center gap-x-2 rounded-full border font-semibold tracking-wide capitalize transition-transform ease-out active:scale-95',
        'focus-visible:ring-primary ring-offset-ground ring-offset-3 focus-visible:ring-2 focus-visible:outline-none',
        varients[varient].bu,
        sizes[size].bu,
        className
      )}
      {...(props as any)}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </Tag>
  )
}
export default Button
