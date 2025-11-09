import { RevealOnScroll } from "../RevealOnScroll";
import photo from '../../../public/portifolio.png'

export const Home = () => {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
            <div className="text-center z-10 px-4">

                <div class="flex justify-center items-center mt-[50px] p-4">
                    <div class="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 focus:bg-blue-500/5">
                        <img
                        src={photo}
                        alt="ebisa's photo"
                        class="w-full h-full object-cover"
                        />
                    </div>
                </div>


                <h1 className="test-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">
                    Hi, I'm Ebisa Tesfaye
                </h1>

                <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
               Hello! I’m Ebisa, a software engineering student with five years of experience at university. 
               My journey into the world of technology began with a simple curiosity about how things work. 
               Over the years, this curiosity has blossomed into a deep-seated passion for software development, 
               particularly in the realm of full-stack engineering.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.4)]">
                    View Projects</a>
                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]  hover:bg-blue-500/10">
                    Contact Me</a>

            </div>
            </div>
        </RevealOnScroll>
    </section>
    );
}