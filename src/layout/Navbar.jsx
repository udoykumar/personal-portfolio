import { Menu, Sparkles, X } from "lucide-react";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 mb-3">
          <Sparkles size={20} className="text-sky-400" strokeWidth={1.5} />
          <span className="text-2xl font-bold text-white tracking-tight">
            Udoy<span className="text-primary">Kumar</span>
          </span>
        </a>
        {/* desktop nav */}
        <div className="md:flex items-center gap-1 hidden ">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <Button size="sm">Contact</Button>
        </div>
        {/* mobile menu button  */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* mobile menu (hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col  gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                onClick={() => setIsMobileMenuOpen(false)}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
