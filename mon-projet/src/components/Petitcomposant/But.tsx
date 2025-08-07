import React from 'react'

type BtonProps = {
  className?: string
  label?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const But: React.FC<BtonProps> = ({
  label,
  className = '',
  onClick,
  type = 'button',
}) => {

  const buttonStyle: React.CSSProperties = {
    color: '#0DB760',
    border: '1.5px solid #0DB760',
    backgroundColor: 'transparent',
    borderRadius: '30px',
    padding: '5px 15px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }

  return (
    <div>
      <button
        style={buttonStyle}
        className={className}
        type={type}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  )
}

export default But
