const SectionTitle = ({ eyebrow, title, description, className = "" }) => {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
