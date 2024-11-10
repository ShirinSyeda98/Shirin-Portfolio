import React, { useState, useEffect, useRef } from "react";
import { Mail, Star, Globe, Code, Users, Target } from "lucide-react";
import { SiLinkedin } from "react-icons/si";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/ui/card";

import Profile from "../media/profile.jpeg";
import mu from "../media/mu.png";
import bu from "../media/bu.jpg";
import QuizSvg from "../media/quiz.svg";
import JarvisSvg from "../media/jarvis.svg";
import RclSvg from "../media/rcl.svg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const navItems = [
    "home",
    "about",
    "experience",
    "education",
    "skills",
    "projects",
    "contact",
  ];
  const sectionRefs = useRef({
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  });

  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "JavaScript", level: 95 },
        { name: "Next.js", level: 70 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Redux", level: 90 },
        { name: "Material UI", level: 75 },
      ],
    },
    {
      category: "Design & UI/UX",
      items: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "UI Prototyping", level: 85 },
        { name: "Wireframing", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      category: "Development Tools & DevOps",
      items: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Jira", level: 85 },
        { name: "Jenkins", level: 70 },
        { name: "Postman", level: 75 },
      ],
    },
  ];

  const experiences = [
    {
      id: 1,
      company: "Servify",
      role: "Software Engineer II",
      period: "July 2022 - July 2023",
      highlights: [
        "Led development of high-performance React applications, improving user engagement by 40%",
        "Optimized server performance resulting in 50% reduction in response time",
        "Mentored team of 4 junior developers in modern web development practices",
        "Implemented CI/CD pipelines with Jenkins, reducing deployment time by 60%",
      ],
    },
    {
      id: 2,
      company: "Servify",
      role: "Software Engineer I",
      period: "July 2020 - June 2022",
      highlights: [
        "Developed and maintained 25+ dynamic landing pages using React.js and Node.js",
        "Migrated legacy systems to modern React/NodeJS stack, resolving 200+ critical defects",
        "Collaborated with UX team to implement responsive designs across platforms",
        "Integrated third-party APIs improving system functionality and user experience",
      ],
    },
    {
      id: 3,
      company: "Acid Survivors Saahas Foundation",
      role: "Web Developer Intern",
      period: "Jan 2020 - June 2020",
      highlights: [
        "Designed and developed responsive website using React.js and Bootstrap",
        "Implemented donation management system improving fundraising efficiency",
        "Created content management system for easy website updates",
        "Optimized website performance achieving 95+ PageSpeed score",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const { top, bottom } = element.getBoundingClientRect();

          // Check if section is in viewport
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId) => {
    setIsScrolling(true);
    const element = sectionRefs.current[sectionId].current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Shirin Syeda
            </div>

            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover:scale-105
                    ${
                      activeSection === item
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className={`text-2xl transition-colors duration-300
                  ${
                    activeSection === item ? "text-purple-400" : "text-gray-300"
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <div
          ref={sectionRefs.current.home}
          className="min-h-screen flex items-center justify-center px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h1
              className="text-6xl md:text-8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             xl font-bold mb-6 bg-clip-text text-transparent 
              bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"
            >
              Shirin R. Syeda
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-gray-300">
              <span className="font-bold text-white">Software Developer</span>{" "}
              with{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                4 years
              </span>{" "}
              of experience building things for the{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
                web
              </span>
              !
            </p>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300">
              Frontend Developer & UI/UX Designer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["React", "TypeScript", "Node.js", "UI/UX", "Git"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-medium
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    transform hover:scale-110 transition-all duration-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shirinsyeda/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full
                  flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
              >
                <SiLinkedin size={20} />
                <span>Linkedin</span>
              </a>
              <a
                href="mailto:shirinsyeda98.work@gmail.com"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full
                  flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
              >
                <Mail size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div
          ref={sectionRefs.current.about}
          className="py-20 px-4 flex items-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

            {/* Centered Photo Section */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75"></div>
                <div className="relative transform hover:scale-105 transition-all duration-300">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="rounded-full w-60 h-60 object-cover border-4 border-purple-500"
                  />
                </div>
              </div>
            </div>

            <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-lg text-gray-500 space-y-6">
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <p>
                      Computer Science graduate student at Binghamton University
                      (Class of 2025), passionate about creating impactful web
                      experiences. Currently{" "}
                      <span className="text-purple-400">
                        actively seeking full-time opportunities
                      </span>{" "}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Code className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <p>
                      Throughout my 4-year journey in web app development, I've
                      had the privilege of crafting seamless user experiences.
                      My expertise lies in building high-performance web
                      applications and developing modules from the ground up.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <p>
                      I thrive in diverse, multi-cultural environments where I
                      can leverage my strong communication and collaboration
                      skills. My approach combines technical expertise with a
                      deep commitment to understanding user needs and business
                      objectives.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                    <p>
                      Known for meticulous attention to detail and
                      result-oriented delivery, I take pride in creating
                      solutions that make a real difference in user experiences
                      and business outcomes.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <p className="text-purple-400 mb-4">Beyond the Code:</p>
                    <p className="italic">
                      My world extends far beyond technology - I'm a passionate
                      traveler with a love for open roads, a music enthusiast
                      who finds inspiration in melodies, and an animal lover at
                      heart. This diverse blend of interests fuels my
                      creativity, keeps me grounded, and brings unique insights
                      to my approach in software development.
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-purple-400 mb-4">Core Competencies:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>Web Application Development</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>Performance Optimization</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>Cross-cultural Collaboration</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>User Experience Design</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>Module Development</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-purple-400" />
                          <span>Critical Problem Solving</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <div ref={sectionRefs.current.experience} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <Card
                  key={exp.id}
                  className="bg-black/30 backdrop-blur-md border-none
                  transform hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400">
                      {exp.company}
                    </CardTitle>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                    <p className="text-lg text-pink-400">{exp.role}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Star
                            className="text-pink-400 flex-shrink-0 mt-1"
                            size={16}
                          />
                          <span className="text-gray-500">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div ref={sectionRefs.current.education} className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
            <div className="space-y-8">
              <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={bu}
                      alt="BU Logo"
                      className="w-24 h-24 rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-purple-400">
                        <a href="https://www.binghamton.edu/">
                          Binghamton University
                        </a>
                      </h3>
                      <p className="text-lg text-pink-400">Master of Science</p>
                      <p className="text-gray-300">Computer Science</p>
                      <p className="text-gray-500">Aug'23 - May'25</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={mu}
                      alt="MU Logo"
                      className="w-24 h-24 rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-purple-400">
                        <a href="https://mu.ac.in/">Mumbai University</a>
                      </h3>
                      <p className="text-lg text-pink-400">
                        Bachelor of Engineering
                      </p>
                      <p className="text-gray-300">
                        Computer Science and Engineering
                      </p>
                      <p className="text-gray-500">Aug'17 - Jun'20</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={sectionRefs.current.skills} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skillGroup) => (
                <Card
                  key={skillGroup.category}
                  className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-400">
                      {skillGroup.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillGroup.items.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-500">{skill.name}</span>
                            <span className="text-purple-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500
                        transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div ref={sectionRefs.current.projects} className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Recent Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={QuizSvg}
                      alt="University Quiz System"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      University Quiz System
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Developed an intuitive UI with real-time updates and a
                      scalable server using RESTful APIs, ensuring seamless quiz
                      navigation, responsive design, dynamic content rendering
                      across devices, and reducing server response time by 20%
                      during peak loads.
                    </p>
                    {/* <a
                      href="https://www.linkedin.com/in/shirinsyeda/"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View Project</span>
                    </a> */}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={RclSvg}
                      alt="React Component Library"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      React Component Library
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Conceptualized and built an extensive, accessible React UI
                      component library with modular architecture, enabling
                      streamlined integration and consistent cross-browser user
                      experience for all teams and products.
                    </p>
                    {/* <a
                      href="https://www.linkedin.com/in/shirinsyeda/"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View Project</span>
                    </a> */}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-md border-none transform hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img
                      src={JarvisSvg}
                      alt="Jarvis"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">
                      J.A.R.V.I.S - Virtual Assistant
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Designed and developed an emotion-aware virtual assistant
                      using machine learning and voice recognition, achieving
                      92% accuracy with a curated 200,000-entry dataset for an
                      immersive user experience.
                    </p>
                    {/* <a
                      href="https://www.linkedin.com/in/shirinsyeda/"
                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <span>View Project</span>
                    </a> */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div ref={sectionRefs.current.contact} className="py-20 px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <Card className="bg-black/30 backdrop-blur-md border-none">
                <CardContent className="flex items-center space-x-4 p-6">
                  <Mail className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <a
                      href="mailto:shirinsyeda98.work@gmail.com"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      shirinsyeda98.work@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/30 backdrop-blur-md border-none">
                <CardContent className="flex items-center space-x-4 p-6">
                  <SiLinkedin className="text-purple-400" size={24} />
                  <div>
                    <h3 className="font-bold text-lg">Linkedin</h3>
                    <a
                      href="https://www.SiLinkedin.com/in/shirinsyeda/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300"
                    >
                      linkedin.com/in/shirinsyeda
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-black/30 text-center py-6">
        <p className="text-gray-400">
          © 2024 Shirin R. Syeda. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
