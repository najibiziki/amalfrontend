import { Heart } from "lucide-react";

const InstagramIcon = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
};

const SocialPost = ({ post }) => {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group min-w-[280px] max-w-[320px] flex-1 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt=""
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-secondary)]/90 px-3 py-2 font-[var(--sans)] text-[length:var(--font-xs)] font-semibold text-[var(--text-h)] backdrop-blur-sm">
          <InstagramIcon size={14} />
          {post.platform}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 font-[var(--sans)] text-[length:var(--font-xs)] text-white backdrop-blur-sm">
          <Heart size={13} fill="currentColor" />
          {post.likes}
        </div>
      </div>

      <div className="p-5">
        <p className="font-[var(--sans)] text-[length:var(--font-sm)] leading-6 text-[var(--text)]">
          {post.caption}
        </p>

        <p className="mt-4 font-[var(--sans)] text-[length:var(--font-xs)] font-medium text-[var(--text)] opacity-60">
          {post.date}
        </p>
      </div>
    </a>
  );
};

export default SocialPost;
