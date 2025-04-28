import { useState } from 'react'
import './App.css'
import { Loading } from './components/Loading.jsx'
import { NavBar } from './components/NavBar.jsx'
import { MobileMenu } from './components/MobileMenu.jsx'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);

  return (
    <>
      { !isLoaded && <Loading setIsLoaded={setIsLoaded} />} 

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setHomeOpen={setHomeOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
        <Home />
        <About /> 
        <Projects />
      </div>
      
    </>
  )
}

export default App
