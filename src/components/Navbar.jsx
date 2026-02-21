import { useEffect } from "react"
import profile from "../assets/profile2.png"
import cv from "../assets/Ebisa_Tesfaye_CV.pdf";

export const Navbar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4 ">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white flex items-center">

                        <img src={profile} alt="Profile" className="w-36 h-36 rounded-full pt-3 pb-3 mt-4" />
                        eng<span className="text-blue-500">. ebisan</span>
                    </a>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hove:text-white transition-colors">
                            Home  </a>

                        <a href="#about" className="text-gray-300 hove:text-white transition-colors">
                            About  </a>

                        <a href="#projects" className="text-gray-300 hove:text-white transition-colors">
                            Projects  </a>

                        <a href="#contact" className="text-gray-300 hove:text-white transition-colors">
                            Contact  </a>
                        {/* CV Download Button */}
                        <a
                            href={cv}
                            download="Ebisa_Tesfaye_CV.pdf"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}