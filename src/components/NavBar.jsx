import { useEffect } from 'react'

export const NavBar = ({ menuOpen, setMenuOpen, setHomeOpen, }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""; {/*Locks scrolling on page*/}
    }, [menuOpen])

    return (
        <>
            <div className="
            flex justify-around items-center
            w-screen h-20
            bg-gray-500 text-black" >
                <a> Ivan Ma </a>

                <div className="hidden md:flex items-center space-x-8 "> 
                    <a href="#home" className=" hover:text-white  transition-colors " onClick={() => setHomeOpen(true)} > Home </a>
                    <a href="#about" className= "hover:text-white transition-colors"> About </a>
                    <a href="#projects" className="hover:text-white transition-colors"> Projects </a>
                </div>

                <div className="md:hidden w-7 h-5 relative cursor-pointer z-40" onClick={() => setMenuOpen(true)}> &#9776; </div>
        
            </div>
        </>
        
    )
}