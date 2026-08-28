import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleOpenProject = () => {
    navigate(`/projets/${project._id}`);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow)]">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/90 px-3 py-1.5 font-[var(--sans)] text-[length:var(--font-xs)] font-semibold text-[var(--text-h)] backdrop-blur-sm">
          {project.category}
        </div>

        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[var(--accent)] text-[#16171d] opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-[var(--heading)] text-[length:var(--font-xl)] font-bold text-[var(--text-h)]">
          {project.title}
        </h3>

        <p className="mt-3 font-[var(--sans)] text-[length:var(--font-sm)] leading-6 text-[var(--text)]">
          {project.description}
        </p>

        <button
          type="button"
          onClick={handleOpenProject}
          className="mt-5 font-[var(--sans)] text-[length:var(--font-sm)] font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
        >
          Découvrir le projet →
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
