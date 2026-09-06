import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const AdminNavigation = ({ onAdd }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      label: "Projets",
      to: "/admin/projects",
    },
    {
      label: "Stats",
      to: "/admin/stats",
    },
    {
      label: "Paiement",
      to: "/admin/payment",
    },
  ];

  const currentItem =
    navItems.find((item) => location.pathname === item.to) || navItems[0];

  return (
    <header className="sticky top-4 z-40">
      <div
        className="
          flex items-center justify-between
          gap-3
          rounded-xl
          border border-[var(--border)]
          bg-[var(--bg-secondary)]
          p-2
          shadow-[var(--shadow)]
        "
      >
        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `
                  rounded-lg px-4 py-2.5
                  text-sm font-medium
                  transition-colors
                  ${
                    isActive
                      ? "bg-[var(--accent-bg)] text-[var(--text-h)]"
                      : "text-[var(--text)] hover:bg-[var(--bg)] hover:text-[var(--text-h)]"
                  }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile dropdown */}
        <div className="relative min-w-0 flex-1 sm:hidden">
          {/* Dropdown button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="
              flex w-full items-center justify-between
              rounded-xl
              border border-white/[0.08]
              bg-[#1b1c23]/95
              px-4 py-2.5
              text-sm
              font-medium
              text-[var(--text-h)]
              shadow-[0_10px_30px_rgba(0,0,0,0.2)]
              backdrop-blur-2xl
              transition-all
              duration-200
              hover:bg-[#22232b]
              focus:outline-none
            "
          >
            <span>{currentItem.label}</span>

            <svg
              className={`
                h-4 w-4
                text-[var(--text)]
                transition-transform
                duration-200
                ${mobileMenuOpen ? "rotate-180" : ""}
              `}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* Mobile dropdown menu */}
          <div
            className={`
              absolute left-0 right-0 top-[calc(100%+15px)] z-50
              overflow-hidden
              rounded-xl
              border border-white/[0.08]
              bg-[#1b1c23]/95
              p-0
              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
              backdrop-blur-2xl
              transition-all
              duration-200
              ${
                mobileMenuOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-2 opacity-0"
              }
            `}
          >
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_20%_0%,rgba(192,132,252,0.08),transparent_40%)]
              "
            />

            <div className="relative flex flex-col">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      rounded-xl px-4 py-3.5
                      text-left text-sm font-medium
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
            </div>
          </div>
        </div>

        {/* Add project */}
        <button
          type="button"
          onClick={onAdd}
          className="
            shrink-0
            rounded-lg
            bg-[var(--accent-strong)]
            px-3.5
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:brightness-110
            active:scale-[0.98]
            sm:px-4
          "
        >
          <span className="hidden sm:inline">Ajouter un projet</span>
          <span className="sm:hidden">Ajouter</span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavigation;
