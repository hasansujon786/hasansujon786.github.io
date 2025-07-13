import { MY_EMAIL, MY_EMAIL_HREF } from '../../config/constants'

const CallToAction = (props: {}) => {
  return (
    <div className='cta-wrapper animate-in-blur animate-in-from-bottom'>
      <div className='container my-10'>
        <div className='mx-auto max-w-4xl rounded-3xl py-12 text-center'>
          <p className='text-accent text-base font-extrabold tracking-wide uppercase sm:text-xl'>
            Ready to Join Your Team
          </p>
          <h3
            aria-label="Let's build together"
            className='font font-heading mt-6 text-5xl font-semibold uppercase sm:text-7xl lg:text-[5.5rem]'
            style={{ lineHeight: 0.95 }}
          >
            LET’S W🚀RK <br /> T_G_TH_R
          </h3>
          <div className='mt-10'>
            <a className='hover:text-accent text-xl text-zinc-300/80 underline underline-offset-2' href={MY_EMAIL_HREF}>
              {MY_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallToAction
