import { HeartHandshake, Users, HandHeart } from "lucide-react";
import Container from "../common/Container";

const values = [
  {
    icon: HeartHandshake,
    title: "Solidarité",
    description:
      "Nous croyons que personne ne devrait avoir à traverser les moments difficiles seul.",
  },
  {
    icon: Users,
    title: "Communauté",
    description:
      "Le véritable changement commence lorsque les personnes se rassemblent autour d'une même cause.",
  },
  {
    icon: HandHeart,
    title: "Action",
    description:
      "Nous transformons les bonnes intentions en actions concrètes qui améliorent des vies.",
  },
];

const Mission = () => {
  return (
    <section className="bg-[var(--bg-secondary)] py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                alt="Membres de la communauté réunis"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-7 -right-4 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-[var(--shadow)] sm:right-8">
              <p className="text-3xl font-bold text-[var(--accent)]">01</p>
              <p className="mt-1 text-sm font-medium text-[var(--text)]">
                Les personnes d'abord.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Pourquoi nous existons
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[var(--text-h)] sm:text-5xl">
              Nous croyons que le changement commence avec les personnes.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[var(--text)]">
              Notre mission est simple : accompagner les personnes, renforcer
              les communautés et créer des opportunités pour un avenir meilleur.
            </p>

            <div className="mt-10 space-y-7">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div key={value.title} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--accent)] shadow-sm">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[var(--text-h)]">
                        {value.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[var(--text)]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
