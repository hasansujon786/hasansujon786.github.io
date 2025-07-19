import { MY_EMAIL_HREF, MY_GITHUB, MY_LINKED_IN } from '@/config/constants'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import IconLink from '../atoms/IconLink'

const Footer = () => {
  return (
    <footer className='bg-level-100 flex flex-col items-center justify-center border-t border-t-zinc-800 py-12'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex gap-0 text-xl text-zinc-500'>
          <IconLink href={MY_GITHUB} target='_blank'>
            <FiGithub />
          </IconLink>
          <IconLink href={MY_LINKED_IN}>
            <FiLinkedin />
          </IconLink>
          <IconLink href={MY_EMAIL_HREF}>
            <FiMail />
          </IconLink>
        </div>

        <div className='flex items-center gap-3 text-zinc-600 before:relative before:w-4 before:border-b-2 before:border-current after:relative after:w-4 after:border-b-2 after:border-current'>
          <p className='text-xs font-extrabold tracking-widest text-zinc-600 uppercase'>Find me here</p>
        </div>
      </div>

      <div className='mt-8 pb-12 xl:pb-0'>
        <p className='text-center text-xs tracking-wide text-zinc-600'>© 2025 Hasan Mahmud. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
