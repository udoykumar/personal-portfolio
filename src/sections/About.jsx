import { Code2, Gauge, Users, Lightbulb } from "lucide-react";
import React from "react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing scalable, maintainable, and well-structured code following modern development practices.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Building fast, responsive, and optimized web experiences with a strong focus on performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Communicating ideas, sharing knowledge, and working effectively to achieve shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Turning complex challenges into simple, practical, and user-friendly solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Me
              </span>
            </div>

            <h2 className="animate-fade-in text-4xl font-bold leading-tight text-secondary-foreground animation-delay-100 md:text-5xl">
              Turning ideas into
              <span className="block font-serif font-normal italic text-primary">
                meaningful digital experiences.
              </span>
            </h2>

            <div className="animate-fade-in space-y-5 text-base leading-8 text-muted-foreground animation-delay-200">
              <p>
                I'm a frontend developer passionate about building modern,
                responsive, and user-focused web applications. I specialize in
                React and Next.js, transforming ideas into intuitive digital
                experiences with clean code and thoughtful design.
              </p>

              <p>
                I enjoy exploring modern web technologies, solving real-world
                problems, and continuously improving my development skills. My
                goal is to build products that combine functionality,
                performance, and exceptional user experience.
              </p>
            </div>

            {/* Mission */}
            <div className="glass glow-border animate-fade-in rounded-2xl p-6 animation-delay-300">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                "I believe great development is about more than writing code —
                it's about creating meaningful experiences that make a
                difference."
              </p>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:glow-border animate-fade-in"
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
