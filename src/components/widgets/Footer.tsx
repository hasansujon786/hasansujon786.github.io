import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='border-opacity-50 bg-level-100 flex flex-col items-center justify-center gap-3 border-t border-t-zinc-800 px-12 py-10'>
      <div className='animate-in-blur animate-in-from-bottom flex gap-6 text-xl text-zinc-600'>
        <a href='#'>
          <FiGithub />
        </a>
        <a href='#'>
          <FiLinkedin />
        </a>
        <a href='#'>
          <FiTwitter />
        </a>
      </div>

      <div className='animate-in-blur animate-in-from-bottom flex items-center gap-3 text-zinc-700 before:relative before:w-4 before:border-b-2 before:border-current after:relative after:w-4 after:border-b-2 after:border-current'>
        <p className='cursor-default text-xs font-extrabold tracking-widest text-zinc-600 uppercase'>Find me here</p>
      </div>
    </div>
  )
}

export default Footer
