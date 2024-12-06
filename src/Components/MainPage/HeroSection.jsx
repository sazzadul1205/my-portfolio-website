"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// In-page JSON data
const socialLinks = {
  google: "mailto:Psazzadul@gmail.com",
  facebook: "https://www.facebook.com/sazzadul.islam.pritom/",
  twitter: "https://x.com/sazzadu84352084",
  github: "https://github.com/sazzadul1205",
  linkedin: "https://www.linkedin.com/in/sazzadul-islam-molla-6905b3293/",
};

const data = {
  name: "Sazzadul Islam Molla",
  profileImage: "https://i.ibb.co.com/rySmtJw/User-Images.jpg",
  tagline:
    "I specialize in crafting cutting-edge, scalable, and high-performing web applications tailored to meet your unique needs. From seamless user experiences to robust backend systems, I bring your ideas to life with precision and creativity.",
  resumeLink: "/resume.pdf",
  typewriterWords: [
    "MERN Stack Developer",
    "Next.js Specialist",
    "JavaScript Enthusiast",
    "React Expert",
    "Node.js Developer",
    "Full-Stack Engineer",
    "API Integration Specialist",
    "Problem Solver",
    "Frontend Designer",
    "Backend Developer",
    "Team Player",
    "Tech Enthusiast",
    "Continuous Learner",
  ],
};

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-row items-center gap-5 py-56 justify-between">
        {/* Professional Photo or Avatar */}
        <div className="w-[350px] h-[350px] overflow-hidden border-4 border-white">
          <Image
            src={data.profileImage}
            alt={data.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-right">
          {/* Name and Title */}
          <h1 className="text-4xl font-bold mt-6">Hello,</h1>
          <h2 className="text-4xl font-bold mt-6">{data.name}</h2>
          <h3 className="text-xl font-medium mt-2">
            <span>I am a </span>
            <span>
              <Typewriter
                words={data.typewriterWords}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h3>

          {/* Tagline */}
          <p className="text-lg mt-4 max-w-2xl leading-relaxed">
            {data.tagline}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex space-x-4 justify-end">
            <a
              href={data.resumeLink}
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition items-center gap-5 flex font-semibold"
              download
            >
              <FaArrowLeft />
              <span>View My Resume</span>
            </a>
            {/* Social Links Section */}
            <nav className="flex gap-2 mt-4 sm:mt-0">
              <Link
                href={socialLinks.google}
                className="text-xl hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <FcGoogle />
              </Link>
              <Link
                href={socialLinks.facebook}
                className="text-xl text-blue-600 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks.twitter}
                className="text-xl text-blue-400 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Twitter"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <Image
                  src={"/MyImage/twitter.png"}
                  alt={"/MyImage/twitter.png"}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href={socialLinks.github}
                className="text-xl text-gray-800 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <FaGithub />
              </Link>
              <Link
                href={socialLinks.linkedin}
                className="text-xl text-blue-700 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <FaLinkedinIn />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
