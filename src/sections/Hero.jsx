/* eslint-disable react-hooks/purity */
import React from "react";
import Button from "../components/Button";
import {
  ArrowRight,
  ChevronDownIcon,
  Download,
  Github,
  Linkedin,
  X,
} from "lucide-react";
const Hero = () => {
  const skills = [
    "React",
    "Next.js",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "Node.js",
    "Express",
    "MongoDB",
    "GitHub",
    "Postman",
    "Firebase",
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/bg-image2.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background"></div>
      </div>
      {/* green dots  */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              background: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* left column text content  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pluse" />
                Software Engineer React Specialist
              </span>
            </div>
            {/* headline and description  */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br /> experiences with <br />{" "}
                <span className="font-serif italic font-normal text-white">
                  Precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-800">
                Hi, I'm Udoy Kumar, a passionate software engineer specializing
                in React and Next.js. I create seamless and engaging web
                applications that bring ideas to life. With a focus on clean
                code and user-centric design.
              </p>
            </div>
            {/* ctas  */}
            <div className="space-y-3 sm:space-x-3">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />{" "}
              </Button>
              <a
                href="/udoy-kumar.pdf"
                download
                className=" inline-flex items-center gap-2 rounded-full glass md:px-8 px-4 md:py-4 py-2 text-sm md:text-lg animated-border"
              >
                <Download className="w-3 h-3" /> Download CV
              </a>
            </div>
            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground ">Follow: </span>
              {[
                { icon: Github, href: "https://github.com/udoykumar" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/udoy-kumar-pal/",
                },
                { icon: X, href: "https://x.com/UdoyK1353" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <social.icon strokeWidth={2} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* right column image content  */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* profile image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/picture.png"
                  alt="My Profile Picture"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass  rounded-xl px-4 py-3 animate-float">
                  <div className=" flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available For Work
                    </span>
                  </div>
                </div>
                {/* stats badge  */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-400">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Year Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="mt-16 animate-fade-in animation-delay-600">
          <p className="text-center text-sm mb-6  text-muted-foreground">
            Technologies I Work With
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex gap-6 w-max animate-marquee">
              {[...skills, ...skills].map((skill, i) => (
                <div key={i} className="shrink-0 px-2 py-2">
                  <span className="text-sm md:text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors px-2 py-1 rounded-full border border-teal-500/30  whitespace-nowrap">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-15 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground "
            >
              <span className="text-xs uppercase tracking-wide">Scroll</span>
              <ChevronDownIcon className="w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
