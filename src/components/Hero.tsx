import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-8">
      <h1 className="text-4xl font-bold">Mahmudul Hasan Anabil</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Dhaka, Bangladesh
      </p>
      <div className="flex flex-col items-center gap-1">
        <a href="tel:+8801792155333" className="text-blue-600 hover:underline">
          +8801792155333
        </a>
        <a
          href="mailto:anabil1310@gmail.com"
          className="text-blue-600 hover:underline"
        >
          anabil1310@gmail.com
        </a>
      </div>
      <div className="flex gap-4 mt-2">
        <a
          href="https://mahmudul-anabil.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Portfolio
        </a>
        <a
          href="https://linkedin.com/in/mahmudulhasananabil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/hasanabill"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
