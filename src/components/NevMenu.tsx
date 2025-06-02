import { useState } from "react";

export default function NevMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="flex items-center justify-between h-20 md:h-30 relative z-10 w-full">
            <div className="flex p-3">
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
            <div className="md:hidden flex w-8">
                <button
                    className="btn text-[#163752] text-4xl"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {/* Toggle between hamburger and x */}
                    {isMobileMenuOpen ? "\u2715" : "\u2630"}{" "}
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
