import { useEffect, useState } from "react";
import Container from "../common/Container";
import api from "../../services/api";

const Impact = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api("/api/stats");

        if (Array.isArray(data)) {
          setStats(data);
        }
      } catch (error) {
        console.error("Erreur chargement statistiques:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <section className="bg-[var(--bg)] py-20">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-[var(--sans)] text-[length:var(--font-sm)] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            Notre impact
          </p>

          <h2 className="font-[var(--heading)] text-[length:var(--font-2xl)] font-bold tracking-tight text-[var(--text-h)] sm:text-[length:var(--font-3xl)]">
            Les chiffres sont importants.
            <span className="block text-[var(--text)]">
              Mais ce sont les personnes qui comptent.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat._id || index}
              className="group bg-[var(--bg-secondary)] p-7 transition-colors duration-300 hover:bg-[var(--accent)]"
            >
              <p className="font-[var(--heading)] text-[length:var(--font-2xl)] font-bold tracking-tight text-[var(--text-h)] transition-colors group-hover:text-[#16171d] sm:text-[length:var(--font-3xl)]">
                {stat.number}
              </p>

              <p className="mt-3 font-[var(--sans)] text-[length:var(--font-sm)] leading-5 text-[var(--text)] transition-colors group-hover:text-[#16171d]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Impact;
