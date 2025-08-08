import React from "react";

const projects = [
  {
    title: "Vector Power",
    date: "March 2025",
    description:
      "Developed a modern, responsive website for a leading renewable energy company in Bangladesh.",
    features:
      "3D animations, scroll effects, contact form integration, and sustainability-focused content.",
    technologies:
      "Next.js, React.js, TailwindCSS, Framer Motion, GSAP, EmailJS, Spline, Lenis, SplitType.",
  },
  {
    title: "AI Project Competition 2024",
    date: "Nov 2024 – Dec 2024",
    description:
      "Developing a platform for Daffodil International University to manage AI project proposals for a competition.",
    features:
      "Team registration, competition details, dashboard to display and verify team information.",
    technologies: "Vite, React.js, NodeJS, ExpressJS, MySQL, Tailwind",
  },
  {
    title: "Chinta – Government-Citizen Forum",
    date: "October 2024",
    description:
      "A platform to connect citizens with the government for constructive national development.",
    features:
      "National ID-based authentication, pay-to-post model, structured templates, upvote/downvote system, cooldown periods.",
    technologies: "Vite, React, Mongoose Node.js, Express.js, MongoDB",
  },
  {
    title: "Items and Ideas",
    date: "June 2024",
    description: "Developed an Amazon-affiliated website for an Upwork client.",
    features: "Secure dashboard for managing and adding products for sale.",
    technologies: "Vite, React, Node.js, Express.js, MongoDB.",
  },
  {
    title: "Shounen Manufacturer",
    date: "April 2022",
    description:
      "Developed a full-stack web application for a wholesale product sales factory.",
    features:
      "Admin panel, authentication, password reset, and data management.",
    technologies: "React.js, Node.js, Express.js, MongoDB, Firebase.",
  },
];

const Projects = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold mb-2">Projects</h2>
    <div className="space-y-6">
      {projects.map((project, idx) => (
        <div key={idx} className="border-b pb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.date}</p>
          <p>{project.description}</p>
          <p>
            <span className="font-medium">Features:</span> {project.features}
          </p>
          <p>
            <span className="font-medium">Technologies:</span>{" "}
            {project.technologies}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
