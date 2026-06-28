import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" data-testid="navbar-logo" className="flex items-center gap-1">
            <span
              className={`font-black text-xl md:text-2xl tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#0A1128]" : "text-white"
              }`}
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              JeufJeul
            </span>
            <span className="font-black text-xl md:text-2xl text-[#2563EB] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              TECH
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" data-testid="nav-links">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#2563EB] ${
                    isActive
                      ? "text-[#2563EB]"
                      : scrolled
                      ? "text-[#475569]"
                      : "text-white/90"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="navbar-cta"
              className="flex items-center gap-2 bg-[#2563EB] text-white text-sm font-bold px-5 py-2.5 rounded-md hover:bg-[#1D4ED8] transition-colors duration-200"
            >
              Devis Gratuit
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-[#0A1128]" : "text-white"
            }`}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-[#E2E8F0] shadow-lg md:hidden"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#2563EB] bg-blue-50"
                        : "text-[#475569] hover:text-[#0A1128] hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#2563EB] text-white font-bold py-3 rounded-md hover:bg-[#1D4ED8] transition-colors"
                >
                  Devis Gratuit
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
