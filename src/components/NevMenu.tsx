import { useState } from "react";

export default function NevMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="flex gap-10 h-20 relative z-10">
            <div>logo</div>
            {/* Links for larger screen */}
            <div className="hidden lg:flex justify-end flex-1 px-2 ">
                <ul>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </div>
            {/* Mobile * Menu Button*/}
            <div className="sm:hidden">
                <button
                    className="btn bg-[#D9D9D9] text-[#163752] focus:bg-[#979696] focus:text-[#F0F0F0]"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {/* Toggle between hamburger and x */}
                    {isMobileMenuOpen ? "\u2715" : "\u2630"}{" "}
                </button>

                
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-[#D9D9D9] p-4 absolute top-full left-0 w-full z-50 shadow-md">
                        <ul>
                            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
                            <li><a href="#resume" onClick={() => setIsMobileMenuOpen(false)}>Resume</a></li>
                            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
