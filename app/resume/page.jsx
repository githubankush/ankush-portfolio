"use client";
// import {BackgroundBeams}  from "@/components/ui/background-beams";
import React from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

const techKeywords = [
  "JWT",
  "bcrypt",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "three.js",
  "TensorFlow",
  "FastAPI",
  "OpenCV",
  "JavaScript",
  "Python",
  "Zod",
  "Razorpay",
];

const highlightTechnologies = (text) => {
  const regex = new RegExp(`\\b(${techKeywords.join("|")})\\b`, "gi");
  return text.replace(regex, (match) => {
    return `<span style="color: #00FF99; font-weight: 600;">${match}</span>`;
  });
};

const devKeywords = [
  "full stack",
  "frontend",
  "backend",
  "web",
  "developer",
  "UI",
  "UX",
  "responsive",
  "authentication",
  "authorization",
  "dashboard",
  "eCommerce",
];

const highlightKeywords = (text) => {
  const allKeywords = [...techKeywords, ...devKeywords].sort(
    (a, b) => b.length - a.length
  );
  const escapedKeywords = allKeywords.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "gi");

  return text.replace(regex, (match) => {
    return `<span class="text-[#00FF99] font-semibold">${match}</span>`;
  });
};

// about data
const about = {
  info: "About me",
  description:
    "Hi, I'm Ankush Kumayu, a passionate and driven web developer completed a B.Tech in Computer Science & Engineering from Prestige Institute Of Engineering Management And Research, Indore. I enjoy building interactive and user-friendly web applications using modern technologies like React.js, Node.js, and Tailwind CSS.\n\nOver the past year, I’ve worked on a variety of projects ranging from full-stack web apps to real-time computer vision games. I recently completed a frontend development internship at TNGS.ES, where I contributed to an educational soccer website and developed an interactive quiz to boost user engagement.\n\nI'm constantly learning and exploring new tools in the tech ecosystem, with a keen interest in AI, data science, and intuitive user experience design. I'm currently seeking opportunities where I can contribute, grow, and solve real-world problems through technology.",
  info: [
    {
      title: "Email",
      content: "ankushkumayu04@gmail.com",
    },
    {
      title: "Phone",
      content: "+91-7067259690",
    },
    {
      title: "Address",
      content: "Indore, Madhya Pradesh, India",
    },
  ],
};

// experience data
const experience = {
  info: "Experience",
  description:
    "A summary of my professional experiences, showcasing my contributions and learning.",
  details: [
    {
      title: "Python Developer Intern - ListApp Pharmatech Pvt. Ltd.",
      content:
        "Developed a Python script to map standard products with duplicate entries, reducing data redundancy. Utilized MS Excel and SQL for efficient data handling and optimization. Gained experience in streamlining workflows and improving data integrity during the internship.",
    },
    {
      title: "Frontend Developer Intern - The Next Generation Sports (TNGS.ES)",
      content:
        "Contributed to the frontend development of a soccer education website, focusing on building responsive UI components and enhancing user experience. Developed an interactive quiz module to boost user engagement, and collaborated with the design team to implement clean, intuitive layouts using modern web technologies.",
    },
  ],
};

// education data
const education = {
  college: {
    degree: "B.Tech in Computer Science & Engineering",
    institute:
      "Prestige Institute of Engineering Management & Research, Indore",
    yearOfQualification: 2025,
    CGPA: "7.95/10",
  },
  highSchool: {
    level: "Higher Secondary (12th)",
    board: "Madhya Pradesh Board of Secondary Education",
    institute: "Rai Academy Higher Secondary School, Indore",
    yearOfQualification: 2021,
    percentage: "87.2 %",
  },
  secondarySchool: {
    level: "High School (10th)",
    board: "Madhya Pradesh Board of Secondary Education",
    institute: "Rai Academy Higher Secondary School, Indore",
    yearOfQualification: 2019,
    percentage: "87 %",
  },
};

// skills data
const skills = {
  info: "Skills",
  description:
    "A comprehensive overview of my technical skills and expertise in various technologies.",
  details: [
    {
      title: "HTML",
      content:
        "Expert in creating semantic and accessible web structures using HTML5.",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS",
      content:
        "Proficient in designing responsive and visually appealing layouts using modern CSS techniques.",
      icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      content:
        "Experienced in dynamic and interactive web development using JavaScript.",
      icon: <FaJs />,
    },
    {
      title: "Node.js",
      content:
        "Skilled in building scalable server-side applications with Node.js.",
      icon: <FaNodeJs />,
    },
    {
      title: "Python",
      content:
        "Proficient in Python for scripting, data analysis, and backend development.",
      icon: <FaPython />,
    },
    {
      title: "React.js",
      content:
        "Experienced in building modern, interactive user interfaces with React.js.",
      icon: <FaReact />,
    },
    {
      title: "MongoDB",
      content: "Knowledgeable in managing NoSQL databases using MongoDB.",
      icon: <DiMongodb />,
    },
    {
      title: "SQL",
      content:
        "Proficient in designing and querying relational databases using SQL.",
      icon: <SiMysql />, // Placeholder for SQL.
    },
    {
      title: "Express.js",
      content:
        "Experienced in developing RESTful APIs and server-side applications using Express.js.",
      icon: <FaNodeJs />, // Placeholder for Express.js.
    },
    {
      title: "Tailwind CSS",
      content:
        "Adept at creating responsive, utility-first designs with Tailwind CSS for modern web applications.",
      icon: <SiTailwindcss />,
    },
    {
      title: "Next.js",
      content:
        "Proficient in building server-side rendered and statically generated React applications with Next.js.",
      icon: <SiNextdotjs />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// projects data
const projects = {
  info: "Projects",
  description:
    "A showcase of the projects I have worked on, highlighting my skills and contributions.",
  details: [
    {
      title: "Shoppy E-commerce Website",
      content:
        "Developed a modern and responsive eCommerce web application featuring product browsing, cart functionality, and secure user authentication. Implemented role-based access with JWT and bcrypt. Built an admin dashboard for managing products and users. Integrated Razorpay for secure and seamless online payments. Used technologies like Node.js, Express.js, MongoDB and Tailwind CSS to deliver a seamless shopping experience.",
    },
    {
      title: "MERN App with Admin Panel and Authorization",
      content:
        "Built a full-stack MERN application featuring user registration, login, and dark/light mode. Implemented secure password handling with bcrypt and JWT. Developed an admin panel with CRUD capabilities for managing users and ensured robust authentication and authorization.",
    },
    {
      title: "Potato Leaf Blight Detection",
      content:
        "Developed a system for detecting Potato Leaf Blight using TensorFlow and FastAPI. My role included data preprocessing and creating a React.js-based frontend for uploading leaf images. The project aimed to help farmers diagnose diseases early and improve crop health.",
    },
    {
      title: "Gesture-Driven Gaming",
      content:
        "Collaborated as part of a six-member team to create games like Snake, Rock-Paper-Scissors, and Pong using OpenCV for gesture recognition. Enabled users to interact with the games through real-time hand gestures, enhancing accessibility and user experience.",
    },
    
    {
      title: "Virtual Herbal Garden",
      content:
        "Created a 3D virtual herbal garden using next.js and three.js. The project aimed to provide an interactive and immersive experience for users to explore various herbs and their medicinal properties. My role included designing the user interface and integrating 3D models.",
    },
  ],
};

const resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[78vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="projects">Project</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="">
                <h1 className="text-3xl border-accent inline border-b-2 mb-2 font-bold">
                  {experience.info}
                </h1>
                <p className="mt-4 mb-6">{experience.description}</p>

                <div className="p-4 rounded-lg shadow-md border-2 border-gray-800 hover:border-accent ">
                  <p className="text-xl font-bold">
                    {experience.details[0].title}
                  </p>
                  <p className="mb-4">{experience.details[0].content}</p>
                </div>
                <div className="p-4 rounded-lg shadow-md border-2 border-gray-800 hover:border-accent ">
                  <p className="text-xl font-bold">
                    {experience.details[1].title}
                  </p>
                  <p className="mb-4">{experience.details[1].content}</p>
                </div>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="">
              <h1 className="text-3xl border-accent inline border-b-2 mb-2 font-bold">
                Education
              </h1>
              <div className="p-2 mt-5 rounded-lg shadow-md border-2 border-gray-800">
                <h1 className="text-xl mb-2 font-bold text-gray-300 ">
                  {education.college.degree}
                </h1>
                <p className="text-lg font-bold text-gray-400">
                  {education.college.institute}
                </p>
                <p className="text-lg font-bold text-gray-400">
                  {education.college.yearOfQualification}
                </p>
                <p className="mb-2">{education.college.CGPA}</p>
              </div>
              <div className="p-2 rounded-lg shadow-md border-2 border-gray-800">
                {/* <h1 className="text-3xl border-accent inline border-b-2 mb-2 font-bold">Education</h1> */}
                <h1 className="text-xl mb-2 font-bold text-gray-300 ">
                  {education.highSchool.level}
                </h1>
                <h1 className="text-xl mb-2 font-bold text-gray-300 ">
                  {education.secondarySchool.board}
                </h1>
                <p className="text-lg font-bold text-gray-400">
                  {education.highSchool.institute}
                </p>
                <p className="text-xl font-bold text-gray-400">
                  {education.highSchool.yearOfQualification}
                </p>
                <p className="mb-2">{education.highSchool.percentage}</p>
              </div>
              <div className="p-2 rounded-lg shadow-md border-2 border-gray-800">
                {/* <h1 className="text-3xl border-accent inline border-b-2 mb-2 font-bold">Education</h1> */}
                <h1 className="text-xl mb-2 font-bold text-gray-300 ">
                  {education.secondarySchool.level}
                </h1>
                <h1 className="text2gxl mb-2 font-bold text-gray-300 ">
                  {education.secondarySchool.board}
                </h1>
                <p className="text-lg font-bold text-gray-400">
                  {education.secondarySchool.institute}
                </p>
                <p className="text-xl font-bold text-gray-400">
                  {education.secondarySchool.yearOfQualification}
                </p>
                <p className="mb-2">{education.secondarySchool.percentage}</p>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="">
                <h1 className="text-3xl border-accent inline border-b-2 mb-2 font-bold">
                Skills
              </h1>
              <div className="w-full inline flex flex-col p-4 rounded-lg shadow-md">

                <p className="mb-4">{skills.description}</p>
                <div className="mb-4 flex flex-wrap gap-2 rounded-lg shadow-md">
                  {skills.details.map((elem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col md:flex-row justify-around items-center gap-2 mb-2 border-2 p-4 hover:bg-accent hover:text-black rounded-lg shadow-md w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
                      >
                        <div className="text-xl">{elem.icon}</div>
                        <div className="text-center md:text-left">
                          {elem.title}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            {/* projects */}
            <TabsContent value="projects" className="w-full">
              <h1 className="text-3xl border-accent inline border-b-2 mb-4 font-bold">
                Projects
              </h1>
              <p className="mt-4 mb-4">{projects.description}</p>
              {projects.details.map((elem, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg shadow-md border-2 border-gray-800"
                >
                  <h1 className="text-xl mb-2 font-bold text-white">
                    {"-> "}
                    {elem.title}
                  </h1>
                  <p
                    className="text-lg font-bold text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html: highlightTechnologies(elem.content),
                    }}
                  />
                </div>
              ))}
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full">
              <h1 className="text-3xl font-bold border-b-2 border-accent inline mb-4">
                About me
              </h1>

              <p
                className="text-base text-lg font-bold text-gray-300 whitespace-pre-line mt-2"
                dangerouslySetInnerHTML={{
                  __html: highlightKeywords(about.description),
                }}
              />

              {about.info.map((elem, index) => (
  <div key={index} className="mb-4">
    <p className="text-base text-lg font-bold text-gray-300">
      {elem.title}: {elem.content}
    </p>
  </div>
))}

            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default resume;
