import { ArrowUpRight, Download, Github, GithubIcon } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Car Rental Service",
    description:
      "Flexible and reliable car rental service offering a wide range of vehicles for short-term and long-term use. Convenient bookings, competitive rates, and excellent customer support for a smooth driving experience..",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    Live: "https://car-rental-service-frontend.vercel.app/",
    github: "https://github.com/your-username/car-rental-service",
    image: "https://i.ibb.co.com/9kQ7zrP7/Screenshot-6.png",
  },
  {
    title: "Plant Share Project",
    description:
      "A community-driven initiative to share, swap, and nurture plants—bringing green spaces and connections to everyone.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    live: "https://plant-share-frontend.vercel.app/",
    github: "https://github.com/udoykumar/plate-share-client.git",
    image: "https://i.ibb.co.com/bM8Gbdrn/food-share.png",
  },
  {
    title: "Green nest indoor plant care",
    description:
      "Bring nature indoors with Green Nest—easy-care, vibrant indoor plants for a fresh and lively home..",
    tags: ["React", "Tailwind", "Daisy UI", "Firebase"],
    live: "https://green-nest-indoor-plant-care.vercel.app/",
    github: "https://github.com/your-username/green-nest-indoor-plant-care",
    image: "https://i.ibb.co.com/bjVQ4pWV/Screenshot-17.png",
  },
  {
    title: "Corporate Assets Management",
    description:
      "Efficiently track, manage, and optimize your company’s assets to maximize productivity and reduce costs....",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    live: "https://corporate-assets-management-frontend.vercel.app/",
    github: "https://github.com/your-username/corporate-assets-management",
    image: "https://i.ibb.co.com/1YLxv3JP/Screenshot-7.png",
  },
];
const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows
       */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header  */}
        <div className="text-center max-w-3xl mb-16 mx-auto">
          <span className="text-secondary-foreground text-sm font-medium tracking-wide uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className=" text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to A
            selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
        {/* project grid  */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden shadow-lg animate-fade-in group md:row-span-1 "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* image*/}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-900 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links  */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="blank"
                    href={project.live}
                    className="glass p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="blank"
                    href={project.github}
                    className="glass  p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content  */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between ">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, ind) => (
                    <span
                      key={ind}
                      className="text-xs bg-surface px-4 py-2 rounded-full font-medium border border-border/50 text-muted-foreground hover:border-primary/50 transition-all duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all  cta */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <button className=" inline-flex items-center gap-2 rounded-full glass md:px-8 px-4 md:py-4 py-2 text-sm md:text-lg animated-border">
            <ArrowUpRight className="w-3 h-3" /> View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
