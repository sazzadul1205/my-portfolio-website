"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { GoVersions } from "react-icons/go";

const projects = [
  {
    title: "Fresh and Fit",
    createdBy: "ReactJs",
    updatedDate: "11-12-2023",
    liveLink: "https://fresh-and-fit-c2dc3.web.app/",
    githubLink: "https://github.com/sazzadul1205/fresh-and-fit-client",
    image: "https://i.ibb.co/JpFCLG2/Web-Image1.png",
  },
  {
    title: "Nexcent",
    createdBy: "ReactJs",
    updatedDate: "08-01-2024",
    liveLink: "https://nexcent-88b82.web.app/",
    githubLink: "https://github.com/sazzadul1205/Nexcentt",
    image: "https://i.ibb.co/nBFLRvS/Web-Image6.png",
  },
  {
    title: "Convert Me",
    createdBy: "ReactJs",
    updatedDate: "21-08-2024",
    liveLink: "https://convert-me-f361a.web.app/",
    githubLink: "https://github.com/sazzadul1205/Convert-Me-client",
    image: "https://i.ibb.co/FKdvnmj/Web-Image5.png",
  },
  {
    title: "Electron E-Commerce",
    createdBy: "ReactJs",
    updatedDate: "03-02-2024",
    liveLink: "https://electon-ecommerce-cd299.web.app",
    githubLink:
      "https://github.com/sazzadul1205/Electron-E-Commerce-Website-Client",
    image: "https://i.ibb.co/FBwzD67/Web-Image7.png",
  },
  {
    title: "Task Manager",
    createdBy: "ReactJs",
    updatedDate: "22-12-2023",
    liveLink: "https://task-manager-ea274.web.app/",
    githubLink: "https://github.com/sazzadul1205/Brand-shop-client",
    image: "https://i.ibb.co/qJfV3nB/Web-Image4.png",
  },
  {
    title: "Sazzad Advert",
    createdBy: "ReactJs",
    updatedDate: "29-09-2024",
    liveLink: "https://sazz-advert.web.app/",
    githubLink: "https://github.com/sazzadul1205/SazzAdvert-client",
    image: "https://i.ibb.co/8PnnSHr/Web-Image9.png",
  },
  {
    title: "Mobile Brand Shop",
    createdBy: "ReactJs",
    updatedDate: "04-09-2024",
    versions: [
      {
        version: "1.0",
        title: "MoBo Shop",
        liveLink: "https://brand-shop-e71e7.web.app/",
        githubLink: "https://github.com/sazzadul1205/Brand-shop-client",
        image: "https://i.ibb.co/vHgvs2G/Web-Image2.png",
      },
      {
        version: "2.0",
        title: "Mobile Brand Shop",
        liveLink: "https://mobile-brand-shop.web.app/",
        githubLink: "https://github.com/sazzadul1205/Mobile-Brand-Shop-Client",
        image: "https://i.ibb.co.com/dQzD7Ss/Screenshot-6.png",
      },
    ],
  },
  {
    title: "Master Job Shop",
    createdBy: "ReactJs",
    updatedDate: "24-09-2024",
    versions: [
      {
        version: "1.0",
        title: "Job Shop",
        liveLink: "https://job-shop-a7d92.web.app/",
        githubLink: "https://github.com/sazzadul1205/job-shop-client",
        image: "https://i.ibb.co/YRZJDLL/Web-Image3.png",
      },
      {
        version: "2.0",
        title: "Master Job Shop",
        liveLink: "https://master-job-shop.web.app/",
        githubLink: "https://github.com/sazzadul1205/Master-Job-Shop-Client",
        image: "https://i.ibb.co.com/YWKnB5V/masterbanner.png",
      },
    ],
  },
  {
    title: "SIPI School Website",
    createdBy: "ReactJs (Group)",
    updatedDate: "22-11-2024",
    liveLink: "https://sipi-website-da327.web.app/",
    githubLink: "https://github.com/fahim-farhad1/sipi-website2/tree/sazzad",
    image: "https://i.ibb.co.com/ZVw0Y7h/Screenshot-5.png",
  },
];

const sortedProjects = projects.sort((a, b) => {
  // Helper function to get the latest updated date
  const getLatestDate = (project) => {
    // Check if the project has versions and get the last version's date
    if (project.versions && project.versions.length > 0) {
      return new Date(
        project.versions[project.versions.length - 1].updatedDate ||
          "1970-01-01"
      );
    }
    // Otherwise, use the main project's updatedDate
    return new Date(project.updatedDate || "1970-01-01");
  };

  // Parse dates for both projects being compared
  const dateA = getLatestDate(a);
  const dateB = getLatestDate(b);

  // Sort by descending date (most recent first)
  return dateB - dateA; // `dateB - dateA` ensures most recent comes first
});

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gradient-to-bl from-purple-600 to-blue-500 text-slate-200 py-56">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-16">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-white">
          My Projects
        </h2>
        <div className="p-[2px] bg-white my-2"></div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-3">
          {sortedProjects.map((project, index) => {
            const latestVersion = project.versions
              ? project.versions[project.versions.length - 1]
              : null;

            return (
              <div
                key={index}
                className="relative bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <Image
                  src={latestVersion ? latestVersion.image : project.image}
                  alt={latestVersion ? latestVersion.title : project.title}
                  width={300}
                  height={300}
                  className="w-full h-52 object-cover"
                />

                {/* Icons on Top-Left */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <Link
                    href={
                      latestVersion ? latestVersion.liveLink : project.liveLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaLink />
                  </Link>
                  <Link
                    href={
                      latestVersion
                        ? latestVersion.githubLink
                        : project.githubLink
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <FaGithub />
                  </Link>
                  {project.versions && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <GoVersions />
                    </button>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-3">
                  <h3 className="text-2xl font-semibold">
                    {latestVersion ? latestVersion.title : project.title}
                  </h3>
                  <p className="text-sm mb-2">{project.createdBy}</p>
                  <p className="text-sm">
                    Updated Date:
                    {project.updatedDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 text-black">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full">
            <h3 className="text-2xl font-bold mb-4">
              {selectedProject.title} Versions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.versions.map((version, idx) => (
                <div key={idx} className="bg-gray-100 rounded-lg p-4 shadow-md">
                  <Image
                    src={version.image}
                    alt={version.title}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h4 className="text-lg font-semibold mt-2">
                    {version.title} (v{version.version})
                  </h4>
                  <div className="flex gap-4 mt-2 justify-between">
                    <Link
                      href={version.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <FaLink />
                    </Link>
                    <Link
                      href={version.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleModalClose}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
