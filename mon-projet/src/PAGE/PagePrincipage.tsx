import React from 'react'
import Header from '../components/comPage/Header'
import DeuxiemePrincipale from '../components/DeuxiemePage/DeuxiemePrincipale'
import Trois from '../components/TroisiemePage/Trois'
import Footer from '../components/comPage/Footer'
import SixPrincipale from '../components/SixiemePage/SixPrincipale'
import QuatrePage from '../components/PageCinq/QuatrePage'
import PageCi from '../components/PageCinq/PageCi'
import SeptPage from '../components/SeprtiPage/SeptPage'

const PagePrincipage:React.FC=() =>{
  return (
    <div>
        <Header/>
        <DeuxiemePrincipale/>
         <Trois/>
         <QuatrePage/>
         <PageCi/>
         <SeptPage/>
          <SixPrincipale/>
         <Footer/>
    </div>
  )
}

export default PagePrincipage