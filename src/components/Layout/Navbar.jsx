import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IconSun, IconMoon, IconWorld, IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = ({
  switchTheme,
  handleLanguageToggle,
  translations,
  language,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "home", label: translations.navbar.menuOne },
    { to: "about", label: translations.navbar.menuTwo },
    { to: "projects", label: translations.navbar.menuThree },
    { to: "experience", label: translations.navbar.menuFour },
    { to: "estudies", label: translations.navbar.menuFive },
    { to: "contact", label: translations.navbar.menuSix },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4">
      <div className="glass glass-highlight px-6 py-3 rounded-full flex items-center gap-6 lg:gap-10 max-w-full">
        <RouterLink to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-heading font-bold text-xl tracking-tighter text-accent">ESMIR.ME</span>
        </RouterLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-white/70">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-accent transition-colors cursor-pointer"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={switchTheme}
            className="text-lg text-white/50 hover:text-white transition-colors"
            title="Toggle Theme"
          >
            <IconSun className="w-5 h-5 dark:block hidden" />
            <IconMoon className="w-5 h-5 block dark:hidden" />
          </button>

          <div className="h-4 w-px bg-white/10" />

          <button
            onClick={handleLanguageToggle}
            className="flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
          >
            <IconWorld size={16} />
            {language.toUpperCase()}
          </button>

          <button
            className="lg:hidden text-white/70 hover:text-accent transition-colors"
            onClick={handleMenuOpen}
          >
            <IconMenu2 className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-background z-[60] flex flex-col p-8 transition-all duration-500 lg:hidden ${
        menuOpen ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex justify-between items-center mb-16">
          <span className="font-heading font-bold text-2xl tracking-tighter text-accent">ESMIR.ME</span>
          <button onClick={handleCloseMenu} className="glass p-2 rounded-xl">
            <IconX className="w-8 h-8 text-accent" />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleCloseMenu}
              className="text-4xl font-heading font-bold hover:text-accent transition-colors"
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
