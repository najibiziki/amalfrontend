import Container from "../common/Container";
import { useInstagramPosts } from "../../hooks/useInstagramPosts";
import SocialPost from "./SocialPost";

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const SocialStories = () => {
  const { posts, loading, error } = useInstagramPosts();
  return (
    <section className="overflow-hidden bg-[var(--bg-secondary)] py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
              <InstagramIcon />
              <span>De notre communauté</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-[var(--text-h)] sm:text-5xl">
              Les histoires de
              <span className="text-[var(--text)]"> notre parcours.</span>
            </h2>

            <p className="mt-4 max-w-xl text-[var(--text)]">
              Un aperçu des personnes, des moments et des histoires qui donnent
              vie à notre engagement.
            </p>
          </div>
        </div>

        <div className="social-stories-scroll mt-12 flex gap-6 overflow-x-auto pb-6">
          {loading && <p>Chargement...</p>}

          {error && (
            <p className="text-sm text-red-500">
              Impossible de charger Instagram.
            </p>
          )}

          {!loading &&
            !error &&
            posts.map((post) => <SocialPost key={post.id} post={post} />)}
        </div>
      </Container>
    </section>
  );
};

export default SocialStories;
