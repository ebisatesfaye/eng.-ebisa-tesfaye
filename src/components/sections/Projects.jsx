import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div id="project" className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Abe Garage - Backend</h3>
              <p className="text-gray-400 mb-4">
                <p>
                  Abe Garage Backend is a RESTful API built with Node.js and Express.js.
                  It manages employee registration and login functionality.
                  The system integrates Firebase Firestore for secure cloud-based data storage.
                </p><br />
                <p>
                  It handles JSON requests and enables CORS for frontend communication.
                  The project demonstrates backend API design and database integration skills.
                </p>

              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express.js", "Firestore", "Firebase Admin SDK"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* <a
                  href="https://amazonebisan.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a> */}
                <a
                  href="https://github.com/ebisatesfaye/Abe-Garage-backend"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Amazon Clone Backend</h3>
              <p className="text-gray-400 mb-4">
                <p>
                  Amazon Clone Backend is a backend API built with Node.js and Express.js.
                  It integrates Stripe for secure online payment processing.
                  The system creates payment intents dynamically based on cart total.
                </p><br />
                CORS is enabled to allow seamless frontend communication.
                Environment variables are used to securely manage API keys.
                The project demonstrates payment gateway integration and e-commerce backend development skills.

                <p>
                </p>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["NodeJs", "Express.Js", "Stripe API", "dotenv", "CORS Middleware"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                {/* <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a> */}
                <a
                  href="https://github.com/ebisatesfaye/amazon-backend-api"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Amazon Clone E-Commerce</h3>
              <p className="text-gray-400 mb-4">
                Developed a full-stack Amazon clone with Stripe payment integration and a Firestore backend. Implemented authentication, cart management, and secure order processing with real-time database support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "ExpressJs", "Stripe", "Firestore"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://amazonebisan.netlify.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a>
                <a
                  href="https://github.com/ebisatesfaye/amazon-clone"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Modern UI/UX Design</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed a modern AI SaaS landing page with a clean, professional UI/UX.
                Built responsive React components including Hero, Features, Pricing, and a dynamic code preview interface.
                <br />
                Focused on visual hierarchy, smooth layout structure, and a production-ready frontend design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCss", "Simple-Icons"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://modern-ux-ui-website-beryl.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a>
                <a
                  href="https://github.com/ebisatesfaye/modern-ux-ui-website"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Social Media Platform</h3>
              <p className="text-gray-400 mb-4">
                Full-stack social media platform with user profiles, posts, comments, and real-time notifications.
                Using MERN stack.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node", "React", "Express", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://social-midia-platform.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a>
                <a
                  href="https://github.com/ebisatesfaye/CodeAlpha_Social_Midia_Platform"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Project Management Tool</h3>
              <p className="text-gray-400 mb-4">
                <p>A full-stack web application that enables teams to create projects, assign tasks, track progress, and collaborate efficiently.</p><br />


                <p>
                  Built using Node.js, Express, PostgreSQL, and React, it features secure authentication, task management, and real-time progress tracking to enhance productivity.
                </p>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["NodeJs", "Express.Js", "React", "TailwindCss", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Live Page →
                </a>
                <a
                  href="https://github.com/ebisatesfaye/CodeAlpha_Project-Management/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Project Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
