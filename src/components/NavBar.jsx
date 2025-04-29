import { useState, useEffect, useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

export const NavBar = ({ menuOpen, setMenuOpen, setHomeOpen }) => {
    const [showNavBar, setShowNavBar] = useState(true);
    const prevScrollY = useRef(0);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    // useEffect w/ [] used here to ENSURE only 1 event listener and cleanup
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current && currentScrollY > 100) {
                // Scrolling down
                setShowNavBar(false);
            } else {
                // Scrolling up
                setShowNavBar(true);
            }
            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll); // ongoing event listener w/ handleScroll attached!
        return () => window.removeEventListener('scroll', handleScroll); // is saved, only occurs when component is destroyed 
    }, []);

    const iconBounce = () => {
        setTimeout(() => -translate-y-2, 500);
    }

    return (
        <>
            <div className={`
            ${showNavBar ? "translate-y-0" : "-translate-y-full"}
            fixed z-50 duration-300 transition-transform
            flex justify-around items-center
            w-screen h-20
            bg-gray-400 text-black text-lg`} >
                <a> LOGO </a>

                <div className="hidden md:flex items-center space-x-30"> 
                    <div className="space-x-8">
                        <a href="#home" className=" hover:text-white  transition-colors " onClick={() => setHomeOpen(true)} > Home </a>
                        <a href="#about" className= "hover:text-white transition-colors"> About </a>
                        <a href="#projects" className="hover:text-white transition-colors"> Projects </a>
                    </div>
                    
                    <div className='flex space-x-3 text-xl gap-8'>
                        <a href="https://www.linkedin.com/in/ivan-ma-2121462a5/" target="_blank" className=" hover:text-white  hover:animate-bounce  transition-colors text-2xl"> <FaLinkedin /> </a>
                        <a href="mailto:ivanma215@gmail.com" target="_blank" className=" hover:text-white hover:animate-bounce  transition-colors  text-2xl"> <AiOutlineMail /> </a>
                        <a href="https://github.com/skipper215" target="_blank" className="hover:text-white hover:animate-bounce transition-all  text-2xl" > <FaGithub />  </a>
                    </div>
                </div>

                <div className="md:hidden w-7 h-5 relative cursor-pointer z-40" onClick={() => setMenuOpen(true)}> &#9776; </div>
        
            </div>
        </>
        
    )
}