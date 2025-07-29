import { FiExternalLink, FiGithub } from 'react-icons/fi'
import SectionTag from '../atoms/SectionTag'
import Link from '../atoms/Link'

export interface ProjectProps {
  owner: string
  title: string
  subtitle: string
  details: string[]
  tags: string[]
  imageSrc: string
  links: {
    demo?: { label: string; link: string }
    github?: { label?: string; link: string }
  }
}

const Project = ({ owner, title, subtitle, details, tags, imageSrc, links }: ProjectProps) => {
  return (
    <div className='flex flex-col gap-8 py-12 lg:flex-row lg:py-24'>
      <section data-stagger='30' className='animate-on-scroll w-full flex-1 xl:w-1/3 xl:flex-none'>
        <div className='space-y-4 lg:mt-6'>
          <div className='fade-in-right stagger'>
            <SectionTag uppercase={true} title={owner} />
          </div>
          <div>
            <h2 className='fade-in-right stagger text-3xl font-medium text-white md:text-4xl xl:text-5xl'>{title}</h2>
            <p className='fade-in-right stagger mt-1 text-base text-zinc-500'>{subtitle}</p>
          </div>

          <div className='space-y-2'>
            {details.map((detail, i) => (
              <p key={i} className='fade-in-right stagger max-w-xl'> {detail} </p>
            ))}
          </div>

          <div className='flex flex-wrap gap-x-6 gap-y-2 sm:gap-x-10'>
            {tags.map((tag) => (
              <p key={tag} className='fade-in-right stagger text-sm text-zinc-500'>{tag}</p>
            ))}
          </div>

          <div className='mt-5 flex flex-wrap gap-2 sm:gap-5'>
            {links?.github?.link && (
              <div className='fade-in-right stagger'>
                <Link href={links?.github?.link} target='_blank' rel='noopener noreferrer'>
                  <FiGithub />
                  {links?.github?.label || 'View Source Code'}
                </Link>
              </div>
            )}
            {links?.demo?.link && (
              <div className='fade-in-right stagger'>
                <Link href={links?.demo?.link} target='_blank' rel='noopener noreferrer'>
                  <FiExternalLink />
                  {links?.demo?.label || 'Visit Website'}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='animate-on-scroll fade-in-left flex flex-1 items-center justify-end'>
        <div className='bg-level-100 ring-primary-dark aspect-video w-full overflow-hidden rounded-2xl ring-3'>
          <img className='h-full w-full object-cover' src={imageSrc} />
        </div>
      </section>
    </div>
  )
}

export default Project
