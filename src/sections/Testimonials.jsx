import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import React, { useState } from "react";
const testimonials = [
  {
    quote:
      "pedro is one of the most talented engineers I've worked with. His attends",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://ik.imagekit.io/2y9ou0dfzs/user.png?updatedAt=1763391772680",
  },
  {
    quote:
      "Working with Alex was an absolute pleasure. His problem-solving skills and attention to detail consistently exceeded our expectations.",
    author: "Michael Rodriguez",
    role: "Engineering Manager, Bright Future Labs",
    avatar:
      "https://ik.imagekit.io/2y9ou0dfzs/user.png?updatedAt=1763391772680",
  },
  {
    quote:
      "Sophia brings creativity and technical excellence together. She always delivers clean, scalable solutions on time.",
    author: "Emma Thompson",
    role: "Product Lead, NextWave Solutions",
    avatar:
      "https://ik.imagekit.io/2y9ou0dfzs/user.png?updatedAt=1763391772680",
  },
  {
    quote:
      "Daniel is a highly reliable developer who takes ownership of every task. His communication skills make collaboration seamless.",
    author: "James Wilson",
    role: "Founder, CodeCraft Studio",
    avatar:
      "https://ik.imagekit.io/2y9ou0dfzs/user.png?updatedAt=1763391772680",
  },
  {
    quote:
      "Olivia's deep understanding of system architecture helped us optimize performance significantly. A true professional.",
    author: "Liam Anderson",
    role: "CTO, Digital Horizon",
    avatar:
      "https://ik.imagekit.io/2y9ou0dfzs/user.png?updatedAt=1763391772680",
  },
];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground ">
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>
        {/* testimonial carousel */}
        <div className="max-w-4xl mx-auto ">
          <div className="relative">
            {/* main testimonial */}
            <div className="glass p-8 rounded-2xl md:p-12 glow-border animate-fade-in animation-delay-300">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center ">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt="Testimonials pic"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="font-semibold">
                  {testimonials[activeIndex].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>
          </div>
          {/* testimonials navigation */}
          <div className="flex items-center justify-center mt-3">
            <button
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2 px-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                ></button>
              ))}
            </div>
            <button
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
