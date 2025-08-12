// import React from 'react'
// import But from '../Petitcomposant/But'

// const SixPrincipale:React.FC=()=> (
//     <div className='but' >
//         <But label="contact" />
//         <h1>
//             Let’s Discuss<span className="highlight-green"> Your Project </span>
//         </h1>
//         <p>
//             Let’s make something new, different
//             and more meaningful or make thing more visual or conceptual
//         </p>

//     </div>
// )

// export default SixPrincipale



import React from 'react'
import But from '../Petitcomposant/But'

const SixPrincipale: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    textAlign: 'center',
    padding: '50px',
    boxSizing: 'border-box',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '20px',
  }

  const paragraphStyle: React.CSSProperties = {
    maxWidth: '600px',
    marginTop: '15px',
    fontSize: '16px',
    lineHeight: '1.6',
  }

  const highlightGreenStyle: React.CSSProperties = {
    color: '#0DB760',
  }

  return (
    <div style={containerStyle}>
      <But label="Contact" onClick={() => alert('Clicked')} />
      <h1 style={headingStyle}>
        Let’s Discuss <span style={highlightGreenStyle}>Your Project</span>
      </h1>
      <p style={paragraphStyle}>
        Let’s make something new, different and more meaningful or make things more visual or conceptual.
      </p>
    </div>
  )
}

export default SixPrincipale
