import { Marquee } from './marquee'

const images = import.meta.glob('/src/assets/stacks/*.svg', { eager: true, as: 'url' })

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
        key={title}
        className='flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-800 bg-gradient-to-b p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'
      >
        <img src={url} alt={title} className='h-12 w-12' />
      </div>
      <span className='text-sm whitespace-nowrap'>{title}</span>
    </div>
  )
}

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
    <div className='container'>
      <div className='relative'>
        <div className='mx-0.5 flex flex-col items-center justify-center overflow-hidden'>
          <Marquee className='pt-12'>
            {firstRow.map((item) => (
              <StackIcon key={item.title} {...item} />
            ))}
          </Marquee>
          <Marquee className='pt-8' reverse>
            {secondRow.map((item) => (
              <StackIcon key={item.title} {...item} />
            ))}
          </Marquee>
        </div>
        <div className='from-level-100 bgred-600 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
        <div className='from-level-100 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
      </div>
    </div>
  )
}
