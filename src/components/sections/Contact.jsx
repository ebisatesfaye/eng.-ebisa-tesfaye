import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
export const Contact = () => {

    const [formData, setFormData] = useState({ name: "", email: "", message: "" })


    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, e.target,
            import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Messege Sent!");
                setFormData({ name: "", email: "", message: "" });
            }).catch(() => alert(`Oops! Something went wrong. Please try again. ${import.meta.env.VITE_TEST}`));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mt-8 mb-5">

                        {/* GitHub */}
                        <a
                            href="https://github.com/ebisatesfaye"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition text-2xl hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://linkedin.com/in/ebisa-tesfaye-0b8238319"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition text-2xl hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>

                        {/* Telegram */}
                        <a
                            href="https://t.me/@ebisan1st"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition text-2xl hover:scale-110"
                        >
                            <FaTelegramPlane />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:ebisatesfaye30@gmail.com"
                            className="text-gray-400 hover:text-red-400 transition text-2xl hover:scale-110"

                        >
                            <FaEnvelope />
                        </a>

                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name. . ."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message . . . "
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>



                </div>
            </RevealOnScroll>
        </section>



    )
}