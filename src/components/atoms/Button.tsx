import { cn } from '../../lib/utils'

const varients = {
  // gradient: { bu: 'gradient-bg', sp: 'bg-opacity-95 group-hover:bg-opacity-80 ', },
  outlined: { bu: 'bg-transparent text-zinc-300 border-zinc-300 hover:bg-zinc-300 hover:text-black' },
  translusant: { bu: 'bg-[#282537] border-gray-700 hover:bg-gray-700/50 hover:border-gray-700' },
  solid: { bu: 'bg-black border-black hover:bg-gray-900 hover:border-gray-900' },
  'solid-green': { bu: 'text-gray-800 bg-accent border-accent hover:bg-accent-light hover:border-accent-light' },
  text: { bu: 'text-zinc-400 border-transparent hover:text-zinc-300' },
}

const sizes = {
  sm: { bu: 'px-4 py-2 text-sm' },
  base: { bu: 'px-4 py-2.5 text-base' },
  md: { bu: 'px-7 py-3 text-base' },
  lg: { bu: 'px-9 py-3.5 text-base' },
}

interface Props {
  children: React.ReactNode
  icon?: React.ReactNode
  varient?: keyof typeof varients
  size?: keyof typeof sizes
  className?: string
}

const Button = ({ children, varient = 'solid-green', size = 'base', icon, ...props }: Props) => {
  return (
    <button
      className={cn(
        `group cursor-pointer inline-flex transform capitalize items-center gap-x-2 rounded-full border font-semibold tracking-wide transition-transform ease-out active:scale-95`,
        varients[varient].bu,
        sizes[size].bu,
        props.className
      )}
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
export default Button
