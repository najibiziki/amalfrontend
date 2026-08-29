import Container from "../common/Container";

const AboutMission = () => {
  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Notre mission
            </p>

            <h2 className="font-[var(--heading)] text-[length:var(--font-3xl)] font-bold leading-tight tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-4xl)]">
              Le changement commence lorsque nous décidons d’agir ensemble.
            </h2>
          </div>

          <div>
            <p className="font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-[var(--text)]">
              Notre mission est de soutenir les personnes et les communautés qui
              en ont besoin, en favorisant l’entraide, la solidarité et
              l’engagement.
            </p>

            <p className="mt-5 font-[var(--sans)] text-[length:var(--font-base)] leading-7 text-[var(--text)]">
              Nous voulons transformer les bonnes intentions en actions utiles
              et durables, tout en plaçant les personnes au cœur de chacune de
              nos initiatives.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Écouter",
              text: "Comprendre les réalités et les besoins avant d’agir.",
            },
            {
              number: "02",
              title: "Accompagner",
              text: "Être présents avec respect, bienveillance et attention.",
            },
            {
              number: "03",
              title: "Agir",
              text: "Mettre en place des actions concrètes et utiles.",
            },
            {
              number: "04",
              title: "Construire",
              text: "Créer avec les communautés des solutions durables.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
            >
              <span className="font-[var(--mono)] text-[length:var(--font-sm)] text-[var(--accent)]">
                {item.number}
              </span>

              <h3 className="mt-5 font-[var(--heading)] text-[length:var(--font-xl)] font-semibold text-[var(--text-h)]">
                {item.title}
              </h3>

              <p className="mt-3 font-[var(--sans)] text-[length:var(--font-sm)] leading-6 text-[var(--text)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutMission;
