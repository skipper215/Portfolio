import { useState, useEffect, useRef } from 'react'

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

    return (
        <>
            <div className={`
            ${showNavBar ? "translate-y-0" : "-translate-y-full"}
            fixed z-50 duration-300 transition-transform
            flex justify-around items-center
            w-screen h-20
            bg-gray-400 text-black text-lg`} >
                <a> Ivan Ma </a>

                <div className="hidden md:flex items-center space-x-8 "> 
                    <a href="#home" className=" hover:text-white  transition-colors " onClick={() => setHomeOpen(true)} > Home </a>
                    <a href="#about" className= "hover:text-white transition-all"> About </a>
                    <a href="#projects" className="hover:text-white transition-colors"> Projects </a>
                </div>

                <div className="md:hidden w-7 h-5 relative cursor-pointer z-40" onClick={() => setMenuOpen(true)}> &#9776; </div>
        
            </div>
        </>
        
    )
}