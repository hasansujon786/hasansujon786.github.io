import { MY_EMAIL, MY_EMAIL_HREF } from '../../config/constants'
import Link from '../atoms/Link'

const CallToAction = () => {
  return (
    <div id='call-to-action' className='cta-wrapper'>
      <div className='container py-20'>
        <div className='animate-on-scroll mx-auto max-w-4xl rounded-3xl text-center'>
          <p className='stagger fade-in-up text-primary text-base font-extrabold tracking-wide uppercase sm:text-xl'>
            Ready to Join Your Team
          </p>
          <h3
            aria-label="Let's build together"
            className='stagger fade-in-up mt-6 text-5xl font-semibold uppercase sm:text-7xl lg:text-[5.5rem]'
            style={{ lineHeight: 0.95 }}
          >
            LET’S W🚀RK <br /> T_G_TH_R
          </h3>
          <div className='stagger fade-in-up mt-6 md:mt-8 lg:mt-10'>
            <Link href={MY_EMAIL_HREF} className='text-base text-zinc-300 md:text-xl'>
              {MY_EMAIL}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
