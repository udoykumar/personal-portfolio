import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const socialLinks = [
  { icon: Github, href: "https://github.com/udoykumar", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/udoy-kumar-pal/",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-slate-300 border-t border-primary/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">Udoy Kumar</h2>
            <p className="text-sm text-slate-400 mt-2 max-w-sm">
              Building modern, scalable and user-friendly web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:text-white transition duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary/50 duration-300 flex items-center justify-center "
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-slate-500">
          © {currentYear} Udoy Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
