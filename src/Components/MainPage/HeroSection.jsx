"use client";

import React, { useEffect, useState } from "react";
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
import { getHeroData } from "@/Services/getHeroData";
import { getSocial } from "@/Services/getSocial";
import { ColorRing } from "react-loader-spinner";

const HeroSection = () => {
  const [hero, setHero] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const HeroData = await getHeroData();
        const SocialData = await getSocial();

        setHero(HeroData[0]);
        setSocialLinks(SocialData[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white min-h-screen flex justify-center items-center">
        <ColorRing
          visible={true}
          height="100"
          width="100"
          ariaLabel="loading-spinner"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (!hero || !socialLinks) {
    return (
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white">
      <div className="mx-auto max-w-[1200px] flex flex-row items-center gap-5 py-56 justify-between">
        <div className="w-[350px] h-[350px] overflow-hidden border-4 border-white">
          <Image
            src={hero.profileImage}
            alt={hero.name}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-right">
          <h1 className="text-4xl font-bold mt-6">Hello,</h1>
          <h2 className="text-4xl font-bold mt-6">{hero.name}</h2>
          <h3 className="text-xl font-medium mt-2">
            <span>I am a </span>
            <span>
              <Typewriter
                words={hero.typewriterWords}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </span>
          </h3>
          <p className="text-lg mt-4 max-w-2xl leading-relaxed">
            {hero.tagline}
          </p>
          <div className="mt-6 flex space-x-4 justify-end">
            <a
              href={hero.resumeLink}
              className="bg-transparent border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition items-center gap-5 flex font-semibold"
              download
            >
              <FaArrowLeft />
              <span>View My Resume</span>
            </a>
            <nav className="flex gap-2 mt-4 sm:mt-0">
              <Link
                href={socialLinks.google}
                className="text-xl hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
              </Link>
              <Link
                href={socialLinks.facebook}
                className="text-xl text-blue-600 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks.twitter}
                className="text-xl text-blue-400 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={"/MyImage/twitter.png"}
                  alt={"Twitter Icon"}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </Link>
              <Link
                href={socialLinks.github}
                className="text-xl text-gray-800 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href={socialLinks.linkedin}
                className="text-xl text-blue-700 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
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
