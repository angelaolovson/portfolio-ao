import { useState } from "react";

export default function NevMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="flex items-center justify-between pl-3 h-20 md:h-30 relative z-10 w-full">
            <div className="flex">
                <img src="/images/ao-logo.png" className="h-12 md:h-24 object-contain"/>
            </div>
            {/* Links for larger screen */}
            <div className="hidden md:flex flex-1 md:justify-center items-center px-2">
                <ul className="md:flex md:gap-20 text-xl">
                    <li className=" hover:text-amber-500 hover:underline decoration-amber-500 underline-offset-4 decoration-double"><a href="#about" >About</a></li>
                    <li className=" hover:text-amber-500 hover:underline decoration-amber-500 underline-offset-4 decoration-double"><a href="#resume">Resume</a></li>
                    <li className=" hover:text-amber-500 hover:underline decoration-amber-500 underline-offset-4 decoration-double"><a href="#projects">Projects</a></li>
                    <li className=" hover:text-amber-500 hover:underline decoration-amber-500 underline-offset-4 decoration-double"><a href="https://www.linkedin.com/in/angela-olovson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
            {/* Mobile * Menu Button*/}
            <div className="md:hidden flex pr-3">
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className="relative w-6 h-6 flex flex-col justify-between items-center z-50"
                >
                    {/* Toggle between hamburger and x */}
                    <span
                        className={`block h-0.5 w-full bg-[#163752] transform transition duration-300 ease-in-out origin-top-left ${
                        isMobileMenuOpen ? "rotate-60 translate-y-[10px]" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-full bg-[#163752] transition-all duration-300 ease-in-out ${
                        isMobileMenuOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block h-0.5 w-full bg-[#163752] transform transition duration-300 ease-in-out origin-bottom-left ${
                        isMobileMenuOpen ? "-rotate-60 -translate-y-[10px]" : ""
                        }`}
                    ></span>
                </button>

                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white p-4 absolute top-full left-0 w-full z-50 shadow-md">
                        <ul className="flex flex-col gap-5">
                            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                            <li><a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a></li>
                            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                            <li><a href="https://www.linkedin.com/in/angela-olovson/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>LinkedIn</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
