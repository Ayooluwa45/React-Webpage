import {useState} from 'react'

import SideBar from '../components/SideBar/SideBar.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import Hero from '../components/hero/Hero.jsx'

function Home() {
    const [isOpen, setIsOpen]= useState(false)

    const toggle= ()=>{
        setIsOpen(!isOpen) 
    }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar  toggle={toggle}/>
      <Hero/>
    </>
  );
}

export default Home;
