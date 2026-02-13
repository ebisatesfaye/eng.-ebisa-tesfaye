import { RevealOnScroll } from "../RevealOnScroll";
import photo from '../../assets/portifolio.jpg'


export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4">

                    <div className="flex justify-center items-center mt-[50px] p-4">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 focus:bg-blue-500/5">
                            <img
                                src={photo}
                                alt="ebisa's photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    <h1 className="test-5xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right">
                        Hi, I'm Ebisa Tesfaye
                    </h1>
                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300  text-lg mb-8 max-w-lg mx-auto">
                            <p>
                                Hello! <strong>I’m Ebisa</strong> , a final-year Software Engineering student at Haramaya University,  Ethiopia.
                            </p>
                            <p>
                                I have a strong passion for building scalable and impactful software solutions. My journey into technology started with a curiosity about how systems work, which has evolved into a deep interest of engineering such systems.
                            </p><br />
                            <p>
                                I enjoy transforming ideas into practical applications and continuously improving my skills through hands-on projects and real-world problem solving.
                            </p><br />
                        </p></div>


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