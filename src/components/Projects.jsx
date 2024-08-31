import React from "react";
import employeeMSImage from "../assets/BreastCancer.jpg";
import bookMSImage from "../assets/Poll.png";
import data from "../assets/Data.jpg";
import dock from "../assets/docker.png";
import ems from "../assets/EMS.png";


const projects = [
  {
    id: 1,
    name: "Breast Cancer Detection",
    technologies: "AI/ML",
    image: employeeMSImage,
    github: "https://github.com/singhashu666/Breast-Cancer-Detection",
  },
  {
    id: 2,
    name: "Poll Management System ",
    technologies: "React,Redux",
    image: bookMSImage,
    github: "https://github.com/singhashu666/React-Based-Project-",
    
  },
  {
    id: 3,
    name: "Data Leakage Detection",
    technologies: "ReactJS,Java,DBMS",
    image: data,
    github: "https://github.com/singhashu666/Data-Leakage-Detection",
  },
  {
    id: 4,
    name: "Docker Container",
    technologies: "Dokcer image, Virtualization, CLI, Kubernetes",
    image: dock,
    
    github: "https://github.com/singhashu666/Docker-Container-",
  },
  {
    id: 4,
    name: "EMS Project",
    technologies: "ReactJS,React Router,Redux,Javascript,Bootstrap,Firebase",
    image: ems,
    
    github: "https://github.com/singhashu666/Employee-Management-System-",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href= {project.github}  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"  
              rel="noopener noreferrer">GitHub</a>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
