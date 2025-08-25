import { useEffect, useState, useRef } from 'react';
import profileImage from '../images/photo.jpeg';
import resume from "../assets/resume.pdf"
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            {/* Left Side - Information */}
            <div className="space-y-6 order-2 lg:order-1">
              <div
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Hey World,
                  <br />
                  <span className="text-blue-600">I'm Abdulkadir!</span>
                </h1>
              </div>

              <div
                className={`space-y-2 transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="text-lg lg:text-xl text-gray-600">
                  Frontend Developer & Web Designer
                </p>
              </div>

              <div
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  I'm focused on JavaScript and modern frontend projects, with
                  over{" "}
                  <span className="font-semibold">
                    5 years of experience in WordPress
                  </span>{" "}
                  and web design — building responsive websites.
                </p>
              </div>

              {/* Social Icons */}
              <div
                className={`flex space-x-4 mt-4 mb-6 transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <a
                  href="https://github.com/abdulkadirmoha"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulkadir-mohamed/"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:abdulkadir.moha85@gmail.com"
                  className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>

              {/* Action Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <a
                  href={resume}
                  download="Abdulkadir_Resume.pdf"
                  className="inline-flex items-center justify-center px-6 py-2 bg-slate-800 hover:bg-transparent text-slate-100 hover:text-slate-800 border border-slate-600 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Resume
                </a>
                <a
                  href="#frontend-projects"
                  className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-slate-800 hover:bg-slate-700 text-slate-800 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Frontent Projects
                </a>
                <a
                  href="#web-projects"
                  className="inline-flex items-center justify-center px-6 py-2 bg-transparent border border-slate-800 hover:bg-slate-700 text-slate-800 hover:text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Desing Projects
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-x-0 scale-100"
                  : "opacity-0 translate-x-12 scale-95"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-blue-200 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Abdulkadir Mohamed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2
            className={`text-3xl font-bold mb-6 text-gray-900 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            About Me
          </h2>
          <p
            className={`text-lg text-gray-700 leading-relaxed transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1200ms" }}
          >
            I have a bachelor's degree in{" "}
            <span className="font-semibold">Computer Science</span> and over{" "}
            <span className="font-semibold">
              {" "}
              5 years of experience with WordPress
            </span>
            , building professional websites for businesses and NGOs. I've been
            living in{" "}
            <span className="font-semibold">Finland for 2 years </span>and I'm
            currently studying{" "}
            <span className="font-semibold">
              web development at Helsinki Business College
            </span>
            , focusing on JavaScript, PHP, and React. My{" "}
            <span className="font-semibold">Finnish language level is B1</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
