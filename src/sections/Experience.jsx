import React from "react";

const experience = [
  {
    period: "Jan 2024 - Dec 2024",
    role: "Frontend Developer (Learning & Projects)",
    company: "Self Learning & Personal Projects",
    description:
      "Started my frontend development journey by building responsive websites and small web applications. Focused on mastering core concepts of HTML, CSS, JavaScript while developing multiple hands-on projects.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design"],
    current: false,
  },
  {
    period: "Jan 2025 - Dec 2025",
    role: "React Developer",
    company: "Programming Hero Course",
    description:
      "Built scalable and reusable React applications with proper state management and API integration. Improved performance optimization, component architecture, and clean code practices.",
    technologies: [
      "React js",
      "React Hooks",
      "Context API",
      "React Router",
      "REST API",
      "Tailwind CSS",
      "Axios",
      "Nodejs",
      "Express",
      "MongoDB",
    ],
    current: false,
  },
  {
    period: "Jan 2026 - Present",
    role: "Next.js Developer (Learning & Building)",
    company: "Advanced Frontend Development",
    description:
      "Currently building modern full-stack applications using Next.js. Working with App Router, Server Components, SEO optimization, and deployment strategies to create production-ready applications.",
    technologies: [
      "Next.js",
      "App Router",
      "Server Components",
      "SSR / SSG",
      "Vercel Deployment",
    ],
    current: true,
  },
];
const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 " />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className=" max-w-3xl mb-16 ">
          <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">
            {" "}
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth,from curious beginner to senior
            engineer leading teams and building products at scale.
          </p>
        </div>
        {/* experience timeline  */}
        <div className="relative py-16">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse sm:pl-10"
                    : "md:col-start-2 sm:pr-10"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-primary shadow-lg md:-translate-x-1/2 animate-fade-in"></div>

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-white/5 backdrop-blur-md border border-primary/20 rounded-2xl shadow-xl hover:scale-105 transition duration-300 animate-fade-in">
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                  <h4 className="text-md text-gray-400 mb-3">{exp.company}</h4>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
