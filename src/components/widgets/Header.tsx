import { FiSend } from 'react-icons/fi'
import Button from '../atoms/Button'
import Logo from '../atoms/Logo'

interface Props {
  children?: React.ReactNode
  path: string
}
const HeaderLink = (props: Props) => {
  return (
    <li className='px-4 py-2'>
      <a
        className='hover:text-primary-light text-sm font-medium uppercase transition duration-150 ease-in-out'
        href={props.path}
      >
        {props.children}
      </a>
    </li>
  )
}

const Header = (props: {}) => {
  return (
    <header
      className='animate-slide-in opacity-0 slide-from-top bg-ground/80  fixed top-0 z-40 mx-auto w-full flex-none border-b md:backdrop-blur-sm dark:border-b-0'
      id='header'
    >
      <div className='container py-1'>
        <div className='mx-auto w-full py-3 md:flex md:justify-between'>
          <div className='flex justify-between'>
            <a className='flex items-center' href='#'>
              <Logo />
            </a>
          </div>
          <nav
            className='hidden h-screen w-full items-center md:flex md:h-auto md:w-auto dark:text-slate-200'
            aria-label='Main navigation'
          >
            <ul className='flex w-full flex-col items-center pt-8 text-xl md:w-auto md:flex-row md:self-center md:pt-0 md:text-base'>
              <HeaderLink path='#project_showcase'>Projects</HeaderLink>
              <HeaderLink path='#'>Github</HeaderLink>
              <div className='ml-3 flex items-center gap-4'>
                <Button varient='translusant' size='sm' icon={<FiSend className='text-xs' />}>
                  Contact me
                </Button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
