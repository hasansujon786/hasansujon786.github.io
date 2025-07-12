import { motion, MotionValue, useTransform } from 'motion/react'
import React, { type PropsWithChildren } from 'react'

interface SectionProps extends PropsWithChildren {
  scrollYProgress: MotionValue<number>
}

export const HeroWrapper: React.FC<SectionProps> = ({ scrollYProgress, children }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky top-0 flex h-screen flex-col items-center justify-center bg-transparent font-semibold text-black'
    >
      {children}
    </motion.section>
  )
}

export const ContentWrapper: React.FC<SectionProps> = ({ scrollYProgress, children }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  return (
    <motion.section
      style={{ scale, rotate }}
      className='from-level-100 to-ground relative flex h-screen flex-1 bg-gradient-to-b text-white'
    >
      {children}
    </motion.section>
  )
}

const ScrollHero = {
  Hero: HeroWrapper,
  Content: ContentWrapper,
}

export default ScrollHero
