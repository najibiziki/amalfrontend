import { ArrowRight, Heart } from "lucide-react";
import Container from "../common/Container";

const CallToAction = () => {
  return (
    <section id="support" className="bg-[var(--bg)] py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--bg-secondary)] border border-[var(--border)] px-7 py-16 text-center sm:px-12 lg:px-20">
          <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[var(--accent)]/10" />
          <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-[var(--accent-strong)]/10" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-bg)] text-[var(--accent)]">
              <Heart size={24} fill="currentColor" />
            </div>

            <h2 className="mt-7 text-4xl font-bold tracking-tight text-[var(--text-h)] sm:text-5xl">
              Le changement commence avec
              <span className="text-[var(--text)]"> une personne.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[var(--text)]">
              Que vous soyez bénévole, donateur, que vous partagiez notre
              histoire ou que vous souhaitiez simplement aider — vous pouvez
              faire partie de quelque chose de plus grand.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-[#16171d] transition hover:bg-[var(--accent-strong)]"
              >
                Agir à nos côtés
                <ArrowRight size={17} />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[var(--accent-border)] px-6 py-3.5 text-sm font-bold text-[var(--text-h)] transition hover:bg-[var(--accent-bg)]"
              >
                Découvrir nos projets
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
