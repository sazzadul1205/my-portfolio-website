import { getAboutMe } from "@/Services/getAboutMe";
import Image from "next/image";
import React from "react";

const AboutMeSection = async () => {
  const AboutMe = await getAboutMe();
  const AboutMeData = AboutMe[0];

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
              {AboutMeData?.bio?.title}
            </h3>
            <p className="leading-relaxed">{AboutMeData?.bio?.content}</p>
          </div>

          {/* Skills Summary */}
          <div className="mt-10">
            <h3 className="text-3xl font-semibold mb-4 ">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {AboutMeData?.skills?.map((skill, index) => (
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
