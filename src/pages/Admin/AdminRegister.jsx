import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { registerAdmin } from "../../services/authService";

const AdminRegister = () => {
  const { login, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/admin/projects" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    try {
      setLoading(true);

      const data = await registerAdmin(name, email, password);

      login(data.user, data.token);

      navigate("/admin/projects", { replace: true });
    } catch (error) {
      setError(error.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6 py-16">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="mb-3 font-[var(--sans)] text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Administration
          </p>

          <h1 className="font-[var(--heading)] text-3xl font-bold text-[var(--text-h)]">
            Créer un compte
          </h1>

          <p className="mt-3 text-[var(--text)]">
            Créez votre compte administrateur.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
            >
              Nom
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Votre nom"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="admin@example.com"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
            >
              Mot de passe
            </label>

            <input
              id="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
            >
              Confirmer le mot de passe
            </label>

            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#6d28a9] px-5 py-3 font-semibold text-white shadow-[0_8px_25px_rgba(109,40,169,0.22)] transition hover:-translate-y-0.5 hover:bg-[#7e2dbb] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Création..." : "Créer le compte"}
          </button>

          <p className="mt-6 text-center text-sm text-[var(--text)]">
            Vous avez déjà un compte ?{" "}
            <Link
              to="/admin/login"
              className="font-semibold text-[#6d28a9] transition hover:text-[#7e2dbb]"
            >
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default AdminRegister;
