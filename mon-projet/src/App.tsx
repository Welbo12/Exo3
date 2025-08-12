import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/comPage/Header'
import Gauche from './components/DeuxiemePage/composant/Gauche'
import DeuxiemePrincipale from './components/DeuxiemePage/DeuxiemePrincipale'
import PagePrincipale from './PAGE/PagePrincipage'
import Trois from './components/TroisiemePage/Trois'
import Footer from './components/comPage/Footer'
import Bouttonincurver from './components/Petitcomposant/Bouttonincurver'
import But from './components/Petitcomposant/But'
import SixPrincipale from './components/SixiemePage/SixPrincipale'
import QuatrePage from './components/PageCinq/QuatrePage'
import PageCi from './components/PageCinq/PageCi'
import SeptPage from './components/SeprtiPage/SeptPage'
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/Header" element={<Header />} />        
           <Route path="/Gauche" element={<Gauche />} />       
             <Route path="/DeuxiemePrincipale" element={<DeuxiemePrincipale />} />       
             <Route path="/" element={<PagePrincipale />} />
              <Route path="/trois" element={<Trois/>} />
               <Route path="/Footer" element={<Footer/>} />
                <Route path="/Bouttonincurver" element={<Bouttonincurver/>} />
                <Route path="/But" element={<But/>} />
                <Route path="/SixPrincipale" element={<SixPrincipale/>} />
                <Route path="/QuatrePage" element={<QuatrePage/>} />
                <Route path="/SeptPage" element={<SeptPage/>} />
                <Route path="/PageCi" element={<PageCi/>} />
        </Routes>
      
    </Router>
  )
}

export default App