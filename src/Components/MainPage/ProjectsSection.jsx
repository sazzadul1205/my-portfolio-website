"use client";

import { getProjects } from "@/Services/getProjects";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { GoVersions } from "react-icons/go";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const Projects = await getProjects();
        setProjects(Projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const sortedProjects = projects.sort((a, b) => {
    const dateA = new Date(a.updatedDate.split("-").reverse().join("-")); // Convert "DD-MM-YYYY" to "YYYY-MM-DD"
    const dateB = new Date(b.updatedDate.split("-").reverse().join("-"));
    return dateB - dateA; // Sort descending (latest first)
  });

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gradient-to-bl from-purple-600 to-blue-500 text-slate-200 py-24">
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-12">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          My Projects
        </h2>
        <div className="h-1 bg-white w-24 mx-auto mb-8"></div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, index) => {
            const latestVersion = project.versions
              ? project.versions[project.versions.length - 1]
              : null;

            return (
              <div
                key={index}
                className="relative bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                {/* Project Image */}
                <Image
                  src={latestVersion?.image || project.image}
                  alt={latestVersion?.title || project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />

                {/* Icons on Top-Right */}
                <div className="absolute top-2 right-2 flex gap-2">
                  <Link
                    href={latestVersion?.liveLink || project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 text-white rounded-full hover:bg-blue-700"
                  >
                    <FaLink />
                  </Link>
                  <Link
                    href={latestVersion?.githubLink || project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-3 text-white rounded-full hover:bg-blue-700"
                  >
                    <FaGithub />
                  </Link>
                  {project.versions && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-blue-600 p-3 text-white rounded-full hover:bg-blue-700"
                    >
                      <GoVersions />
                    </button>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">
                    {latestVersion?.title || project.title}
                  </h3>
                  <p className="text-sm text-gray-400">{project.createdBy}</p>
                  <p className="text-sm text-gray-400">
                    Updated: {project.updatedDate}
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
                  <div className="flex gap-4 mt-2">
                    <Link
                      href={version.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                    >
                      <FaLink />
                    </Link>
                    <Link
                      href={version.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleModalClose}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
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
