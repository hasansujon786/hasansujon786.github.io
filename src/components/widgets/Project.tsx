import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectLink from '../atoms/ProjectLink'
import SectionTag from '../atoms/SectionTag'
import type React from 'react'
import imgSmacrCV from '../../assets/smart-cv.png'
import imgSmacrQR from '../../assets/smart-qr.png'
import imgSaweria from '../../assets/saweria.co.png'

interface ProjectProps {
  owner: string
  title: string
  subtitle: string
  details: string[]
  tags: string[]
  links?: React.ReactNode
  image: React.ComponentProps<'img'>
}

const projects: ProjectProps[] = [
  {
    owner: 'Built for Client',
    title: 'Smart CV',
    subtitle: 'Full App Development',
    tags: ['React Native', 'Expo', 'Tamagui'],
    details: [
      'A mobile app for creating stunning, job-ready resumes in minutes.',
      'It helps users generate polished, professional CVs with clean templates and an intuitive user experience — no design skills required.',
    ],
    image: { src: imgSmacrCV.src },
    links: (
      <>
        <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
        <ProjectLink icon={<FiGithub />}>View Source Code</ProjectLink>
      </>
    ),
  },
  {
    owner: 'Built for Client',
    title: 'Smart QR',
    subtitle: 'Designed & Developed',
    tags: ['Flutter', 'Dart', 'hive database'],
    details: [
      'A fast, reliable mobile app for scanning and generating QR codes and barcodes with ease.',
      'Designed with simplicity and speed in mind, it supports all major code formats and custom QR creation — all in a clean, intuitive interface.',
    ],
    image: { src: imgSmacrQR.src },
    links: (
      <>
        <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
        <ProjectLink icon={<FiGithub />}>View Source Code</ProjectLink>
      </>
    ),
  },
  {
    owner: 'Built for Client',
    title: 'saweria.co',
    subtitle: 'Developed Frontend',
    tags: ['React', 'typescript', 'Next.js', 'TailwindCSS'],
    details: [
      'A platform that makes it easy for you to reach your fans directly along with your community',
      "Creator's dane gives creators the tools they need to reliably reach their fans, strengthen their communities, and build sustainable businesses.",
    ],
    image: { src: imgSaweria.src },
    links: (
      <>
        <ProjectLink icon={<FiExternalLink />}>Visit Website</ProjectLink>
        <ProjectLink icon={<FiGithub />}>View Source Code</ProjectLink>
      </>
    ),
  },
]

const ProjectShowcase = () => {
  return (
    <div className='container'>
      <div className='divide-y-2 divide-zinc-800 border-y-2 border-zinc-800'>
        {projects.map((p) => (
          <Project {...p} />
        ))}
      </div>
    </div>
  )
}

const Project = ({ owner, title, subtitle, details, tags, links, image }: ProjectProps) => {
  return (
    <div className='flex flex-col gap-8 py-12 lg:flex-row lg:py-24'>
      <section className='w-full lg:w-1/3'>
        <div className='space-y-4 lg:mt-6'>
          <SectionTag uppercase={true} title={owner} />
          <div>
            <h2 className='text-5xl font-semibold text-white'>{title}</h2>
            <p className='mt-1 text-base text-zinc-500'>{subtitle}</p>
          </div>
          <div className='space-y-2'>
            {details.map((detail) => (
              <p className='max-w-sm'>{detail}</p>
            ))}
          </div>
          <div className='flex space-x-10'>
            {tags.map((tag) => (
              <p className='text-sm text-zinc-500'>{tag}</p>
            ))}
          </div>
          <div className='flex gap-5 pt-5'>{links}</div>
        </div>
      </section>
      <section className='flex-1 justify-end lg:flex'>
        <div className='bg-level-100 ring-accent-dark aspect-[1.3333333333] w-full overflow-hidden rounded-lg ring-3'>
          <img className='h-full w-full object-cover' {...image} />
        </div>
      </section>
    </div>
  )
}

export default ProjectShowcase
