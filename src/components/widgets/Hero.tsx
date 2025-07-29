import type { ProspWithClassName } from '@/lib/types'
import { cn } from '@/lib/utils'
import { FiPaperclip } from 'react-icons/fi'
import Button from '../atoms/Button'
import SectionTag from '../atoms/SectionTag'
import { AuroraText } from './aurora-text'

const Hero = () => {
  return (
    <section
      id='home'
      data-stagger='30'
      className='animate-on-scroll container flex min-h-screen flex-1 lg:items-center'
    >
      <div className='w-full max-w-[60ch] py-8 lg:py-18'>
        <Intro />
        <Description />
      </div>
    </section>
  )
}

export const Intro = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='stagger fade-in-up relative z-10'>
        <SectionTag uppercase={false} title="Hello, I'm" />
      </div>
      <div
        className='-ml-1 text-7xl font-extrabold -tracking-wider uppercase sm:text-8xl md:text-7xl lg:text-[110px] xl:mt-1'
        style={{ lineHeight: 0.77 }}
      >
        <AuroraText className='stagger fade-in-up'>Hasan</AuroraText>
        <br />
        <AuroraText className='stagger fade-in-up'>Mahmud</AuroraText>
      </div>

      <div className='stagger fade-in-up mt-1 flex items-baseline gap-0.5'>
        <p className='text-primary z-10 text-2xl font-semibold tracking-wide'>Frontend Developer</p>
        <div className='bg-primary-dark h-1 w-1'></div>
      </div>
    </div>
  )
}
export const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-3 space-y-2 text-sm leading-normal tracking-wide text-gray-300 md:text-base lg:space-y-4 2xl:text-[17px]'>
        <p className='stagger fade-in-up'>
          Hi, I’m Hasan — a software developer based in <span className='font-medium text-white'>Bangladesh</span> with
          over 3 years of experience building polished, high-performance{' '}
          <span className='font-medium text-white'>web and mobile apps</span> as a freelancer.
        </p>

        <p className='stagger fade-in-up'>
          I specialize in <span className='font-medium text-white'>React</span>,{' '}
          <span className='font-medium text-white'>React Native</span> and{' '}
          <span className='font-medium text-white'>Flutter,</span> and I care deeply about crafting smooth, accessible
          user experiences and writing clean, maintainable code that scales.
        </p>

        <p className='stagger fade-in-up'>
          I’m currently freelancing and actively seeking a{' '}
          <span className='font-semibold text-white'>full-time frontend or mobile developer role</span>, where I can
          contribute to meaningful products and grow with a creative, collaborative team.
        </p>
      </div>
      <div className='stagger fade-in-up item-center flex flex-col flex-wrap gap-6 pt-6 sm:flex-row xl:pt-8'>
        <Button
          target='_blank'
          rel='noopener noreferrer'
          href='/Hasan_Mahmud_Resume.pdf'
          as='a'
          className='sm:px-10'
          varient='solid-green'
          icon={<FiPaperclip size={18} />}
        >
          View my resume
        </Button>
      </div>
    </div>
  )
}

export default Hero
