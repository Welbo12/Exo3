import React from 'react'
import per from '../../assets/per.png'
import './../../style/index.css'
import Gauche from './composant/Gauche'

const DeuxiemePrincipale:React.FC=() => {
  return (
    <div className='deuxieme'>
        <Gauche/>
        
        <img src={per} alt="" className='per' />
    </div>
  )
}

export default DeuxiemePrincipale