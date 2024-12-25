import React, { useState, useEffect } from "react";
import { Mountain, Dumbbell, Camera, Compass } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight,
  Award,
  Play,
  Pause,
} from "lucide-react";

// Utility for generating random values
const random = (min, max) => Math.random() * (max - min) + min;

const Portfolio = () => {
  // State management
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Data
  const roles = [
    "Frontend Developer",
    "React Enthusiast",
    "UI/UX Developer",
    "Web Developer",
    "JavaScript Developer",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  // Replace these with your actual profile image URLs
  const profileImages = ["me.jpg", "me.jpg", "me.jpg"];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 2000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(imageInterval);
    };
  }, [roles.length, profileImages.length]);

  const projects = [
    {
      title: "Ecommerce Website",
      description:
        "A full-featured e-commerce platform with cart and user authentication.",
      tech: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubLink: "https://github.com/Charanreddy2408/ecommerce",
      videoUrl: "project1.mp4", // Correct path for video
    },
    {
      title: "Swiggy Clone",
      description:
        "A Swiggy clone with restaurant filtering and sorting functionalities.",
      tech: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      githubLink: "https://github.com/Charanreddy2408/swiggy",
      videoUrl: "/project2.mp4", // Correct path for video
    },
    {
      title: "Retrofit Gym Website",
      description: "A fully functioning website with SEO optimization.",
      tech: ["WordPress", "HTML5", "CSS3"],
      link: "https://retrofitgym.com",
      videoUrl: "/api/placeholder/640/360", // Placeholder URL for demo
    },
  ];

  const hobbies = [
    {
      title: "Outdoor Sports",
      icon: Mountain,
      description: "Engaging in outdoor activities like cricket and badminton",
    },
    {
      title: "Workout",
      icon: Dumbbell,
      description: "Staying fit and healthy through regular workouts",
    },
    {
      title: "Photography",
      icon: Camera,
      description: "Capturing moments through my lens",
    },
    {
      title: "Exploring the Unknown",
      icon: Compass,
      description: "Fascinated by uncovering hidden facts and knowledge",
    },
  ];

  const certifications = [
    {
      title: "Code Wars",
      description: "Algorithmic problem-solving",
      date: "2024",
    },
    {
      title: "Python Beginner Course",
      description: "Intellipad certification",
      date: "2023",
    },
    {
      title: "MongoDB Certification",
      description: "Database design and querying",
      date: "2023",
    },
    {
      title: "UiPath Automation Explorer",
      description: "Practical RPA knowledge",
      date: "2023",
    },
  ];
  const careerTimeline = [
    {
      year: "2020-2024",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      location: "City, State",
      score: "9.3 CGPA",
      highlights: [
        "Technical Team Member at GFG Club",
        "Winner of College Hackathon 2023",
        "Published paper on Web Technologies",
      ],
    },
    {
      year: "2018-2020",
      degree: "Intermediate Education (MPC)",
      institution: "Your College Name",
      location: "City, State",
      score: "95%",
      highlights: ["College Topper", "Mathematics Olympiad Winner"],
    },
    {
      year: "2018",
      degree: "Secondary School Education",
      institution: "Your School Name",
      location: "City, State",
      score: "10.0 GPA",
      highlights: ["School First", "Perfect Score in Mathematics"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-animate]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  // Navigation functios
  const navigate = {
    project: {
      next: () =>
        setCurrentProjectIndex((prev) => (prev + 1) % projects.length),
      prev: () =>
        setCurrentProjectIndex(
          (prev) => (prev - 1 + projects.length) % projects.length
        ),
    },

    hobby: {
      next: () => setCurrentHobbyIndex((prev) => (prev + 1) % hobbies.length),
      prev: () =>
        setCurrentHobbyIndex(
          (prev) => (prev - 1 + hobbies.length) % hobbies.length
        ),
    },
  };

  return (
    <>
      <style>
        {`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }

            @keyframes slide-up {
              from { transform: translateY(100px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }

            @keyframes fade-in {
              from { opacity: 0; }
              to { opacity: 1; }
            }

            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            .animate-float {
              animation: float 6s ease-in-out infinite;
            }

            .animate-slide-up {
              animation: slide-up 1s ease-out forwards;
            }

            .animate-fade-in {
              animation: fade-in 1s ease-out forwards;
            }

            .animate-spin-slow {
              animation: spin 3s linear infinite;
            }
          `}
      </style>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Profile Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: Math.random() * 200 + 50 + "px",
                    height: Math.random() * 200 + 50 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    animation: `floatingBubble ${
                      Math.random() * 10 + 15
                    }s infinite ease-in-out`,
                    opacity: Math.random() * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center md:text-left">
              {/* Animated name with letter-by-letter reveal */}
              <h1 className="text-4xl md:text-6xl font-bold text-white overflow-hidden">
                {"Akepati  Sri Charan Reddy"
                  .split("  ")
                  .map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block opacity-0"
                      style={{
                        animation: `letterReveal 0.7s ${
                          index * 0.05
                        }s forwards`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
              </h1>

              {/* Animated roles */}
              <div className="h-16 overflow-hidden mt-4">
                <div
                  className="transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(-${currentRole * 64}px)`,
                  }}
                >
                  {roles.map((role, index) => (
                    <p
                      key={index}
                      className="h-16 text-xl md:text-3xl text-blue-200"
                      style={{
                        animation: "roleSlide 0.5s forwards",
                      }}
                    >
                      {role}
                    </p>
                  ))}
                </div>
              </div>

              {/* Animated description */}
              <div
                className={`mt-8 text-lg text-gray-300 transition-opacity duration-1000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  animation: "slideUp 1s 1s forwards",
                  opacity: 0,
                  transform: "translateY(20px)",
                }}
              >
                <p className="leading-relaxed">
                  I'm a passionate developer with a deep love for creating
                  innovative solutions. With expertise in full-stack development
                  and UI/UX design, I bring ideas to life through clean code and
                  intuitive interfaces.
                </p>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="relative group">
              <div className="relative w-[400px] h-[400px] mx-auto">
                {/* Animated frames */}
                <div className="absolute inset-0 border-4 border-white/20 rotate-45 transform transition-transform duration-500 group-hover:rotate-0" />
                <div className="absolute inset-0 border-4 border-white/20 -rotate-45 transform transition-transform duration-500 group-hover:rotate-0" />

                {/* Profile image with animations */}
                <div className="absolute inset-4 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                  <img
                    src={profileImages[currentImage]}
                    alt="Profile"
                    className="w-full h-full object-cover transform transition-all duration-500"
                    style={{
                      animation: "imagePulse 2s infinite ease-in-out",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes letterReveal {
              from {
                opacity: 0;
                transform: translateY(50px) rotate(20deg);
              }
              to {
                opacity: 1;
                transform: translateY(0) rotate(0deg);
              }
            }

            @keyframes roleSlide {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideUp {
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes imagePulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
              100% {
                transform: scale(1);
              }
            }

            @keyframes floatingBubble {
              0%,
              100% {
                transform: translate(0, 0) rotate(0deg);
              }
              33% {
                transform: translate(50px, -50px) rotate(180deg);
              }
              66% {
                transform: translate(-50px, 50px) rotate(360deg);
              }
            }
          `}</style>
        </section>

        {/* Projects Section */}
        <section className="py-20" id="projects" data-animate>
          <div
            bg-gradient-to-b
            from-gray-900
            via-purple-900
            to-indigo-900
            text-white
          ></div>
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-all duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentProjectIndex * 100}%)`,
                }}
              >
                {projects.map((project, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl">
                      <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                        <video
                          ref={(el) => (project.videoRef = el)} // Assigning ref to the video element
                          src={project.videoUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          muted
                          loop
                        />
                        <button
                          onClick={() => {
                            if (videoPlaying === idx) {
                              project.videoRef.pause();
                              setVideoPlaying(null); // Set video state to null (paused)
                            } else {
                              project.videoRef.play();
                              setVideoPlaying(idx); // Set video state to playing
                            }
                          }}
                          className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors"
                        >
                          <div className="w-12 h-12">
                            {videoPlaying === idx ? <Pause /> : <Play />}{" "}
                            {/* Toggle between Play and Pause icons */}
                          </div>
                        </button>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-500/30 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            className="text-blue-300 hover:text-blue-100 transition-colors flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            className="text-blue-300 hover:text-blue-100 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={navigate.project.prev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={navigate.project.next}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Hobbies Section */}
        <section
          className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900"
          id="hobbies"
          data-animate
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Hobbies & Interests
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <button
                  onClick={navigate.hobby.prev}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Previous hobby"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex-1 max-w-lg mx-4">
                  <div className="text-center">
                    <div className="mb-4">
                      {React.createElement(hobbies[currentHobbyIndex].icon, {
                        className: `w-16 h-16 mx-auto ${hobbies[currentHobbyIndex].animation}`,
                      })}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {hobbies[currentHobbyIndex].title}
                    </h3>
                    <p className="text-gray-300">
                      {hobbies[currentHobbyIndex].description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={navigate.hobby.next}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Next hobby"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex justify-center mt-6 gap-2">
                {hobbies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHobbyIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentHobbyIndex ? "bg-white" : "bg-white/30"
                    }`}
                    aria-label={`Go to hobby ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900"
          id="career"
          data-animate
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Career Journey
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600/30"></div>
              {careerTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative mb-8 ${
                    idx % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                  } md:w-1/2`}
                >
                  <div className="absolute top-0 md:top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 z-10"></div>
                  <div
                    className={`bg-gradient-to-r p-6 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
              ${
                idx % 2 === 0
                  ? "from-indigo-600 to-teal-600"
                  : "from-teal-500 to-indigo-500"
              }
              hover:from-yellow-500 hover:to-orange-400 bg-opacity-70 hover:bg-opacity-90`}
                    style={{
                      background: `linear-gradient(45deg, ${
                        idx % 2 === 0 ? "#7b1fa2, #0288d1" : "#004d40, #673ab7"
                      })`,
                      backgroundSize: "400% 400%",
                      animation:
                        "gradientBG 15s ease infinite, pulseEffect 3s ease infinite", // Multiple animations
                    }}
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`} // Staggered animation delay
                  >
                    <h3 className="text-3xl font-semibold text-white mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-xl text-gray-100 mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-gray-200 mb-4">{item.year}</p>
                    <p className="text-sm text-gray-200 mb-2">
                      {item.location}
                    </p>
                    <p className="text-sm text-gray-200 mb-4">{item.score}</p>
                    <ul className="text-gray-100 list-disc pl-5">
                      {item.highlights.map((highlight, highlightIdx) => (
                        <li key={highlightIdx} className="mb-2">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes gradientBG {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            @keyframes pulseEffect {
              0% {
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(255, 255, 255, 0.5);
              }
              50% {
                box-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                  0 0 30px rgba(255, 255, 255, 0.7);
              }
              100% {
                box-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(255, 255, 255, 0.5);
              }
            }

            /* Hover Effects */
            .hover\\:scale-105:hover {
              transform: scale(1.05);
            }

            .hover\\:shadow-2xl:hover {
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }

            /* Visible Animation for Card Entrance */
            .aos-fade-up {
              animation: fadeUp 1s ease-out forwards;
            }

            @keyframes fadeUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>

          {/* {certicate} */}
          <section
            className="py-20 bg-gradient-to-r from-teal-900 to-blue-900"
            id="certifications"
            data-animate
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Certifications
            </h2>
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:rotate-3"
                    data-aos="fade-up"
                    data-aos-delay={`${idx * 100}`} // Delay for staggered animation
                  >
                    <div
                      className={`bg-gradient-to-r p-6 rounded-lg shadow-xl 
                ${
                  idx % 2 === 0
                    ? "from-green-400 to-blue-600"
                    : "from-yellow-400 to-red-600"
                } 
                hover:from-indigo-500 hover:to-pink-500 transition-all`}
                    >
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-black-200 mb-2">
                        {cert.description}
                      </p>
                      <p className="text-sm text-black-400">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* {coonect} */}
          <section
            className="py-20 bg-gradient-to-r from-indigo-800 to-purple-900 text-white"
            id="get-connected"
          >
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Let’s Get Connected!</h2>
              <p className="text-lg mb-12">
                Feel free to reach out for collaborations, questions, or just a
                friendly chat. I’m always happy to connect!
              </p>
              <div className="flex justify-center space-x-8">
                {/* Social Media Buttons */}
                <a
                  href="https://www.linkedin.com/in/charan-reddy-3636b6288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-500 hover:scale-110 p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg text-white hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/Charanreddy2408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-transform duration-500 hover:scale-110 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-lg text-white hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Github className="h-8 w-8" />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=22eg105m22@anurag.edu.in"
                  className="transform transition-transform duration-500 hover:scale-110 p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-lg text-white hover:shadow-2xl"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Mail className="h-8 w-8" />
                </a>
              </div>
              <div className="mt-12">
                <p className="text-lg">
                  Or feel free to send me a message below:
                </p>
                {/* Optional: Include a simple contact form or a link */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=22eg105m22@anurag.edu.in"
                  className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
