import { useEffect, useState, useRef } from "react";

function Contact() {
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

  return (
    <section
      ref={sectionRef}
      // Removed min-h-screen to prevent the large gap on full pages.
      className="py-6 md:py-18 bg-gray-50 border-t border-gray-200 flex flex-col"
    >
      <div className="w-full px-4 flex-1 py-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 ">Contact Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            If you're hiring or have a project in mind, feel free to get in
            touch via email or phone.
          </p>
        </div>

        {/* Contact Info */}
        <div
          className={`text-center space-y-4 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:abdulkadir.moha85@gmail.com"
              className="text-blue-600 hover:underline"
            >
              abdulkadir.moha85@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+358451856064"
              className="text-blue-600 hover:underline"
            >
              +358 45 185-6064
            </a>
          </p>
        </div>
      </div>

      {/* Copyright at the bottom. mt-auto pushes this container to the bottom. */}
      <div id="contact" className="mt-auto pt-8">
        <div className="border-t border-gray-200"></div>
        <div className="text-center py-4">
          <p className="text-sm text-gray-600">
            © 2025 Abdulkadir Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
