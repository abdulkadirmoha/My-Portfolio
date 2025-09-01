import { useEffect, useState, useRef } from "react";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // The paths below are already correct because the "images" folder is now in the "public" directory.
  const skills = [
    {
      name: "WordPress",
      icon: `${import.meta.env.BASE_URL}images/wordpress-logo.png`,
      color: "bg-indigo-50",
      textColor: "text-indigo-700",
    },
    {
      name: "Elementor",
      icon: `${import.meta.env.BASE_URL}images/elementor.png`,
      color: "bg-purple-400",
      textColor: "text-indigo-900",
    },
    {
      name: "HTML",
      icon: `${import.meta.env.BASE_URL}images/html.png`,
      color: "bg-orange-600",
      textColor: "text-black",
    },
    {
      name: "CSS",
      icon: `${import.meta.env.BASE_URL}images/css-3.png`,
      color: "bg-blue-600",
      textColor: "text-white",
    },
    {
      name: "JavaScript",
      icon: `${import.meta.env.BASE_URL}images/javascript-logo.png`,
      color: "bg-yellow-500",
      textColor: "text-black",
    },
    {
      name: "Tailwind",
      icon: `${import.meta.env.BASE_URL}images/tailwindcss.png`,
      color: "bg-blue-700",
      textColor: "text-white",
    },
    {
      name: "React",
      icon: `${import.meta.env.BASE_URL}images/react.png`,
      color: "bg-indigo-900",
      textColor: "text-white",
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-50">
      <div className="w-full px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My expertise spans across various technologies and tools, with
            continuous learning to stay updated with the latest industry trends.
          </p>
        </div>

        {/* Skills Icons Grid */}
        <div
          className={`flex flex-wrap justify-center gap-4 w-full transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex items-center px-6 py-1 rounded-full border border-indigo-300 ${
                skill.color
              } ${
                skill.textColor
              } font-light shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <img src={skill.icon} alt={skill.name} className="w-4 h-4 mr-4" />
              <span className="text-sm font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            I'm constantly expanding my skill set and staying updated with the
            latest technologies. These are the main technologies I work with,
            and I'm always eager to learn and improve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
