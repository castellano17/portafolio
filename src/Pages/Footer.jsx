import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Footer = ({ translations }) => {
  return (
    <footer className="py-20 px-6 border-t border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-heading font-bold text-2xl tracking-tighter text-primary">ESMIR.ME</div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-primary/30">
            Full-stack Web Developer Portfolio © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/castellano17" target="_blank" rel="noreferrer" className="text-primary/30 hover:text-cyan-400 transition-colors">
            <IconBrandGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/esmir-roque/" target="_blank" rel="noreferrer" className="text-primary/30 hover:text-cyan-400 transition-colors">
            <IconBrandLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
