const AmalLogo = ({ className = "h-10 w-10" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="أمل"
    >
      <defs>
        {/* Soft ambient glow */}
        <radialGradient id="amalAura" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>

        {/* Main elegant gradient */}
        <linearGradient
          id="amalMain"
          x1="14"
          y1="52"
          x2="50"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent)" stopOpacity="0.65" />
          <stop offset="0.5" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.8" />
        </linearGradient>

        {/* Text gradient */}
        <linearGradient
          id="amalText"
          x1="20"
          y1="40"
          x2="44"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <circle cx="32" cy="32" r="29" fill="url(#amalAura)" />

      {/* Elegant outer arc — intentionally incomplete */}
      <path
        d="M12.5 39.5
           C9.8 31.8 11.8 23.3 17.7 17.3
           C23.7 11.2 32.4 9.2 40.2 12
           C47.7 14.7 52.8 21.5 53.4 29.5"
        stroke="url(#amalMain)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Second flowing arc */}
      <path
        d="M51.5 35
           C49.7 44.2 42.1 51.4 32.8 52.4
           C23.8 53.4 15.5 48.7 12.1 40.8"
        stroke="var(--accent)"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Rising sun */}
      <path
        d="M21 31
           C21 24.8 25.9 20 32 20
           C38.1 20 43 24.8 43 31"
        stroke="var(--accent)"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Sun center */}
      <circle cx="32" cy="20" r="2.1" fill="var(--accent)" opacity="0.9" />

      {/* Minimal sun rays */}
      <path
        d="M32 15.5V12.5"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.55"
      />

      <path
        d="M25 17L22.9 14.9"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />

      <path
        d="M39 17L41.1 14.9"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Arabic association name */}
      <text
        x="32"
        y="38.5"
        textAnchor="middle"
        direction="rtl"
        unicodeBidi="bidi-override"
        fill="url(#amalText)"
        fontSize="16"
        fontWeight="700"
        fontFamily="Arial, 'Noto Sans Arabic', sans-serif"
        letterSpacing="0"
      >
        أمل
      </text>

      {/* Growing stem */}
      <path
        d="M32 41
           C32 43.5 31.5 45.5 30.2 47.3"
        stroke="var(--accent)"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.65"
      />

      {/* Left leaf */}
      <path
        d="M30.7 44.8
           C27.4 42.7 24.8 43.1 22.7 45.4
           C25.6 46.4 28.3 46.2 30.7 44.8Z"
        fill="var(--accent)"
        opacity="0.55"
      />

      {/* Right leaf */}
      <path
        d="M31.1 46
           C34.2 43.7 37 43.7 39.5 45.5
           C36.7 47 33.9 47.2 31.1 46Z"
        fill="var(--accent)"
        opacity="0.4"
      />

      {/* Small accent dot */}
      <circle cx="48.5" cy="18" r="1.2" fill="var(--accent)" opacity="0.45" />
    </svg>
  );
};

export default AmalLogo;
