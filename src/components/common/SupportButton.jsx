const SupportButton = ({ children = "soutenir", className = "", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group
        inline-flex items-center gap-2
        rounded-xl
        border border-purple-300/10
        bg-[#6d28a9]
        px-4 py-2
        text-[12px] font-semibold
        text-white
        shadow-[0_8px_25px_rgba(109,40,169,0.22)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-purple-200/20
        hover:bg-[#7e2dbb]
        hover:shadow-[0_10px_30px_rgba(109,40,169,0.3)]
        active:translate-y-0
        ${className}
      `}
    >
      <span>{children}</span>

      <span
        className="
          flex h-5 w-5 items-center justify-center
          rounded-full
          bg-white/[0.08]
          transition-all duration-300
          group-hover:bg-white/[0.14]
          group-hover:scale-105
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="
            h-3 w-3
            fill-none
            stroke-current
            transition-all duration-300
            group-hover:fill-white
          "
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20.8 8.6c0 5.5-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
        </svg>
      </span>
    </button>
  );
};

export default SupportButton;
