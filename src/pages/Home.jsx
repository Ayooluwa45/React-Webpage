import {useState} from 'react'

import SideBar from '../components/SideBar/SideBar.jsx'
import NavBar from '../components/NavBar/NavBar.jsx'
import Hero from '../components/hero/Hero.jsx'
import Info from '../components/info/Info.jsx'
import {homeObjOne, homeObjtwo, homeObjthree} from '../components/info/Data'
import Services from '../components/services/Services.jsx'
import Footer from '../components/footer/Footer'


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
      <Info {...homeObjOne}/>
      <Info {...homeObjtwo}/>
      <Services />
      <Info {...homeObjthree}/>
      <Footer />
    </>
  );
}

export default Home;
