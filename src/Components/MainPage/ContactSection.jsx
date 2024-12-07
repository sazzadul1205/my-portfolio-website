"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Form from "../Form";
import { getContact } from "@/Services/getContact";
import { getSocial } from "@/Services/getSocial";
import { ColorRing } from "react-loader-spinner";

const ContactSection = () => {
  const [loading, setLoading] = useState(true);
  const [ContactsData, setContactsData] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contact = await getContact();
        const socialData = await getSocial();

        setContactsData(contact[0]);
        setSocialLinks(socialData[0]);
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

  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-56">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          {ContactsData?.intro}
        </p>

        {/* Form and Social Links */}
        <div className="flex gap-8 items-start">
          {/* Contact Form */}
          <Form />

          {/* Social Media & Contact Info */}
          <div className="text-center md:text-left pt-10 w-1/2">
            <h3 className="text-4xl font-semibold">Connect Me</h3>
            {/* Social Links Section */}
            <nav className="flex gap-2 mt-4 sm:mt-0">
              <Link
                href={socialLinks?.google}
                className="text-xl hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FcGoogle />
              </Link>
              <Link
                href={socialLinks?.facebook}
                className="text-xl text-blue-600 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={socialLinks?.twitter}
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
                href={socialLinks?.github}
                className="text-xl text-gray-800 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href={socialLinks?.linkedin}
                className="text-xl text-blue-700 hover:scale-125 transition-transform transform bg-white p-3 rounded-full"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </Link>
            </nav>

            <p className="text-lg mb-2 pt-5">
              <strong>Phone:</strong> {ContactsData?.phone}
            </p>
            <p className="text-lg">
              <strong>Address:</strong> {ContactsData?.address}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
