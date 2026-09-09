import { Link } from "react-router-dom";
import AmalLogo from "../common/AmalLogo";
import SupportButton from "../common/SupportButton";

const Footer = ({ onSupport }) => {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/[0.06] bg-[var(--bg-secondary)]">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--accent)]/[0.06] blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/[0.05] blur-[120px]" />

        <div className="absolute right-[8%] top-16 h-72 w-72 rounded-full border border-[var(--accent)]/[0.06]" />

        <div className="absolute right-[11%] top-24 h-56 w-56 rounded-full border border-[var(--accent)]/[0.05]" />

        <div className="absolute right-[14%] top-32 h-40 w-40 rounded-full border border-[var(--accent)]/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5">
        {/* Mission */}
        <div className="border-b border-white/[0.06] py-16 sm:py-20">
          <div className="max-w-3xl">
            <span className="mb-4 inline-flex items-center rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/[0.07] px-3 py-1.5 font-[var(--sans)] text-[length:var(--font-xs)] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              Notre mission
            </span>

            <h2 className="max-w-3xl font-[var(--heading)] text-[length:var(--font-3xl)] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text-h)] sm:text-[length:var(--font-4xl)] lg:text-[length:var(--font-5xl)]">
              Chaque geste peut devenir{" "}
              <span className="text-[var(--accent)]">un nouveau départ.</span>
            </h2>

            <p className="mt-5 max-w-2xl font-[var(--sans)] text-[length:var(--font-sm)] leading-6 text-[var(--text)] sm:text-[length:var(--font-base)]">
              Ensemble, nous œuvrons aux côtés des personnes et des communautés
              pour apporter aide, dignité et espoir à celles et ceux qui en ont
              besoin.
            </p>

            <SupportButton onClick={onSupport} className="mt-7" />
          </div>
        </div>

        {/* Main footer */}
        <section className="border-b border-white/[0.06] py-14 sm:py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-16">
            {/* Brand */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-3"
              >
                <AmalLogo className="h-11 w-11 transition-transform duration-300 group-hover:scale-105" />

                <span
                  className="font-[var(--heading)] text-[length:var(--font-lg)] font-semibold text-[var(--text-h)] transition-colors duration-200 group-hover:text-[var(--accent)]"
                  dir="rtl"
                >
                  أمل
                </span>
              </Link>

              <p className="mt-4 w-full max-w-sm text-center font-[var(--sans)] text-[length:var(--font-sm)] leading-6 text-[var(--text)] sm:text-left">
                Une association engagée aux côtés des personnes et des
                communautés pour créer des changements durables et solidaires.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center sm:text-left">
              <div className="mb-6">
                <h3 className="font-[var(--heading)] text-[length:var(--font-xs)] font-semibold uppercase tracking-[0.18em] text-[var(--text-h)]">
                  Navigation
                </h3>

                <div className="mx-auto mt-3 h-px w-8 bg-[var(--accent)]/60 sm:mx-0 sm:w-10" />
              </div>

              <nav className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="font-[var(--sans)] text-[length:var(--font-sm)] text-[var(--text)] transition-all duration-200 hover:text-[var(--accent)] sm:hover:translate-x-1"
                >
                  Accueil
                </Link>

                <Link
                  to="/about"
                  className="font-[var(--sans)] text-[length:var(--font-sm)] text-[var(--text)] transition-all duration-200 hover:text-[var(--accent)] sm:hover:translate-x-1"
                >
                  À propos
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <div className="mb-6">
                <h3 className="font-[var(--heading)] text-[length:var(--font-xs)] font-semibold uppercase tracking-[0.18em] text-[var(--text-h)]">
                  Contact
                </h3>

                <div className="mx-auto mt-3 h-px w-8 bg-[var(--accent)]/60 sm:mx-0 sm:w-10" />
              </div>

              <div className="flex flex-col gap-3 font-[var(--sans)] text-[length:var(--font-sm)] text-[var(--text)]">
                <span>Maroc</span>

                <a
                  href="mailto:contact@example.org"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  contact@example.org
                </a>

                <a
                  href="tel:+212000000000"
                  className="transition-colors hover:text-[var(--accent)]"
                >
                  +212 00 00 00 00
                </a>
              </div>

              {/* Social media */}
              <div className="mt-5 flex items-center justify-center gap-2 sm:justify-start">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/212XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.08] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.93-.27-.1-.47-.15-.67.15-.2.29-.77.93-.94 1.12-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.2-.56-.34ZM12.05 2a9.95 9.95 0 0 0-8.49 15.15L2 22l4.99-1.52A9.95 9.95 0 1 0 12.05 2Zm0 18.18c-1.61 0-3.18-.43-4.55-1.25l-.33-.2-2.96.9.94-2.88-.22-.34a8.2 8.2 0 1 1 7.12 3.77Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/YOUR_USERNAME/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.08] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-none stroke-current"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      className="fill-current stroke-none"
                    />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/YOUR_PAGE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.08] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M13.5 21v-8h2.75l.42-3h-3.17V8.08c0-.87.24-1.46 1.5-1.46h1.78V3.94c-.31-.04-1.38-.14-2.63-.14-2.6 0-4.38 1.59-4.38 4.51V10H7.5v3h2.27v8h3.73Z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/YOUR_COMPANY/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-[var(--text)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/[0.08] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.5H3.3V9Zm6.2 0h3.6v1.57h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.72v6.16h-3.75v-5.46c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.41-2.09 2.87v5.56H9.5V9Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom */}
        <div className="flex flex-col gap-3 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-[var(--sans)] text-[length:var(--font-xs)] text-[var(--text)]">
            © {new Date().getFullYear()} Association. Tous droits réservés.
          </p>

          <p className="font-[var(--sans)] text-[length:var(--font-xs)] text-[var(--text)]/60">
            Ensemble, pour un avenir meilleur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
