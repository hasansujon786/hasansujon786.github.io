import type { ProspWithClassName } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useScroll } from 'motion/react'
import { useEffect, useRef } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import Button from '../atoms/Button'
import SectionTag from '../atoms/SectionTag'
import { AuroraText } from './aurora-text'
import { MyStack } from './MyStack'
import ScrollHero from './ScrollHero'

export const Intro = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <span className='relative z-10'>
        <SectionTag uppercase={false} title="Hello, I'm" />
      </span>
      <div
        className='-ml-1 text-7xl font-extrabold -tracking-wider uppercase sm:text-8xl md:text-7xl lg:text-[110px] xl:mt-1'
        style={{ lineHeight: 0.77 }}
      >
        <AuroraText>Hasan</AuroraText>
        <br />
        <AuroraText>Mahmud</AuroraText>
      </div>

      <div className='mt-1 flex items-baseline gap-0.5'>
        <p className='text-primary z-10 text-2xl font-semibold tracking-wide'>Frontend Developer</p>
        <div className='bg-primary-dark h-1 w-1'></div>
      </div>
    </div>
  )
}
export const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-3 space-y-2 text-sm leading-normal tracking-wide text-gray-300 lg:space-y-4 lg:text-base 2xl:text-[17px]'>
        <p>
          Hi, I’m Hasan — a software developer based in <span className='font-medium text-white'>Bangladesh</span> with
          over 3 years of experience building polished, high-performance{' '}
          <span className='font-medium text-white'>web and mobile apps</span> as a freelancer.
        </p>

        <p>
          I specialize in <span className='font-medium text-white'>React</span>,{' '}
          <span className='font-medium text-white'>React Native</span> and{' '}
          <span className='font-medium text-white'>Flutter,</span> and I care deeply about crafting smooth, accessible
          user experiences and writing clean, maintainable code that scales.
        </p>

        <p>
          I’m currently freelancing and actively seeking a{' '}
          <span className='font-semibold text-white'>full-time frontend or mobile developer role</span>, where I can
          contribute to meaningful products and grow with a creative, collaborative team.
        </p>
      </div>
      <div className='outlin mt-10 inline-flex flex-wrap justify-center gap-6'>
        <Button className='px-8' varient='solid-green' icon={<FiPaperclip size={18} />}>
          View my resume
        </Button>
      </div>
    </div>
  )
}

const Hero = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  // Hide page loader
  useEffect(() => {
    const loader = document.querySelector('.page-loader')
    document.querySelectorAll('.animate-blur-in').forEach((el) => el?.classList.add('animate-blur-in-enter'))
    document.querySelectorAll('.animate-slide-in').forEach((el) => el?.classList.add('animate-slide-in-enter'))

    if (!loader) return
    const handleAnimationEnd = () => loader.remove()
    loader.addEventListener('animationend', handleAnimationEnd)

    loader.classList.add('page-loader-exit')

    // Clean up
    return () => {
      loader.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  return (
    <section ref={container}>
      <ScrollHero.Hero scrollYProgress={scrollYProgress}>
        <div className='container mt-16 flex flex-1 sm:mt-20 md:mt-24 lg:-mt-8 lg:items-center'>
          <div className='w-full lg:max-w-[60ch]'>
            <Intro />
            <Description />
          </div>
        </div>
      </ScrollHero.Hero>

      <ScrollHero.Content scrollYProgress={scrollYProgress}>
        <div className='container pt-10 md:pt-18 2xl:pt-28'>
          <h1 className='text-3xl font-medium text-white md:text-4xl'>Technology Stack</h1>
        </div>
        <MyStack />

        <div className='from-level-100 to-ground relative h-screen flex-1 bg-gradient-to-b'></div>
      </ScrollHero.Content>
    </section>
  )
}

export default Hero
