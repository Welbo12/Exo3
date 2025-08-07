import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/index.css'
import Botton from '../Petitcomposant/Botton'
import Logo from './Logo'





type HeaderProps={ 
  label:string
  path:string
}
const headerProps:HeaderProps[]=[
  {label:"About",path:"/"},
  {label:"Skill",path:"/Skill"},
  {label:"Portofolio",path:"/Portofolio"},
  {label:"Testimonial",path:"/Testimonial"},

]


const Header:React.FC=()=> {
  return (
    <div className='header'>
      <Logo className='logo'/>
       <nav className='navbar'>
        <ul className='nav-links'> {headerProps.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}</ul>
      </nav>
      <Botton  onClick={() => {}} label="DOWNLOAD CV"  className='botton'/>
      </div>
  )
}

export default Header