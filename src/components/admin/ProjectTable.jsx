const ProjectMedia = ({ project, size = "small" }) => {
  const imageClass =
    size === "large"
      ? "h-20 w-20 rounded-xl object-cover"
      : "h-12 w-16 shrink-0 rounded-lg object-cover";

  const containerClass = size === "large" ? "h-20 w-20" : "h-12 w-16 shrink-0";

  const placeholderClass =
    size === "large"
      ? "flex h-20 w-20 items-center justify-center rounded-xl bg-purple-50 text-2xl"
      : "flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-purple-50";

  return (
    <div className={containerClass}>
      {project.image ? (
        <img src={project.image} alt="" className={imageClass} />
      ) : (
        <div className={placeholderClass}>📁</div>
      )}

      {size !== "table" && project.category && (
        <div className="mt-2 w-full text-center">
          <span
            className={`
              inline-block
              max-w-full
              break-words
              rounded-full
              bg-purple-50
              px-2
              py-1
              text-[10px]
              font-semibold
              leading-tight
              text-purple-700
              ${size === "large" ? "text-[9px]" : ""}
            `}
          >
            {project.category}
          </span>
        </div>
      )}
    </div>
  );
};

const ProjectActions = ({ project, onEdit, onDelete, mobile = false }) => {
  return (
    <div
      className={
        mobile
          ? "grid grid-cols-2 gap-2 border-t border-gray-100 bg-gray-50/70 p-3"
          : "flex justify-end gap-2"
      }
    >
      <button
        type="button"
        onClick={() => onEdit(project)}
        className={
          mobile
            ? "rounded-xl bg-white px-3 py-2.5 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-inset ring-gray-200 transition hover:bg-gray-50"
            : "whitespace-nowrap rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
        }
      >
        Modifier
      </button>

      <button
        type="button"
        onClick={() => onDelete(project._id)}
        className={
          mobile
            ? "rounded-xl bg-red-50 px-3 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
            : "whitespace-nowrap rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
        }
      >
        Supprimer
      </button>
    </div>
  );
};

const ProjectTable = ({ projects, onEdit, onDelete }) => {
  if (!projects.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-10 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-xl">
          📁
        </div>

        <p className="mt-4 font-semibold text-gray-700">
          Aucun projet pour le moment.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Ajoutez votre premier projet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-3 md:hidden">
        {projects.map((project) => (
          <article
            key={project._id || project.id}
            className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
          >
            <div className="flex gap-3 p-4">
              <ProjectMedia project={project} size="large" />

              <div className="min-w-0 flex-1">
                <h3 className="break-words text-sm font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-500">
                  {project.description}
                </p>
              </div>
            </div>

            <ProjectActions
              project={project}
              onEdit={onEdit}
              onDelete={onDelete}
              mobile
            />
          </article>
        ))}
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="w-[55%] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Projet
                </th>

                <th className="w-[20%] px-5 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Catégorie
                </th>

                <th className="w-[25%] px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {projects.map((project) => (
                <tr
                  key={project._id || project.id}
                  className="transition hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex min-w-0 items-center gap-4">
                      <ProjectMedia project={project} size="table" />

                      <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900">
                          {project.title}
                        </p>

                        <p className="mt-1 truncate text-sm text-gray-500">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex max-w-full break-words rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                      {project.category || "—"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <ProjectActions
                      project={project}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="hidden overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:block lg:hidden">
        <div className="divide-y divide-gray-100">
          {projects.map((project) => (
            <article
              key={project._id || project.id}
              className="p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-start gap-4">
                <ProjectMedia project={project} size="large" />

                <div className="min-w-0 flex-1">
                  <h3 className="break-words font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                    {project.description}
                  </p>
                </div>

                <ProjectActions
                  project={project}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectTable;
