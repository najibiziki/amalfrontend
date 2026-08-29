import { HeartHandshake, ShieldCheck, Users, Sparkles } from "lucide-react";
import Container from "../common/Container";

const values = [
  {
    icon: HeartHandshake,
    title: "Solidarité",
    description:
      "Nous croyons que nous sommes plus forts lorsque nous nous soutenons les uns les autres.",
  },
  {
    icon: ShieldCheck,
    title: "Dignité",
    description:
      "Chaque personne mérite d’être considérée avec respect, quelles que soient sa situation ou son histoire.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Nous souhaitons rester proches des réalités du terrain et des personnes que nous accompagnons.",
  },
  {
    icon: Sparkles,
    title: "Engagement",
    description:
      "Nous croyons aux actions sincères, constantes et responsables qui peuvent créer un changement durable.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Nos valeurs
          </p>

          <h2 className="font-[var(--heading)] text-[length:var(--font-3xl)] font-bold tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-4xl)]">
            Ce qui guide notre manière d’agir.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)]">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 font-[var(--heading)] text-[length:var(--font-xl)] font-semibold text-[var(--text-h)]">
                  {value.title}
                </h3>

                <p className="mt-3 font-[var(--sans)] text-[length:var(--font-base)] leading-7 text-[var(--text)]">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutValues;
