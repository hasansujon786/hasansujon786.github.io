import { FiPaperclip } from 'react-icons/fi'
import { FiCopy } from 'react-icons/fi'
import type { ProspWithClassName } from '../../lib/types'
import { cn } from '../../lib/utils'
import Button from '../atoms/Button'
import SectionTag from '../atoms/SectionTag'

const Hero = () => {
  return (
    <section className='container min-h-[calc(100dvh-200px)] flex-1 relative py-6 pb-12 lg:pt-8 lg:pb-16'>
      <div className=''>
        <div className='sm:mt-10 xl:mt-28'>
          <Intro />
          <Description className='col-start-1 row-start-2' />
        </div>
      </div>
    </section>
  )
}

export const Intro = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <SectionTag uppercase={false} title="Hello, I'm" />
      <h1
        className='gradient-text xl:mt-1 -ml-1 text-7xl font-extrabold uppercase -tracking-wider sm:text-8xl md:text-7xl lg:text-[110px]'
        style={{ lineHeight: 0.77 }}
      >
        Hasan <br /> Mahmud
      </h1>

      <div className='mt-1 flex items-end gap-1.5'>
        <p className='text-2xl font-semibold tracking-wide text-accent'>Softwere Developer</p>
        <div className='mb-2 h-1 w-1 bg-accent/70'></div>
      </div>
    </div>
  )
}
const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-4 text-gray-200 text-lg leading-normal tracking-wide max-w-md space-y-5 lg:max-w-2xl'>
        <p>
          Hi, I’m Hasan — a frontend developer with over 3 years of freelance experience. I specialize in building
          modern websites with React and crafting cross-platform mobile apps using Flutter and React Native.
        </p>

        <p>I love bringing ideas to life through clean code, thoughtful design, and smooth user experiences.</p>

        <p>I’m currently freelancing while actively looking for a full-time opportunity.</p>
      </div>
      <div className='mt-8 flex gap-4'>
        <Button varient='solid-green' icon={<FiPaperclip size={16} />}>
          View my resume
        </Button>

        <Button className='px-1 normal-case' varient='text' icon={<FiCopy size={18} />}>
          hasansujon786@gmail.com
        </Button>
      </div>
    </div>
  )
}

export default Hero
