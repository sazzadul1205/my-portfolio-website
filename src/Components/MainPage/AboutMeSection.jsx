"use client";

import { useEffect, useState } from "react";
import { getAboutMe } from "@/Services/getAboutMe";
import Image from "next/image";
import { ColorRing } from "react-loader-spinner";

const AboutMeSection = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [aboutMeData, setAboutMeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AboutMe = await getAboutMe();
        setAboutMeData(AboutMe[0]); // Assuming the first object is the data you need
        setLoading(false);
      } catch (err) {
        console.error("Error fetching About Me data:", err);
        setError(true);
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

  if (error) {
    return (
      <div className="bg-gradient-to-tr from-blue-500 to-purple-600 text-white min-h-screen flex justify-center items-center">
        <p className="text-xl font-semibold">
          Failed to load data. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-slate-200 py-56">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-16 text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          About Me
        </h2>
        <div className="h-1 bg-white w-24 mx-auto mb-5"></div>

        {/* About Me Content */}
        <div className="mt-10 text-left">
          {/* Biography */}
          <div className="pt-5">
            <h3 className="text-3xl font-semibold mb-4 ">
              {aboutMeData?.bio?.title}
            </h3>
            <p className="leading-relaxed">{aboutMeData?.bio?.content}</p>
          </div>

          {/* Skills Summary */}
          <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-4 ">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {aboutMeData?.skills?.map((skill, index) => (
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
