import { useScroll } from 'motion/react'
import { useRef } from 'react'
import { FiPaperclip } from 'react-icons/fi'
import type { ProspWithClassName } from '../../lib/types'
import { cn } from '../../lib/utils'
import Button from '../atoms/Button'
import SectionTag from '../atoms/SectionTag'
import { AuroraText } from './aurora-text'
import ScrollHero from './ScrollHero'

export const Intro = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <SectionTag uppercase={false} title="Hello, I'm" />
      <div
        className='-ml-1 text-7xl font-extrabold -tracking-wider uppercase sm:text-8xl md:text-7xl lg:text-[110px] xl:mt-1'
        style={{ lineHeight: 0.77 }}
      >
        <AuroraText>Hasan</AuroraText>
        <br />
        <AuroraText>Mahmud</AuroraText>
      </div>

      <div className='mt-1 flex items-baseline gap-0.5'>
        <p className='text-accent z-10 text-2xl font-semibold tracking-wide'>Softwere Developer</p>
        <div className='bg-accent/70 mb- h-1 w-1'></div>
      </div>
    </div>
  )
}
export const Description = (props: ProspWithClassName) => {
  return (
    <div className={cn(props.className)}>
      <div className='mt-6 max-w-md space-y-5 text-lg leading-normal tracking-wide text-gray-200 lg:max-w-xl'>
        <p>
          I’m Hasan — a frontend developer based in Bangladesh with 3+ years of hands-on experience delivering
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
        <div className='relative container min-h-[calc(100dvh-200px)] flex-1 py-6 pb-12 lg:pt-8 lg:pb-16'>
          <div className=''>
            <div className='sm:mt-10 xl:mt-26'>
              <Intro />
              <Description className='col-start-1 row-start-2' />
            </div>
          </div>
        </div>
      </ScrollHero.Hero>

      <ScrollHero.Content scrollYProgress={scrollYProgress}>
        <div>
          <h1 className='text-7xl'>lorem</h1>
        </div>
      </ScrollHero.Content>
    </section>
  )
}

export default Hero
