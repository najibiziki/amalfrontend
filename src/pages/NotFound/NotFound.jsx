import React from "react";

function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center px-6">
      <div className="relative w-full max-w-2xl text-center">
        {/* Decorative glow */}
        <div className="absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-3xl" />

        <div className="relative z-10">
          {/* 404 */}
          <div className="mb-6">
            <span className="font-mono text-[clamp(7rem,20vw,12rem)] font-bold leading-none tracking-tighter text-transparent bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] bg-clip-text">
              404
            </span>
          </div>

          {/* Content */}
          <h1 className="mb-4 text-2xl font-bold tracking-tight text-[var(--text-h)] sm:text-3xl">
            Page not found
          </h1>

          <p className="mx-auto mb-8 max-w-md text-base leading-7 text-[var(--text)]">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Actions */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--accent-strong)] px-5 py-2.5 text-sm font-semibold text-[#16171d] shadow-[var(--shadow)] transition-all duration-200 hover:bg-[var(--accent-strong)] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l9-9 9 9M5 10v10h14V10"
                />
              </svg>
              Back to home
            </a>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)] px-5 py-2.5 text-sm font-medium text-[var(--text-h)] transition-all duration-200 hover:border-[var(--accent-border)] hover:bg-[var(--accent-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
            >
              Go back
            </button>
          </div>

          {/* Small status */}
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1.5 font-mono text-xs text-[var(--text)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
            <span>404 / NOT_FOUND</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
