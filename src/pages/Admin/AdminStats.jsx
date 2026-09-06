import { useEffect, useState } from "react";
import api from "../../services/api";
const defaultStats = [
  {
    number: "12.5K+",
    label: "Personnes accompagnées",
  },
  {
    number: "48",
    label: "Projets réalisés",
  },
  {
    number: "320+",
    label: "Bénévoles actifs",
  },
  {
    number: "14",
    label: "Communautés accompagnées",
  },
];

function AdminStats() {
  const [stats, setStats] = useState(defaultStats);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api("/api/stats");

        if (!response.ok) return;

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setStats(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);

  const handleChange = (index, field, value) => {
    setStats((prev) =>
      prev.map((stat, i) =>
        i === index
          ? {
              ...stat,
              [field]: value,
            }
          : stat,
      ),
    );
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      await api("/api/stats", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stats),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-[var(--text-h)]">
          Statistiques
        </h1>

        <p className="mt-2 text-sm text-[var(--text)] opacity-60">
          Modifiez les chiffres affichés dans la section « Notre impact ».
        </p>

        <div className="mt-8 space-y-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="grid gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 sm:grid-cols-2"
            >
              <div>
                <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
                  Chiffre
                </label>

                <input
                  type="text"
                  value={stat.number}
                  onChange={(e) =>
                    handleChange(index, "number", e.target.value)
                  }
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
                  Libellé
                </label>

                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleChange(index, "label", e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="mt-6 w-full rounded-xl bg-[var(--accent)] px-5 py-3 font-semibold text-[#16171d] transition hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}

export default AdminStats;
