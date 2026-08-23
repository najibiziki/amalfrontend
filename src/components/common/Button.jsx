const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--color-primary)] text-white hover:opacity-90 hover:-translate-y-0.5",
    outline:
      "border border-gray-200 bg-white text-gray-900 hover:border-gray-300 hover:bg-gray-50",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
