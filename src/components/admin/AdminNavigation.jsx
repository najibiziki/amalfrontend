import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

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

const AdminNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { logout } = useAuth();

  const currentItem =
    navItems.find((item) => location.pathname === item.to) || navItems[0];

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate("/admin/login", { replace: true });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-4 z-40">
      <nav
        className="
          rounded-xl
          border border-[var(--border)]
          bg-[var(--bg-secondary)]
          p-1.5
          shadow-[var(--shadow)]
        "
      >
        <div className="flex w-full items-center">
          {/* Desktop */}
          <div className="hidden w-full items-center sm:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `
                      rounded-lg
                      px-4
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[var(--accent-bg)] text-[var(--text-h)] shadow-sm"
                          : "text-[var(--text)] hover:bg-[var(--bg)] hover:text-[var(--text-h)]"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Logout pushed completely to the right */}
            <button
              type="button"
              onClick={handleLogout}
              className="
                ml-auto
                rounded-lg
                px-4
                py-2.5
                text-sm
                font-medium
                text-red-500
                transition-all
                duration-200
                hover:bg-red-500/10
                hover:text-red-600
                focus:outline-none
                focus:ring-2
                focus:ring-red-500/30
              "
            >
              Déconnexion
            </button>
          </div>

          {/* Mobile */}
          <div ref={menuRef} className="relative w-full sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              aria-expanded={mobileMenuOpen}
              aria-haspopup="listbox"
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-lg
                px-3.5
                py-2.5
                text-sm
                font-medium
                text-[var(--text-h)]
                transition-colors
                duration-200
                hover:bg-[var(--bg)]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--accent)]
                focus:ring-offset-2
                focus:ring-offset-[var(--bg-secondary)]
              "
            >
              <span>{currentItem.label}</span>

              <svg
                className={`
                  h-4
                  w-4
                  text-[var(--text)]
                  transition-transform
                  duration-200
                  ${mobileMenuOpen ? "rotate-180" : ""}
                `}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`
                absolute
                left-0
                right-0
                top-[calc(100%+8px)]
                z-50
                origin-top
                overflow-hidden
                rounded-xl
                border border-[var(--border)]
                bg-[var(--bg-secondary)]
                p-1.5
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
                transition-all
                duration-200
                ${
                  mobileMenuOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
                }
              `}
              role="listbox"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `
                      block
                      rounded-lg
                      px-3.5
                      py-3
                      text-sm
                      font-medium
                      transition-colors
                      duration-200
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

              <button
                type="button"
                onClick={handleLogout}
                className="
                  mt-1
                  block
                  w-full
                  rounded-lg
                  border-t
                  border-[var(--border)]
                  px-3.5
                  py-3
                  text-left
                  text-sm
                  font-medium
                  text-red-500
                  transition-colors
                  duration-200
                  hover:bg-red-500/10
                  hover:text-red-600
                "
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AdminNavigation;
