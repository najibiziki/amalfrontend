import Container from "../common/Container";
import ProjectCard from "./ProjectCard";
import useProjects from "../../hooks/useProjects";

const FeaturedProjects = () => {
  const { projects, loading, error } = useProjects();

  return (
    <section id="projects" className="bg-[var(--bg)] py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-[var(--sans)] text-[length:var(--font-sm)] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              Nos actions
            </p>

            <h2 className="mt-4 font-[var(--heading)] text-[length:var(--font-2xl)] font-bold tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-3xl)]">
              Des projets qui ont
              <span className="text-[var(--text)]"> du sens.</span>
            </h2>
          </div>
        </div>

        {loading && (
          <p className="mt-12 font-[var(--sans)] text-[length:var(--font-sm)] text-white/50">
            Chargement des projets...
          </p>
        )}

        {error && (
          <p className="mt-12 font-[var(--sans)] text-[length:var(--font-sm)] text-red-400">
            Impossible de charger les projets.
          </p>
        )}

        {!loading && !error && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
