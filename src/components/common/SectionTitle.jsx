const SectionTitle = ({ eyebrow, title, description, className = "" }) => {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-[var(--sans)] text-[length:var(--font-sm)] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-[var(--heading)] text-[length:var(--font-2xl)] font-bold tracking-tight text-gray-900 sm:text-[length:var(--font-3xl)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
