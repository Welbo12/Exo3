// src/components/Bouttonincurver.tsx
import React from 'react'

type BtonProps = {
  className?: string
  label?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Bouttonincurver: React.FC<BtonProps> = ({
  label,
  className = '',
  onClick,
  type = 'button',
}) => {
  return (
    <div>
      <button className={className} onClick={onClick} type={type}>
        {label}
      </button>
    </div>
  )
}

export default Bouttonincurver
