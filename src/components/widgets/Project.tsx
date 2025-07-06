import { FiExternalLink, FiGithub } from 'react-icons/fi'
import ProjectLink from '../atoms/ProjectLink'
import SectionTag from '../atoms/SectionTag'
import type React from 'react'

interface ProjectProps {
  name: string
  subtitle: string
  details: string[]
  tags: string[]
  links?: React.ReactNode
}

const Project = ({ name, subtitle, details, tags, links }: ProjectProps) => {
  return (
    <div className='flex flex-col gap-8 py-12 lg:flex-row lg:py-24'>
      <section className='w-full lg:w-1/3'>
        <div className='space-y-4 lg:mt-6'>
          <SectionTag uppercase={true} title='Built for Client' />
          <div>
            <h2 className='text-5xl font-semibold text-white'>{name}</h2>
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
        <div className='bg-level-100 aspect-video w-full rounded-lg ring-3 ring-white/10'></div>
      </section>
    </div>
  )
}

const ProjectShowcase = () => {
  return (
    <div className='container'>
      <div className='divide-y-2 divide-zinc-800 border-y-2 border-zinc-800'>
        <Project
          name='Smart CV'
          subtitle='Full App Development'
          tags={['React Native', 'TypeScript', 'Tamagui']}
          details={[
            'A mobile app for creating stunning, job-ready resumes in minutes.',
            'It helps users generate polished, professional CVs with clean templates and an intuitive user experience — no design skills required.',
          ]}
          links={
            <>
              <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
              <ProjectLink icon={<FiGithub />}>View Source</ProjectLink>
            </>
          }
        />

        <Project
          name='Smart QR'
          subtitle='Designed & Developed'
          tags={['Flutter', 'Dart', 'hive database']}
          details={[
            'A fast, reliable mobile app for scanning and generating QR codes and barcodes with ease.',
            'Designed with simplicity and speed in mind, it supports all major code formats and custom QR creation — all in a clean, intuitive interface.',
          ]}
          links={
            <>
              <ProjectLink icon={<FiExternalLink />}>View on Play Store</ProjectLink>
              <ProjectLink icon={<FiGithub />}>View Source</ProjectLink>
            </>
          }
        />
      </div>
    </div>
  )
}

export default ProjectShowcase
