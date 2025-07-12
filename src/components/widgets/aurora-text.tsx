import React, { memo } from 'react'

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(({ children, className = '', colors = [], speed = 1 }: AuroraTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animationDuration: `${speed * 10}s`,
    animationDelay: `1s`,
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <span className='sr-only'>{children}</span>
      <span
        className='animate-aurora relative bg-[length:200%_auto] bg-clip-text pr-4 text-transparent'
        style={gradientStyle}
        aria-hidden='true'
      >
        {children}
      </span>
    </span>
  )
})

AuroraText.displayName = 'AuroraText'

// '#FF0080', '#7928CA', '#0070F3', '#38bdf8'
