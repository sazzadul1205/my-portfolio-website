import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-primary-content justify-between items-center p-6 sm:px-16 lg:px-52 gap-4">
      {/* Branding Section */}
      <aside className="text-center sm:text-left">
        <p className="text-lg font-bold">Sazzadul Islam Molla</p>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved
        </p>
      </aside>

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
    </footer>
  );
};

export default Footer;
