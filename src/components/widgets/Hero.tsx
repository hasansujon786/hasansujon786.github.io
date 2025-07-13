import { useScroll } from 'motion/react'
import { useRef } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import type { ProspWithClassName } from '../../lib/types'
import { cn } from '../../lib/utils'
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
        <p className='text-accent z-10 text-2xl font-semibold tracking-wide'>Frontend Developer</p>
        <div className='bg-accent-dark h-1 w-1'></div>
      </div>
    </div>
  )
}
export const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-3 max-w-md space-y-3 text-sm leading-normal tracking-wide text-gray-200 md:text-base lg:max-w-xl lg:space-y-5 lg:text-lg'>
        <p>
          I’m Hasan — a software developer based in Bangladesh with 3+ years of hands-on experience delivering
          high-quality web and mobile applications as a freelancer.
        </p>

        <p>
          I specialize in <span className='decoration-text underline'>React</span>,{' '}
          <span className='decoration-text underline'>React Native</span> and{' '}
          <span className='decoration-text underline'>Flutter</span> with a strong focus on performance, accessibility,
          and clean UI design.
        </p>

        <p>
          I'm currently freelancing and actively seeking a full-time opportunity where I can contribute to meaningful
          products and grow with a team.
        </p>
      </div>
      <div className='outlin mt-10 inline-flex flex-wrap justify-center gap-6'>
        <Button className='px-8' varient='solid-green' icon={<FiPaperclip size={18} />}>
          View my resume
        </Button>

        {/* <ProjectLink href={MY_EMAIL_HREF}> */}
        {/*   <div className='flex items-center gap-1.5 text-base'> */}
        {/*     <FiSend size={18} /> */}
        {/*     {MY_EMAIL} */}
        {/*   </div> */}
        {/* </ProjectLink> */}
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

  return (
    <section ref={container} className=''>
      <ScrollHero.Hero scrollYProgress={scrollYProgress}>
        <div className='container mt-16 flex flex-1 sm:mt-20 md:mt-24 lg:mt-0 lg:items-center'>
          <div className=''>
            <Intro />
            <Description className='col-start-1 row-start-2' />
          </div>
        </div>
      </ScrollHero.Hero>

      <ScrollHero.Content scrollYProgress={scrollYProgress}>
        <div className='container pt-20 md:pt-32 2xl:pt-42'>
          <h1 className='text-5xl text-white md:text-6xl'>Technology Stack</h1>
        </div>
        <MyStack />

        <div className='from-level-100 to-ground relative h-screen flex-1 bg-gradient-to-b'></div>
      </ScrollHero.Content>
    </section>
  )
}

export default Hero
