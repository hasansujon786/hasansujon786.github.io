interface Props {
  title: string
  uppercase?: boolean
}

const SectionTag = ({ title, uppercase = true }: Props) => {
  return (
    <div className='text-primary flex items-center justify-start space-x-2'>
      <span className='inline-block w-4 border-b-[3px] border-current'></span>
      <p className={`text-base font-semibold tracking-wide ${uppercase && 'uppercase'}`}>{title}</p>
    </div>
  )
}

export default SectionTag
