import { useState } from "react";

export default function NevMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="fixed top-0 left-0 flex bg-white shadow-sm items-center justify-between pl-3 h-20 md:h-30 z-10 w-full">
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
                    <li className=" hover:text-amber-500 hover:underline decoration-amber-500 underline-offset-4 decoration-double"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            {/* Mobile * Menu Button*/}
            <div className="md:hidden flex pr-3">
                <button
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                    className="relative w-8 h-8 flex flex-col justify-center items-center z-50 overflow-visible"
                >
                    {/* Toggle between hamburger and x */}
                    <span
                        className={`block absolute w-6 h-0.5 bg-[#163752] transition-transform duration-300 ease-in-out ${
                            isMobileMenuOpen ? "rotate-45" : "-translate-y-2"
                        }`}
                    ></span>
                    <span
                        className={`block absolute w-6 h-0.5 bg-[#163752] transition-opacity duration-300 ease-in-out ${
                            isMobileMenuOpen ? "opacity-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block absolute w-6 h-0.5 bg-[#163752] transition-transform duration-300 ease-in-out ${
                            isMobileMenuOpen ? "-rotate-45" : "translate-y-2"
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
                            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
