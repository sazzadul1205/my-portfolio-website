import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Professional Photo or Avatar */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
        <Image
          src="https://via.placeholder.com/150"
          alt="Your Name"
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-4xl font-bold mt-6">Your Name</h1>
      <h2 className="text-xl font-medium mt-2">
        MERN Stack Developer | Next.js Specialist
      </h2>

      {/* Tagline */}
      <p className="text-lg mt-4 text-center max-w-lg">
        Building modern, scalable, and performant web applications to bring your
        ideas to life.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <a
          href="#portfolio"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Explore My Work
        </a>
        <a
          href="/resume.pdf"
          className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
          download
        >
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
