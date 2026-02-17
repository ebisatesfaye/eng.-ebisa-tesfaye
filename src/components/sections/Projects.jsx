import { RevealOnScroll } from "../RevealOnScroll";
import ProjectCard from "../ProjectsCard";
import { amazonImages, socialMediaPlatformImages, modernAIImages } from "../../data/imagesData";
export const Projects = () => {

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div id="project" className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ProjectCard
              title="Abe Garage - Backend"
              description="  Abe Garage Backend is a RESTful API built with Node.js and Express.js.
                  It manages employee registration and login functionality.
                  The system integrates Firebase Firestore for secure cloud-based data storage.
                  It handles JSON requests and enables CORS for frontend communication.
                  The project demonstrates backend API design and database integration skills."
              techStack={["Node.js", "Express.js", "Firestore", "Firebase Admin SDK"]}
              github="https://github.com/ebisatesfaye/Abe-Garage-backend"
            />

            <ProjectCard
              title="Amazon Clone - Backend"
              description="Amazon Clone Backend is a backend API built with Node.js and Express.js.
                  It integrates Stripe for secure online payment processing.
                  The system creates payment intents dynamically based on cart total.
                  CORS is enabled to allow seamless frontend communication.
                Environment variables are used to securely manage API keys.
                The project demonstrates payment gateway integration and e-commerce backend development skills.
"
              // images={amazonImages}
              // deployedLink="https://amazonebisan.netlify.app/"
              techStack={["NodeJs", "Express.Js", "Stripe API", "dotenv", "CORS Middleware"]}
              github="https://github.com/ebisatesfaye/amazon-clone"
            />

            <ProjectCard
              title="Amazon Clone E-Commerce - Full Stack"
              description="Developed a full-stack Amazon clone with Stripe payment integration and a Firestore backend.
                    Implemented authentication, cart management, and secure order processing with real-time database support.
"
              images={amazonImages}
              deployedLink="https://amazonebisan.netlify.app/"
              techStack={["React", "Node.js", "ExpressJs", "Stripe", "Firestore"]}
              github="https://github.com/ebisatesfaye/amazon-clone"
            />

            <ProjectCard
              title="Social Media Platform - Full Stack"
              description="Full-stack social media platform with user profiles, posts, comments, and real-time notifications. Using MERN stack."
              images={socialMediaPlatformImages}
              deployedLink="https://social-midia-platform.vercel.app/"
              techStack={["Node", "React", "Express", "MongoDB"]}
              github="https://github.com/ebisatesfaye/CodeAlpha_Social_Midia_Platform"
            />

            <ProjectCard
              title="Modern AI SaaS Landing Page - UI/UX Frontend"
              description=" Designed and developed a modern AI SaaS landing page with a clean, professional UI/UX.
                Built responsive React components including Hero, Features, Pricing, and a dynamic code preview interface.
                                Focused on visual hierarchy, smooth layout structure, and a production-ready frontend design.
"
              images={modernAIImages}
              techStack={["React", "TailwindCss", "Simple-Icons"]}
              deployedLink="https://modern-ux-ui-website-beryl.vercel.app/"
              github="https://github.com/ebisatesfaye/modern-ux-ui-website"
            />

            <ProjectCard
              title="Project Management Tool - Full Stack"
              description="A full-stack web application that enables teams to create projects, assign tasks, track progress, and collaborate efficiently.
               Built using Node.js, Express, PostgreSQL, and React, it features secure authentication, task management, and real-time progress tracking to enhance productivity.
"
              // images={modernAIImages}
              techStack={["NodeJs", "Express.Js", "React", "TailwindCss", "PostgreSQL"]}
              // deployedLink="https://modern-ux-ui-website-beryl.vercel.app/"
              github="https://github.com/ebisatesfaye/CodeAlpha_Project-Management/"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section >
  );
}
