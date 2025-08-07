import React from 'react'
import Header from '../components/comPage/Header'
import DeuxiemePrincipale from '../components/DeuxiemePage/DeuxiemePrincipale'
import Trois from '../components/TroisiemePage/Trois'
import Footer from '../components/comPage/Footer'


const PagePrincipage:React.FC=() =>{
  return (
    <div>
        <Header/>
        <DeuxiemePrincipale/>
         <Trois/>
         <Footer/>
       
    </div>
  )
}

export default PagePrincipage