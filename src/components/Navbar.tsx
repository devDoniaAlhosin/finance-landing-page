import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Instructor", href: "#instructor" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <nav 
        className={`
          navbar-glass px-2 py-2 rounded-full flex items-center gap-1
          transition-all duration-500
          ${isScrolled ? 'navbar-glass-scrolled' : ''}
        `}
      >
        {/* Logo */}
        <a href="#" className="px-4 py-2 font-semibold text-foreground text-sm tracking-tight">
          Finance<span className="text-gradient">Academy</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#enroll">
          <Button size="sm" className="hidden md:flex nav-cta ml-2 rounded-full">
            Enroll Now
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden mt-2 navbar-glass rounded-2xl p-4 animate-fade-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-mobile"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#enroll" onClick={() => setIsMobileOpen(false)}>
              <Button size="sm" className="nav-cta mt-2 w-full rounded-full">
                Enroll Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
