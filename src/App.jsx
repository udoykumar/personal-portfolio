import Navbar from "./layout/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

export const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};
