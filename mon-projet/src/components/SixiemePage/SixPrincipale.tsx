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



// import React from 'react'
// import But from '../Petitcomposant/But'

// const SixPrincipale: React.FC = () => {
//   const containerStyle: React.CSSProperties = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center', 
//     justifyContent: 'center', 
//     textAlign: 'center',
//     padding: '50px',
//     boxSizing: 'border-box',
//   }

//   const headingStyle: React.CSSProperties = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     marginTop: '20px',
//   }

//   const paragraphStyle: React.CSSProperties = {
//     maxWidth: '600px',
//     marginTop: '15px',
//     fontSize: '16px',
//     lineHeight: '1.6',
//   }

//   const highlightGreenStyle: React.CSSProperties = {
//     color: '#0DB760',
//   }

//   return (
//     <div style={containerStyle}>
//       <But label="Contact" onClick={() => alert('Clicked')} />
//       <h1 style={headingStyle}>
//         Let’s Discuss <span style={highlightGreenStyle}>Your Project</span>
//       </h1>
//       <p style={paragraphStyle}>
//         Let’s make something new, different and more meaningful or make things more visual or conceptual.
//       </p>
//     </div>
//   )
// }

// export default SixPrincipale
 
import React from 'react'
import But from '../Petitcomposant/But'
import azIcon from "../../assets/icone/az.png";
import zeIcon from "../../assets/icone/ze.png";
import erIcon from "../../assets/icone/er.png";
import './../../style/index.css'

const SixPrincipale: React.FC = () => {
  return (
    <div className="six-container">
      <But label="Contact" />
      <h1 className="six-heading">
        Let’s Discuss <span className="highlight-green">Your Project</span>
      </h1>
      <p className="six-paragraph">
        Let’s make something new, different and more meaningful or make things
        more visual or conceptual.
      </p>

      <div className="six-content">
        {/* Left Column - Contact Info */}
        <div className="six-left">
          <div className="contact-item">
            <img src={azIcon} alt="Phone" className="contact-icon" />
            <div>
              <div className="contact-title">Call me</div>
              <div>+8801613968687</div>
            </div>
          </div>
          <div className="contact-item">
            <img src={zeIcon} alt="Email" className="contact-icon" />
            <div>
              <div className="contact-title">Email me</div>
              <div>ahmedtanvir8687@gmail.com</div>
            </div>
          </div>
          <div className="contact-item">
            <img src={erIcon} alt="Address" className="contact-icon" />
            <div>
              <div className="contact-title">Address</div>
              <div>Zakirgonj, Sylhet, Bangladesh</div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="six-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Phone number" />
            <input type="text" placeholder="Budget" />
          </div>
          <textarea placeholder="Message" rows={5}></textarea>
          <button type="submit" className="submit-btn">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default SixPrincipale
