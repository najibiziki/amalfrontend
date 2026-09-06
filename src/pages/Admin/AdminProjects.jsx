import { useEffect, useState } from "react";

import api from "../../services/api";
import ProjectForm from "../../components/admin/ProjectForm";
import ProjectTable from "../../components/admin/ProjectTable";

const AdminProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await api("/api/projects");

      setProjects(data.projects || []);
    } catch (error) {
      setError(error.message || "Impossible de charger les projets.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreate = async (formData) => {
    try {
      setSaving(true);
      setError("");

      const data = await api("/api/projects", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setProjects((previous) => [data.project, ...previous]);
      handleCancel();
    } catch (error) {
      setError(error.message || "Impossible de créer le projet.");
    } finally {
      setSaving(false);
    }
  };

  const handleUpdate = async (formData) => {
    try {
      setSaving(true);
      setError("");

      const data = await api(`/api/projects/${selectedProject._id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });

      setProjects((previous) =>
        previous.map((project) =>
          project._id === selectedProject._id ? data.project : project,
        ),
      );

      handleCancel();
    } catch (error) {
      setError(error.message || "Impossible de modifier le projet.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer ce projet ?",
    );

    if (!confirmed) return;

    try {
      setError("");

      await api(`/api/projects/${id}`, {
        method: "DELETE",
      });

      setProjects((previous) =>
        previous.filter((project) => project._id !== id),
      );
    } catch (error) {
      setError(error.message || "Impossible de supprimer le projet.");
    }
  };

  const handleAdd = () => {
    setSelectedProject(null);
    setShowForm(true);
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedProject(null);
    setShowForm(false);
  };

  return (
    <section className="pt-8 sm:pt-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-[var(--text-h)]
              sm:text-3xl
            "
          >
            Projets
          </h1>

          <p className="mt-1.5 text-sm text-[var(--text)] sm:text-base">
            Gérez les projets affichés sur votre site.
          </p>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-[var(--accent-strong)]
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            shadow-[var(--shadow)]
            transition
            hover:brightness-110
            active:scale-[0.98]
          "
        >
          Ajouter un projet
        </button>
      </div>

      {error && (
        <div
          className="
            mb-6
            rounded-lg
            border border-red-400/20
            bg-red-500/10
            px-4
            py-3
            text-sm
            text-red-400
          "
        >
          {error}
        </div>
      )}

      {loading ? (
        <div
          className="
            rounded-xl
            border border-[var(--border)]
            bg-[var(--bg-secondary)]
            px-4
            py-14
            text-center
          "
        >
          <div
            className="
              mx-auto
              h-7
              w-7
              animate-spin
              rounded-full
              border-2
              border-[var(--accent)]
              border-t-transparent
            "
          />

          <p className="mt-4 text-sm text-[var(--text)]">
            Chargement des projets...
          </p>
        </div>
      ) : (
        <ProjectTable
          projects={projects}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      {showForm && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCancel();
            }
          }}
        >
          <div
            className="
              modal
              max-h-[90vh]
              w-full
              max-w-2xl
              overflow-y-auto
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--bg-secondary)]
              shadow-2xl
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--border)]
                px-5
                py-4
              "
            >
              <div>
                <h2 className="text-lg font-semibold text-[var(--text-h)]">
                  {selectedProject ? "Modifier le projet" : "Ajouter un projet"}
                </h2>

                <p className="mt-1 text-sm text-[var(--text)]">
                  {selectedProject
                    ? "Modifiez les informations du projet."
                    : "Ajoutez un nouveau projet à votre site."}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCancel}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  text-[var(--text)]
                  transition
                  hover:bg-[var(--bg)]
                  hover:text-[var(--text-h)]
                "
                aria-label="Fermer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              </button>
            </div>

            <div className="p-5 sm:p-6">
              <ProjectForm
                project={selectedProject}
                onSubmit={selectedProject ? handleUpdate : handleCreate}
                onCancel={handleCancel}
                loading={saving}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdminProjects;
