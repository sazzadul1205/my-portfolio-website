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

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-row items-center gap-5 py-56 justify-between">
        {/* Professional Photo or Avatar */}
        <div className="w-[350px] h-[350px] overflow-hidden border-4 border-white">
          <Image
            src="https://i.ibb.co.com/rySmtJw/User-Images.jpg"
            alt="Sazzadul Islam Molla"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-right">
          {/* Name and Title */}
          <h1 className="text-4xl font-bold mt-6">Hello,</h1>
          <h2 className="text-4xl font-bold mt-6">
            My Name is Sazzadul Islam Molla
          </h2>
          <h3 className="text-xl font-medium mt-2">
            <span>I am a </span>
            <span>
              <Typewriter
                words={[
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
                ]}
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
            I specialize in crafting cutting-edge, scalable, and high-performing
            web applications tailored to meet your unique needs. From seamless
            user experiences to robust backend systems, I bring your ideas to
            life with precision and creativity.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex space-x-4 justify-end">
            <a
              href="/resume.pdf"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition items-center gap-5 flex font-semibold"
              download
            >
              <FaArrowLeft />
              <span>View My Resume</span>
            </a>
            {/* Social Links Section */}
            <nav className="flex gap-2 mt-4 sm:mt-0">
              <Link
                href="mailto:Psazzadul@gmail.com"
                className="text-xl hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // For security
              >
                <FcGoogle />
              </Link>
              <Link
                href="https://www.facebook.com/sazzadul.islam.pritom/"
                className="text-xl text-blue-600 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank" // Open in a new tab
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://x.com/sazzadu84352084"
                className="text-xl text-blue-400 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Twitter"
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
                href="https://github.com/sazzadul1205"
                className="text-xl text-gray-800 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sazzadul-islam-molla-6905b3293/"
                className="text-xl text-blue-700 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
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
