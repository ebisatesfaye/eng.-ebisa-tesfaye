import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const frontendSkills = [
    "React",
    "Vite",
    "javascript",
    "TailwindCSS",
    "Typescript",
  ]

  const backendSkills = ["Node.js", "Python", "MySql", "MongoDB", "PostGreSql"];

  return (
    <section id="about"
      className="min-h-screen flex items-center justify-center py-10">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              <p>

               Currently, I am a passionate Software Engineering student and Backend Developer. Specializing in backend development.</p> 
              <p>I am eager to contribute to real-world projects and further develop my expertise in backend systems.</p><br />

              <p>
                I enjoy turning ideas into real, functional systems that solve practical problems. I focus on writing clean, maintainable code and building applications that are secure, efficient, and user-friendly. I am always eager to learn new technologies, improve my skills, and take on challenging projects.
              </p>
              <br />
              <p>
                I am particularly interested in backend engineering, and building real-world systems that create impact.
              </p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>Bachelor of Science in Software Engineering</strong> - Haramaya University  2022 – 2026 GC (2015-2019 EC)



                  </li>
                  <li>
                    Relevant Coursework: Data Structures & Algorithms, Advanced Database Systems, Software Engineering, Web Development, Computer Networks, Cloud Computing...
                  </li>
                </ul>
              </div>
              <h3 className="text-xl text-center font-bold mb-4"> 💼  Work Experience</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-0 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold">
                        Personal Project | 2023
                      </h4>
                      <li>
                        <strong>Full Stack Developer – Amazon Clone (E-commerce Platform)</strong>
                      </li>
                      <small>
                        <li> Developed a full-stack e-commerce web application using React, Node.js, and Express</li>
                        <li>Designed and implemented RESTful APIs for products, users, orders, and payments</li>
                        <li>Built authentication and authorization system (JWT-based)
                        </li>
                        <li>Integrated database management using PostgreSQL / MongoDB
                        </li>
                        <li>Implemented shopping cart, product search, and order management features
                        </li>
                        <li>Deployed the application and managed version control using Git & GitHub
                        </li>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="p-0 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                  {/* <h3 className="text-xl font-bold mb-4"> 💼  Work Experience</h3> */}
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="font-semibold">
                        Personal Project - UI/UX DESIGN (2024)
                      </h4>
                      <li>
                        <strong>Frontend Developer – CodeFlow AI (SaaS Web Interface)</strong>
                        <strong> Personal Project | 2024</strong>
                      </li>

                      <small>
                        <li> Designed and implemented a production-style AI SaaS landing page</li>
                        <li>Developed reusable React components (Hero, Features, Pricing, Testimonials, Navbar)</li>
                        <li>Built a dynamic code preview interface to simulate AI-based code completion</li>
                        <li>Applied modern UI/UX principles for layout, typography, and visual hierarchy</li>
                        <li>Ensured responsive design and performance optimization</li>
                        <li>Managed version control and project structure using Git</li>
                      </small>

                    </div>
                  </div>
                </div>

              </div>
              <b>. . .</b>

            </div>
          </div>
        </div>
      </RevealOnScroll>

    </section>
  );

}