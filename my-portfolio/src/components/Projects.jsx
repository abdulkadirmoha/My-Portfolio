import { useEffect, useState, useRef } from "react";
// Reverting back to original local image imports as requested
import sbrLogo from "/images/sbrLogo.png";
import smartStartLogo from "/images/smartStart-logo.png";
import FengLogo from "/images/feng.png";
import restaurantImage from "/images/untitled.png";
import instagramCloneImage from "/images/instagramClone.png";
import travelJournalImage from "/images/travelJournal.png";
import myPotfolio from "/images/portfolio.png";
import chromeExtension from "/images/chromeExtension.png";

function Projects() {
  // State to control the visibility of the sections
  const [isDesignVisible, setIsDesignVisible] = useState(false);
  const [isFrontendVisible, setIsFrontendVisible] = useState(false);

  // State and refs for the carousel
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const designSectionRef = useRef(null);
  const frontendSectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Reordered frontend projects as requested
  const frontendProjects = [
    {
      title: "Intern Hunt Chrome Extension",
      description:
        "Created a lightweight Chrome extension that automatically saves links from opened tabs, helping me quickly collect and organize company websites I’m interested in applying to for internship.",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageSrc: chromeExtension,
      viewLink:
        "https://github.com/abdulkadirmoha/Scrimba_Projects/tree/main/chrome_Extension",
      githubLink:
        "https://github.com/abdulkadirmoha/Scrimba_Projects/tree/main/chrome_Extension",
    },
    {
      title: "Instagram Clone",
      description:
        "A simplified clone of the Instagram user interface, focusing on front-end functionality like a photo feed, likes, and comments. Built with HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "Javascript"],
      imageSrc: instagramCloneImage,
      viewLink: "#",
      githubLink:
        "https://github.com/abdulkadirmoha/Scrimba_Projects/tree/main/instgram_clone",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio site showcasing my skills and projects. Built with modern web technologies.",
      techStack: ["React", "Tailwind CSS", "Vite"],
      imageSrc: myPotfolio,
      viewLink: "#",
      githubLink: "https://github.com/abdulkadirmoha/My-Portfolio",
    },
    {
      title: "Restaurant Order Menu",
      description:
        "A web application that allows users to view a digital menu, add items to their cart, and place an order. Built with HTML, CSS, and JavaScript.",
      techStack: ["HTML", "CSS", "Javascript"],
      imageSrc: restaurantImage,
      viewLink: "#",
      githubLink:
        "https://github.com/abdulkadirmoha/Scrimba_Projects/tree/main/restaurant_menu",
    },
    {
      title: "Travel Journal",
      description:
        "This project is a personal rebuild to practice my React skills, focusing on component reusability and props.",
      techStack: ["React", "HTML", "CSS"],
      imageSrc: travelJournalImage,
      viewLink: "#",
      githubLink: "https://github.com/abdulkadirmoha/MyTravel-Journal",
    },
  ];

  const designProjects = [
    {
      title: "Somali Business Review",
      description:
        "An online magazine from SIMAD University featuring business insights.",
      techStack: ["WordPress", "Elementor Pro", "SEO"],
      imageSrc: sbrLogo,
      viewLink: "https://sbr.simad.edu.so/",
    },
    {
      title: "Smart-Start",
      description:
        "Designed and built a professional information site for a small company, focusing on clean aesthetics and user-friendly navigation using WordPress and Elementor.",
      techStack: ["WordPress", "Elementor"],
      imageSrc: smartStartLogo,
      viewLink: "https://www.smart-start.fi/",
    },
    {
      title: "Faculty of Engineering – SIMAD University",
      description:
        "Designed and developed a professional academic website using WordPress to showcase the faculty’s programs, departments, research, and student resources.",
      techStack: ["WordPress", "Elementor"],
      imageSrc: FengLogo,
      viewLink: "https://feng.simad.edu.so/",
    },
  ];

  // IntersectionObserver for fade-in effect on both sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target === designSectionRef.current) {
          if (entry.isIntersecting) {
            setIsDesignVisible(true);
          }
        }
        if (entry.target === frontendSectionRef.current) {
          if (entry.isIntersecting) {
            setIsFrontendVisible(true);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (designSectionRef.current) {
      observer.observe(designSectionRef.current);
    }
    if (frontendSectionRef.current) {
      observer.observe(frontendSectionRef.current);
    }

    return () => {
      if (designSectionRef.current) {
        observer.unobserve(designSectionRef.current);
      }
      if (frontendSectionRef.current) {
        observer.unobserve(frontendSectionRef.current);
      }
    };
  }, []);

  // Effect to update currentSlideIndex on scroll
  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (!carouselElement) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const cardWidth =
        carouselElement.querySelector(".snap-center").offsetWidth + 16; // 16 for gap
      const newIndex =
        Math.round(carouselElement.scrollLeft / cardWidth) %
        frontendProjects.length;
      setCurrentSlideIndex(newIndex);
    };

    carouselElement.addEventListener("scroll", handleScroll);
    return () => carouselElement.removeEventListener("scroll", handleScroll);
  }, [frontendProjects.length]);

  // Function to handle scroll animation
  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      isScrollingRef.current = true;
      const cardWidth =
        carouselRef.current.querySelector(".snap-center").offsetWidth + 16; // 16 for gap
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const newScrollLeft =
        direction === "next"
          ? currentScrollLeft + cardWidth
          : currentScrollLeft - cardWidth;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Reset the flag after the scroll is complete
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500); // Wait for the smooth scroll to finish
    }
  };

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      isScrollingRef.current = true;
      const cardWidth =
        carouselRef.current.querySelector(".snap-center").offsetWidth + 16; // 16 for gap
      const newScrollLeft = index * cardWidth;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const CodeProjectCard = ({
    title,
    description,
    techStack,
    imageSrc,
    githubLink,
    isVisible,
    delay,
  }) => (
    <div
      className={`bg-white border-2 border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-700 transform overflow-hidden group snap-center flex-shrink-0 w-[95%] md:w-[48%] lg:w-[32%] my-4 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full transform hover:scale-105 transition-transform duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub Repo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const DesignProjectCard = ({
    title,
    description,
    techStack,
    imageSrc,
    viewLink,
    isVisible,
    delay,
  }) => (
    <div
      className={`bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-700 transform overflow-hidden group relative ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-gray-200 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-500 bg-opacity-80 text-white text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 font-medium hover:text-blue-400 transition-colors duration-200 text-sm"
          >
            View Site →
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 border-t border-gray-200">
      {/* Moved the design projects section to the top */}
      <section
        ref={designSectionRef}
        id="web-projects"
        className="max-w-6xl mx-auto pt-20 pb-16 px-4"
      >
        <h2
          className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 transform ${
            isDesignVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Design Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
            <DesignProjectCard
              key={index}
              {...project}
              isVisible={isDesignVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </section>

      {/* Moved the frontend projects section to the bottom */}
      <section
        ref={frontendSectionRef}
        className="max-w-6xl mx-auto pb-10 px-4"
      >
        <h2
          id="frontend-projects"
          className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 transform ${
            isFrontendVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Frontend Projects
        </h2>
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {/* Create a duplicated list for the infinite loop effect */}
            {frontendProjects.concat(frontendProjects).map((project, index) => (
              <CodeProjectCard
                key={index}
                {...project}
                isVisible={isFrontendVisible}
                delay={index * 200}
              />
            ))}
          </div>

          <button
            onClick={() => scrollCarousel("prev")}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-slate-200 text-slate-800 rounded-full p-1 hover:bg-slate-300 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollCarousel("next")}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-slate-200 text-slate-800 rounded-full p-1 hover:bg-slate-300 transition-colors z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center mt-6 space-x-2">
          {frontendProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`block h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                currentSlideIndex === index ? "bg-slate-800" : "bg-slate-300"
              }`}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </section>

      {/* The full-width bottom border is now at the very end to separate the last section */}
      <div className="border-b border-gray-200"></div>
    </div>
  );
}

export default Projects;
