import Container from "../common/Container";

const AboutAmal = () => {
  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] px-7 py-16 sm:px-12 lg:px-20">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p
                dir="rtl"
                className="font-[var(--heading)] text-7xl font-bold text-[var(--accent)] sm:text-8xl"
              >
                أمل
              </p>

              <p className="mt-3 font-[var(--sans)] text-[length:var(--font-sm)] uppercase tracking-[0.2em] text-[var(--text)]">
                Amal
              </p>
            </div>

            <div>
              <p className="mb-4 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Pourquoi « Amal » ?
              </p>

              <h2 className="font-[var(--heading)] text-[length:var(--font-3xl)] font-bold tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-4xl)]">
                L’espoir comme raison d’agir.
              </h2>

              <p className="mt-5 font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-[var(--text)]">
                « Amal » signifie « espoir » en arabe. Ce nom représente ce que
                nous souhaitons transmettre : l’idée qu’une situation peut
                évoluer, qu’une personne peut être accompagnée et qu’un avenir
                différent peut être construit.
              </p>

              <p className="mt-5 font-[var(--sans)] text-[length:var(--font-base)] leading-7 text-[var(--text)]">
                L’espoir n’est pas seulement une idée. C’est aussi une raison
                d’agir.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutAmal;
