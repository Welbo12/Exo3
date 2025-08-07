import React from 'react'
import '../../../style/index.css'
 import Botton from '../../Petitcomposant/Botton'
const Gauche: React.FC = () => {
  return (
    <div>
    <div className='gauche'>
    <section className="hero-section">
      <div className="welcome-badge">Welcome</div>
      <h1 className="hero-title">
        I have <span className="highlight-green">Creative </span> 
      </h1>
      <h1 className="hero-title">
         <span className="highlight-green">Design</span> Experience
        
      </h1>
      <p className="hero-description">
        I'm Tanvir, a creative Product Designer. I’ve been helping businesses
        to solve their problems with my design for 2 years.
      </p>
    </section>
    </div>
    <div className='te'>
    <Botton  onClick={() => {}} label="CONTACT ME"  className='botton-t'/>
    <Botton  onClick={() => {}} label="PORTFOLIO ME"  className='botton-e'/>
        </div>
    </div>
    
  )
}

export default Gauche