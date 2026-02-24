import React from "react";

const experience = [
  {
    period: "Jan 2024 - Present",
    role: "Frontend Developer",
    company: "TechNova Solutions",
    description:
      "Developing responsive and user-friendly web applications using modern JavaScript frameworks. Collaborating with designers to implement pixel-perfect UI and improve user experience.",
    technologies: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "REST API",
      "Git",
    ],
    current: true,
  },
  {
    period: "Jun 2023 - Dec 2023",
    role: "Junior Web Developer",
    company: "Creative IT Agency",
    description:
      "Built dynamic and interactive website components, optimized performance, and maintained existing client projects with clean and maintainable code.",
    technologies: ["HTML5", "CSS3", "tailwind"],
    current: false,
  },
  {
    period: "Jan 2023 - May 2023",
    role: "Frontend Intern",
    company: "Digital Wave Studio",
    description:
      "Assisted in developing landing pages and reusable UI components while learning industry best practices and version control workflows.",
    technologies: ["HTML", "CSS", "JavaScript (Basic)"],
    current: false,
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
