"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Data:", data);
    alert("Message Sent Successfully!");
  };

  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-56">
      <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>

        {/* Form and Social Links */}
        <div className="flex gap-8 items-start">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className={`w-full mt-2 p-3 border bg-white text-black rounded-lg transition focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className={`w-full mt-2 p-3 border bg-white text-black rounded-lg transition focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full mt-2 p-3 border bg-white text-black rounded-lg transition focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media & Contact Info */}
          <div className="text-center md:text-left pt-10 w-1/2">
            <h3 className="text-4xl font-semibold">Connect Me</h3>
            {/* Social Links Section */}
            <nav className="flex gap-2 pt-5">
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

            <p className="text-lg mb-2 pt-5">
              <strong>Phone:</strong> (+880) 191-7335945
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Building No: 20 Road No: 04 shekhertek
              mohammadpur, Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
