import Container from "../common/Container";
import SupportButton from "../common/SupportButton";

const AboutCTA = ({ onSupport }) => {
  return (
    <section className="bg-[var(--bg)] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Construisons ensemble
          </p>

          <h2 className="font-[var(--heading)] text-[length:var(--font-3xl)] font-bold tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-4xl)]">
            Chaque geste compte.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl font-[var(--sans)] text-[length:var(--font-lg)] leading-8 text-[var(--text)]">
            Une association grandit grâce aux personnes qui donnent de leur
            temps, partagent leurs compétences et choisissent d’agir pour les
            autres.
          </p>

          <div className="mt-10 flex justify-center">
            <SupportButton
              onClick={onSupport}
              className="px-6 py-3 text-base shadow-[0_12px_35px_rgba(109,40,169,0.28)]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;
