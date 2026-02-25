import { Github, Linkedin, Sparkles, ArrowUp, X } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/udoykumar", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/udoy-kumar-pal/",
    label: "LinkedIn",
  },
  { href: "https://x.com/UdoyK1353", label: "X" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-[#080b14] border-t border-white/5 overflow-hidden">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-50" />

        {/* Background radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-14 pb-8">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/5">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles
                  size={20}
                  className="text-sky-400"
                  strokeWidth={1.5}
                />
                <span className="text-2xl font-bold text-white tracking-tight">
                  Udoy<span className="text-primary">Kumar</span>
                </span>
              </div>
              <p className="text-sm text-slate-500 max-w-[220px] leading-relaxed">
                Crafting thoughtful digital experiences with clean code and
                purposeful design.
              </p>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-slate-600">
                Navigate
              </p>
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-slate-600 mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-400/10 transition-all duration-200"
                  >
                    {Icon ? (
                      <Icon size={18} strokeWidth={1.8} />
                    ) : (
                      <img src="/x.png" alt="" className="w-7 h-7 text-white" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 ">
            <p className="text-sm text-slate-600">
              © {currentYear}{" "}
              <span className="font-medium text-primary">Udoy Kumar</span> · All
              rights reserved
            </p>
            <div className="flex items-center gap-2 text-xs animate-float animation-delay-400 text-slate-300 bg-primary/10 border border-white/5 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
              Available Now
            </div>
          </div>
        </div>
      </footer>

      {scrollVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg shadow-primary/50 hover:shadow-primary transition-all duration-200 animate-float animation-delay-400 z-50"
        >
          <ArrowUp size={18} strokeWidth={2} />
        </button>
      )}
    </>
  );
};

export default Footer;
