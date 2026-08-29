const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[var(--accent-strong)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32">
        <div className="max-w-4xl">
          <p className="mb-5 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            À propos de nous
          </p>

          <h1 className="font-[var(--heading)] text-[length:var(--font-4xl)] font-bold leading-[1.05] tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-5xl)] lg:text-6xl">
            Donner du sens
            <span className="block text-[var(--text)]">à la solidarité.</span>
          </h1>

          <p className="mt-7 max-w-2xl font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-[var(--text)]">
            Nous croyons que chaque personne mérite d’être écoutée, respectée et
            accompagnée. À travers Amal, nous souhaitons faire de la solidarité
            une action concrète.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--accent)]/60" />

            <p
              dir="rtl"
              className="font-[var(--sans)] text-[length:var(--font-base)] font-medium text-[var(--accent)]"
            >
              لأن كل إنسان يستحق فرصة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
