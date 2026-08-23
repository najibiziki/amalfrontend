import { NavLink } from "react-router-dom";
import SupportButton from "../common/SupportButton";

const navItems = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/about" },
];

const MobileMenu = ({ isOpen, onClose, onSupport }) => {
  return (
    <div
      className={`
        absolute left-3 right-3 top-[88px] z-40
        transition-all duration-300 sm:left-5 sm:right-5
        md:hidden
        ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }
      `}
    >
      <div
        className="
          overflow-hidden rounded-2xl
          border border-white/[0.08]
          bg-[#1b1c23]/95
          p-2
          shadow-[0_20px_50px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
        "
      >
        {/* Subtle glow */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(circle_at_20%_0%,rgba(192,132,252,0.08),transparent_40%)]
          "
        />

        <nav className="relative flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `
                  rounded-xl px-4 py-3.5
                  text-sm font-medium
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-white/[0.08] text-[var(--text-h)]"
                      : "text-[var(--text)] hover:bg-white/[0.05] hover:text-[var(--text-h)]"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="my-2 border-t border-white/[0.07]" />

          <SupportButton
            onClick={() => {
              onClose();
              onSupport();
            }}
            className="w-full justify-center"
          >
            Nous soutenir
          </SupportButton>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
