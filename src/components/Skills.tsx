import React from "react";

const Skills = () => (
  <section className="my-8">
    <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="font-medium">Languages</h3>
        <p>C, C++, Java, JavaScript, TypeScript, Python, PHP, Arduino</p>
        <h3 className="font-medium mt-2">Frontend</h3>
        <p>React.js, Next.js, React Native, Redux, Tailwind CSS, Firebase</p>
        <h3 className="font-medium mt-2">Backend</h3>
        <p>Node.js, Express.js, MongoDB, Spring Boot, MySQL, FastAPI</p>
      </div>
      <div>
        <h3 className="font-medium">Creative Tools</h3>
        <p>Adobe Photoshop, Lightroom, Premiere Pro, Illustrator</p>
        <h3 className="font-medium mt-2">Tools</h3>
        <p>Git, GitHub, Figma, Docker</p>
        <h3 className="font-medium mt-2">OS</h3>
        <p>Arch Linux, Windows</p>
        <h3 className="font-medium mt-2">Languages</h3>
        <p>Bangla (Native), English (Proficient), Arabic (Learning)</p>
      </div>
    </div>
  </section>
);

export default Skills;
