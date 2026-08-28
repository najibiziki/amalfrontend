import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import AmalLogo from "../common/AmalLogo";
import SupportButton from "../common/SupportButton";
const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/about" },
];

const Navbar = ({ onSupport }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative flex min-h-[70px] items-center
            rounded-2xl
            border border-white/[0.08]
            bg-[var(--bg)]/80
            px-3
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            backdrop-blur-2xl
            sm:px-4
            lg:px-5
          "
        >
          {/* Glow */}
          <div
            className="
              pointer-events-none absolute inset-0 -z-10 rounded-2xl
              bg-[radial-gradient(circle_at_20%_0%,rgba(170,59,255,0.12),transparent_35%)]
            "
          />

          {/* Logo */}
          <Link
            to="/"
            className="
              group flex shrink-0 items-center
              transition-transform duration-300
              hover:scale-[1.03]
            "
          >
            <div
              className="
                flex h-11 w-11 items-center justify-center
                overflow-hidden rounded-xl
                border border-[var(--accent-strong)]/30
                bg-[var(--accent-strong)]/10
                transition-all duration-300
                group-hover:border-[var(--accent-strong)]/60
              "
            >
              <AmalLogo className="h-9 w-9" />
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `
                  rounded-lg px-3.5 py-2.5
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[var(--accent-bg)] text-[var(--text-h)]"
                      : "text-[var(--text)] hover:bg-white/[0.04] hover:text-[var(--text-h)]"
                  }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}

            <SupportButton onClick={onSupport} className="ml-3" />
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              ml-auto flex h-10 w-10 items-center justify-center
              rounded-xl
              border border-white/[0.08]
              bg-white/[0.04]
              text-[var(--text-h)]
              transition-all duration-300
              hover:bg-[var(--accent-bg)]
              md:hidden
            "
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`h-0.5 w-3 self-end rounded-full bg-current ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onSupport={onSupport}
        />
      </div>
    </header>
  );
};

export default Navbar;
