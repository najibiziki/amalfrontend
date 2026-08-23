import Container from "../common/Container";

const stats = [
  {
    number: "12.5K+",
    label: "Personnes accompagnées",
  },
  {
    number: "48",
    label: "Projets réalisés",
  },
  {
    number: "320+",
    label: "Bénévoles actifs",
  },
  {
    number: "14",
    label: "Communautés accompagnées",
  },
];

const Impact = () => {
  return (
    <section className="bg-[var(--bg)] py-20">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Notre impact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-h)] sm:text-4xl">
            Les chiffres sont importants.
            <span className="block text-[var(--text)]">
              Mais ce sont les personnes qui comptent.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-[var(--bg-secondary)] p-7 transition-colors duration-300 hover:bg-[var(--accent)]"
            >
              <p className="text-4xl font-bold tracking-tight text-[var(--text-h)] transition-colors group-hover:text-[#16171d] sm:text-5xl">
                {stat.number}
              </p>

              <p className="mt-3 text-sm leading-5 text-[var(--text)] transition-colors group-hover:text-[#16171d]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Impact;
