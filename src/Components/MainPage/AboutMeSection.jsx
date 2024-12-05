import Image from "next/image";
import React from "react";

const skillsWithIcons = [
  { title: "HTML5", src: "https://i.ibb.co/fd0TD0S/html5.png" },
  { title: "CSS3", src: "https://i.ibb.co/rcHB9fN/css-3.png" },
  { title: "JavaScript", src: "https://i.ibb.co.com/RPyzhT8/js.png" },
  { title: "React", src: "https://i.ibb.co/rchKFjg/physics.png" },
  { title: "Next.js", src: "https://i.ibb.co/6g3Hqkj/nextjs.png" },
  { title: "MongoDB", src: "https://i.ibb.co/x22t6Bf/mongoDb.png" },
  { title: "Node.js", src: "https://i.ibb.co/YZzSfQP/nodejs.png" },
  { title: "Tailwind CSS", src: "https://i.ibb.co/SRKjJbk/tailwind.png" },
  { title: "Vercel", src: "https://i.ibb.co.com/GVmnJNY/vercel.png" },
  { title: "Visual Studio", src: "https://i.ibb.co/K0BZQ03/visual-Studio.png" },
  { title: "Firebase", src: "https://i.ibb.co.com/wpZLnT9/firebase.png" },
  { title: "Express JS", src: "https://i.ibb.co.com/gzGmnyj/express.png" },
  { title: "Vue JS", src: "https://i.ibb.co.com/jyV88hz/vue.png" },
  { title: "GitHub", src: "https://i.ibb.co/fn5tW9H/github.png" },
  { title: "Chat GPT", src: "https://i.ibb.co.com/5MgWKwG/chatGPT.png" },
];

const AboutMeSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-56">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-16 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-blue-200">About Me</h2>
        <p className="mt-4 text-lg">
          I am a passionate developer dedicated to building modern, scalable,
          and user-friendly web applications using ReactJS, NodeJs, or NextJs.
        </p>

        {/* About Me Content */}
        <div className="mt-10 text-left">
          {/* Biography */}
          <div className="pt-5">
            <h3 className="text-3xl font-semibold mb-4 text-blue-300">
              A Short Bio About Me
            </h3>
            <p className="leading-relaxed">
              Hi, I’m Sazzadul Islam Molla, a MERN Stack Developer with a
              passion for crafting high-performing, dynamic, and visually
              appealing web applications. I specialize in React and Next.js to
              create seamless user interfaces, while leveraging Node.js and
              MongoDB to build robust and scalable backend solutions. In
              addition to web development, I hold a Diploma in Computer Science,
              which has provided me with foundational knowledge across various
              IT-related fields. Beyond coding, I am a tech enthusiast who loves
              exploring emerging technologies and contributing to innovative
              projects.
            </p>
          </div>

          {/* Skills Summary */}
          <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-4 text-blue-300">
              My Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillsWithIcons.map((skill, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform hover:scale-110 transition-all duration-300 relative group"
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-sm font-medium text-white bg-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    {skill.title}
                  </div>
                  {/* Skill Icon */}
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width={60}
                    height={60}
                    className="w-14 h-14"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
