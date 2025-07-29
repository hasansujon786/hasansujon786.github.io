import { FiSend } from 'react-icons/fi'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'
import { MY_GITHUB } from '@/config/constants'
import type { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

interface HeaderLinkProps extends PropsWithChildren, React.ComponentProps<'a'> {}

const HeaderLink = ({ children, className, ...props }: HeaderLinkProps) => {
  return (
    <a
      className={cn(
        'px-1 text-sm font-medium uppercase transition-colors duration-150 ease-in-out',
        'hover:text-primary-light focus-visible:ring-primary active:text-primary rounded-md focus-visible:ring-2 focus-visible:outline-none',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

// Header is show from xl: prefix
const Header = () => {
  return (
    <header
      id='header'
      //  Scroll event classes: 'border-b shadow-xl'
      className='animate-on-load fade-in-down bg-ground/80 fixed top-0 right-0 left-0 z-40 hidden border-0 border-zinc-800 transition-shadow md:backdrop-blur-sm xl:block'
    >
      <div className='container flex h-18 items-center justify-between'>
        <HeaderLink href='#home' className='-ml-2'>
          <Logo />
        </HeaderLink>
        <nav className='flex items-center gap-2' aria-label='Main navigation'>
          <HeaderLink href='#featured-projects'>Projects</HeaderLink>
          <HeaderLink href={MY_GITHUB} target='_blank' rel='noopener noreferrer'>
            Github
          </HeaderLink>
          <Button
            className='ml-1'
            as='a'
            varient='translusant'
            size='sm'
            icon={<FiSend className='text-xs' />}
            href='#call-to-action'
          >
            Contact me
          </Button>
        </nav>
      </div>
    </header>
  )
}
export default Header
