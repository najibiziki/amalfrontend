import { ArrowLeft, CalendarDays, FolderOpen } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import useProject from "../../hooks/useProject";

const ProjectDetail = () => {
  const { id } = useParams();

  const { project, loading, error } = useProject(id);

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--bg)]">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="h-10 w-32 animate-pulse rounded-full bg-white/5" />

          <div className="mt-6 h-[280px] animate-pulse rounded-3xl bg-white/5 sm:h-[420px] lg:h-[520px]" />

          <div className="mt-10 max-w-3xl">
            <div className="h-4 w-24 animate-pulse rounded bg-white/5" />

            <div className="mt-4 h-10 w-3/4 animate-pulse rounded bg-white/5" />

            <div className="mt-8 space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-white/5" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-white/5" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-white/5" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <main className="min-h-screen bg-[var(--bg)] px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-[var(--text-h)]">
            Projet introuvable
          </h1>

          <p className="mt-4 text-[var(--text)]">
            {error || "Le projet demandé n'existe pas."}
          </p>

          <Link
            to="/"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[var(--accent)]
              px-5
              py-3
              text-sm
              font-semibold
              text-[#16171d]
              transition
              hover:opacity-90
            "
          >
            <ArrowLeft size={17} />
            Retour aux projets
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <section className="relative">
        <div
          className="
            relative
            h-[280px]
            overflow-hidden
            sm:h-[420px]
            lg:h-[520px]
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/85
              via-black/30
              to-black/10
            "
          />

          <div
            className="
              absolute
              left-4
              top-4
              sm:left-8
              sm:top-8
            "
          >
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-black/30
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition
                hover:bg-black/50
              "
            >
              <ArrowLeft size={17} />
              Retour
            </Link>
          </div>

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
            "
          >
            <div
              className="
                mx-auto
                max-w-5xl
                px-5
                pb-8
                sm:px-8
                sm:pb-12
                lg:px-10
              "
            >
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-black/30
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-md
                "
              >
                <FolderOpen size={13} />

                {project.category}
              </div>

              <h1
                className="
                  mt-4
                  max-w-4xl
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-white
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <article
        className="
          mx-auto
          max-w-5xl
          px-5
          py-10
          sm:px-8
          sm:py-14
          lg:px-10
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-8
            gap-y-4
            border-b
            border-[var(--border)]
            pb-8
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-[var(--accent)]/10
                text-[var(--accent)]
              "
            >
              <FolderOpen size={18} />
            </div>

            <div>
              <p className="text-xs text-[var(--text)] opacity-60">Catégorie</p>

              <p className="text-sm font-semibold text-[var(--text-h)]">
                {project.category}
              </p>
            </div>
          </div>

          {project.createdAt && (
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-[var(--accent)]/10
                  text-[var(--accent)]
                "
              >
                <CalendarDays size={18} />
              </div>

              <div>
                <p className="text-xs text-[var(--text)] opacity-60">
                  Publié le
                </p>

                <p className="text-sm font-semibold text-[var(--text-h)]">
                  {new Date(project.createdAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <p
            className="
              text-lg
              leading-8
              text-[var(--text)]
              sm:text-xl
            "
          >
            {project.description}
          </p>

          <div className="mt-8 space-y-6">
            <p className="text-base leading-8 text-[var(--text)]">
              Ce projet s'inscrit dans les actions menées par notre association
              afin de répondre aux besoins de notre communauté. Nous travaillons
              chaque jour pour créer un impact positif et durable.
            </p>

            <p className="text-base leading-8 text-[var(--text)]">
              À travers cette initiative, nous souhaitons accompagner les
              personnes concernées et leur apporter un soutien concret.
            </p>

            <p className="text-base leading-8 text-[var(--text)]">
              Grâce à la mobilisation de nos bénévoles, de nos partenaires et de
              toutes les personnes qui soutiennent notre association, ce projet
              peut prendre vie.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--border)] pt-8">
          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[var(--accent)]
              transition
              hover:text-[var(--accent-strong)]
            "
          >
            <ArrowLeft size={17} />
            Retour aux projets
          </Link>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetail;
