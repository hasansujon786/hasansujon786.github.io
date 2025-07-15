const Logo = (props: {}) => {
  return (
    <span className='flex items-center pl-1'>
      <span className='mr-[3px] -mt-[1px] w-[3px] h-5 transform -skew-x-[10deg] bg-primary-dark block' />
      <span className='font-semibold tracking-wide text-lg whitespace-nowrap text-gray-900 dark:text-slate-200'>
        <span>HasanMahmud</span>
        <span className='text-primary-dark'>.dev</span>
      </span>
    </span>
  )
}

export default Logo
