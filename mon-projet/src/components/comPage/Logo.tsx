import React from 'react'
import image from '../../assets/image.png'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <header>
      <div>
        <img src={image} alt="Logo" className={className} />
      </div>
    </header>
  )
}

export default Logo