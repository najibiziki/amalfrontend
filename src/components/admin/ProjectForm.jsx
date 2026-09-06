import { useEffect, useState } from "react";

const emptyProject = {
  title: "",
  description: "",
  image: "",
  category: "",
};

const ProjectForm = ({ project, onSubmit, onCancel, loading }) => {
  const [form, setForm] = useState(emptyProject);

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title || "",
        description: project.description || "",
        image: project.image || "",
        category: project.category || "",
      });
    } else {
      setForm(emptyProject);
    }
  }, [project]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm sm:p-6 lg:p-8"
    >
      <div className="mb-6 border-b border-gray-100 pb-5">
        <p className="mt-1 text-sm text-gray-500">
          {project
            ? "Modifiez les informations de ce projet."
            : "Ajoutez un nouveau projet à votre site."}
        </p>
      </div>

      <div className="grid gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Titre
          </label>

          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Catégorie
          </label>

          <input
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            URL de l'image
          </label>

          <input
            id="image"
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full min-w-0 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={5}
            required
            className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        {project && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="w-full rounded-xl bg-gray-100 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 disabled:opacity-60 sm:w-auto"
          >
            Annuler
          </button>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#6d28a9] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#7e2dbb] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Enregistrement..." : project ? "Enregistrer" : "Ajouter"}
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
