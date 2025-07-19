import { MY_EMAIL_HREF, MY_GITHUB } from '@/config/constants'
import { FiCode, FiGithub, FiHome, FiMail } from 'react-icons/fi'
import IconLink from '../atoms/IconLink'

const Navbar = () => {
  return (
    <section className='fixed right-0 bottom-0 left-0 z-40 grid place-items-center xl:hidden'>
      <nav className='bg-ground/80 group mb-3 rounded-full px-3 py-1 shadow-2xl shadow-black/80 outline outline-zinc-700/50 backdrop-blur-lg'>
        <div className='flex items-center justify-center text-xl text-zinc-400 group-hover:[&>.gap]:w-2!'>
          <IconLink label='Home' href='#home'>
            <FiHome />
          </IconLink>
          <span className='gap ease-quick h-3 w-0.5 transition-all' />
          <IconLink label='Projects' href='#featured-projects'>
            <FiCode />
          </IconLink>
          <span className='gap ease-quick h-3 w-0.5 transition-all' />
          <IconLink label='Email' href={MY_EMAIL_HREF}>
            <FiMail />
          </IconLink>
          <span className='gap ease-quick h-3 w-0.5 transition-all' />
          <IconLink label='Github' target='_blank' href={MY_GITHUB}>
            <FiGithub />
          </IconLink>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
