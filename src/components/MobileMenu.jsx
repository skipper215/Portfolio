import { useEffect } from 'react'

export const MobileMenu = ({ menuOpen, setMenuOpen}) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-gray-500 z-40
        flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen 
            ? "h-screen opacity-100 pointer-events-auto" 
            : "h-0 opacity-0 pointer-events-none"}`}>
        
        
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"> 
                &times;
            </button>

            <div className="flex flex-col space-y-10"> 
                <a 
                href="#home" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-transform duration-1000 hover:text-white hover:bg-blue-950 hover:border-0 hover:rounded-sm px-2 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`} 
                > Home 
                </a>

                <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-transform duration-1300 hover:text-white hover:bg-blue-950 hover:border-0 hover:rounded-sm px-2 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`} 
                > About </a>

                <a 
                href="#projects" 
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-semibold transition-transform duration-1600 hover:text-white hover:bg-blue-950 hover:border-0 hover:rounded-sm px-2 
                ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}`} 
                > Projects </a>
            </div>
        
        </div>
    )
}