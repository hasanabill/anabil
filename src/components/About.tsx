import React from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const About = () => (
  <AnimatedSection className="my-20">
    <h2 className="mb-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">
      About Me
    </h2>
    <p className="max-w-3xl text-neutral-300 leading-relaxed text-justify">
      Alhamdulillah, Allah has blessed me with the knowledge and ability to
      pursue my passion for technology. I am a motivated full-stack web
      developer currently in my 8th semester of a BSc in Computing and
      Information Systems at Daffodil International University, specializing in{" "}
      <span className="text-sky-200 font-medium">
        React.js, Node.js, MongoDB, and Express.js
      </span>
      .
      <br />
      <br />
      My journey includes co-founding an e-learning platform, serving as the
      Treasurer of the DIU CIS Club, and developing projects such as{" "}
      <span className="font-medium">Items and Ideas</span> — an
      Amazon-affiliated site built for an Upwork client. I’ve had the honor of
      participating in global competitions like the NASA Space App Challenge,
      the ICPC, and multiple hackathons, all of which sharpened my
      problem-solving skills.
      <br />
      <br />
      I’m also deeply interested in AI and IoT, working on innovative solutions
      that merge faith, ethics, and technology to benefit people and drive
      positive change.
    </p>
  </AnimatedSection>
);

export default About;
