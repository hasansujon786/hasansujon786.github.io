import { cn } from '@/lib/utils'
import { Marquee } from './marquee'

const stacks = {
  firstRow: [
    { title: 'Bootstrap', img: 'bootstrap.svg' },
    { title: 'Tailwind CSS', img: 'tailwindcss.svg' },
    { title: 'NextJS', img: 'nextdotjs.svg' },
    { title: 'React', img: 'react.svg' },
    { title: 'TypeScript', img: 'typescript.svg' },
    { title: 'JavaScript', img: 'javascript.svg' },
    { title: 'CSS', img: 'css.svg' },
    { title: 'HTML', img: 'html5.svg' },
  ],

  secondRow: [
    { title: 'Lemon Squeezy', img: 'lemonsqueezy.svg' },
    { title: 'Stripe', img: 'stripe.svg' },
    { title: 'Drizzle ORM', img: 'drizzle.svg' },
    { title: 'Prisma', img: 'prisma.svg' },
    { title: 'Sentry', img: 'sentry.svg' },
    { title: 'Docker', img: 'docker.svg' },
    { title: 'Vite', img: 'vite.svg' },
    { title: 'Shadcn UI', img: 'shadcnui.svg' },
    { title: 'Figma', img: 'figma.svg' },
    { title: 'Appwrite', img: 'appwrite.svg' },
    { title: 'Supabase', img: 'supabase.svg' },
    { title: 'Postman', img: 'postman.svg' },
    { title: 'Github', img: 'github.svg' },
    { title: 'Git', img: 'git.svg' },
  ],
}

const StackIcon = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div
        className={cn(
          'flex h-16 w-16 items-center justify-center rounded-2xl p-4 transition-all duration-300 hover:scale-105 md:h-20 md:w-20 md:p-6',
          'hover:shadow-glow hover:ring-primary-dark shadow-primary-dark/40 bg-gradient-to-b ring-1 ring-zinc-800 hover:ring-2'
        )}
      >
        <img src={url} alt={title} className='h-12 w-12' />
      </div>
      <span className='text-sm whitespace-nowrap'>{title}</span>
    </div>
  )
}

const images: Record<string, string> = import.meta.glob('/src/assets/stacks/*.svg', {
  query: '?url',
  import: 'default',
  eager: true,
})

export function MyStack() {
  const firstRow = stacks.firstRow.map((stack) => ({
    ...stack,
    url: images[`/src/assets/stacks/${stack.img}`],
  }))

  const secondRow = stacks.secondRow.map((stack) => ({
    ...stack,
    url: images[`/src/assets/stacks/${stack.img}`],
  }))

  return (
    <section className='container pt-8 md:pt-12 2xl:pt-0'>
      <div className='animate-on-scroll'>
        <h1 className='fade-in-up stagger z-10 relative text-3xl font-medium text-white md:text-4xl'>Technology Stack</h1>

        <div className='relative mx-0.5 mt-8'>
          <div className='fade-in-up stagger'>
            <Marquee>
              {firstRow.map((item) => (
                <StackIcon key={item.title} {...item} />
              ))}
            </Marquee>
          </div>
          <div className='fade-in-up stagger'>
            <Marquee className='' reverse>
              {secondRow.map((item) => (
                <StackIcon key={item.title} {...item} />
              ))}
            </Marquee>
          </div>

          <div className='from-ground pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
          <div className='from-ground pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
        </div>
      </div>
    </section>
  )
}
