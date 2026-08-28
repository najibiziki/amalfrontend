import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";

const Hero = ({ onSupport }) => {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)]">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-[var(--accent-strong)]/10 blur-3xl" />

      <Container>
        <div className="relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-[var(--accent-bg)] px-4 py-2 font-[var(--sans)] text-[length:var(--font-sm)] font-medium text-[var(--accent)] backdrop-blur-sm">
              <Sparkles size={16} />

              <span>Créons le changement, ensemble</span>

              <span
                dir="rtl"
                className="border-l border-[var(--accent-border)] pl-2 font-medium"
              >
                أمل
              </span>
            </div>

            <h1 className="font-[var(--heading)] text-[length:var(--font-3xl)] font-bold leading-[1.05] tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-4xl)] lg:text-[length:var(--font-5xl)]">
              Chaque personne
              <span className="block text-[var(--text)]">
                mérite une chance.
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--accent)]/50" />

              <p
                dir="rtl"
                className="font-[var(--sans)] text-[length:var(--font-lg)] font-medium text-[var(--accent)]"
              >
                لأن كل إنسان يستحق فرصة
              </p>
            </div>

            <p className="mt-5 max-w-xl font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-[var(--text)] sm:text-[length:var(--font-xl)]">
              Nous croyons que lorsque les personnes se rassemblent, de petits
              gestes de solidarité peuvent créer un changement durable dans les
              communautés.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                href="#projects"
                className="group bg-[var(--accent)] text-[#16171d] hover:bg-[var(--accent-strong)]"
              >
                Découvrir nos actions
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["A", "M", "S", "N"].map((letter) => (
                  <div
                    key={letter}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--bg)] bg-[var(--bg-secondary)] font-[var(--sans)] text-[length:var(--font-sm)] font-semibold text-[var(--accent)]"
                  >
                    {letter}
                  </div>
                ))}
              </div>

              <div>
                <p className="font-[var(--sans)] text-[length:var(--font-sm)] text-[var(--text)]">
                  Rejoignez une communauté grandissante
                </p>

                <p className="font-[var(--sans)] text-[length:var(--font-base)] font-semibold text-[var(--text-h)]">
                  qui agit pour un avenir meilleur.
                </p>

                <p
                  dir="rtl"
                  className="mt-1 font-[var(--sans)] text-[length:var(--font-xs)] text-[var(--accent)]"
                >
                  يدًا بيد، نصنع الأمل
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="relative rotate-2 overflow-hidden rounded-[2rem] bg-[var(--bg-secondary)] p-3 shadow-[var(--shadow)] transition-transform duration-700 hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85"
                alt="Des personnes réunies"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]/95 p-5 shadow-[var(--shadow)] backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
                    <Heart size={21} fill="currentColor" />
                  </div>

                  <div>
                    <p className="font-[var(--sans)] text-[length:var(--font-sm)] text-[var(--text)]">
                      Ensemble, nous avons
                    </p>

                    <p className="font-[var(--heading)] text-[length:var(--font-xl)] font-bold text-[var(--text-h)]">
                      fait la différence.
                    </p>

                    <p
                      dir="rtl"
                      className="mt-1 font-[var(--sans)] text-[length:var(--font-sm)] font-medium text-[var(--accent)]"
                    >
                      معًا نصنع الفرق
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              dir="rtl"
              className="absolute -bottom-8 -left-4 z-10 font-[var(--heading)] text-[length:var(--font-2xl)] font-bold text-[var(--accent)]/10 sm:-left-8 sm:text-[length:var(--font-3xl)]"
            >
              أمل
            </div>

            <div className="absolute -bottom-5 -right-5 -z-0 h-28 w-28 rounded-2xl bg-[var(--accent)]/10" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
