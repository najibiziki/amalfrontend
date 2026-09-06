import { useEffect, useState } from "react";
import api from "../../services/api";

const defaultBankInfo = {
  association: "",
  bank: "",
  rib: "",
  iban: "",
};

function AdminPayment() {
  const [bankInfo, setBankInfo] = useState(defaultBankInfo);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchBankInfo = async () => {
      try {
        const data = await api("/api/payment");
        setBankInfo({
          association: data?.association || "",
          bank: data?.bank || "",
          rib: data?.rib || "",
          iban: data?.iban || "",
        });
      } catch (error) {
        console.error("Erreur chargement paiement:", error);
      }
    };

    fetchBankInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBankInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const data = await api("/api/payment", {
        method: "PUT",
        body: JSON.stringify(bankInfo),
      });

      setBankInfo({
        association: data?.association || "",
        bank: data?.bank || "",
        rib: data?.rib || "",
        iban: data?.iban || "",
      });
    } catch (error) {
      console.error("Erreur sauvegarde paiement:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-[var(--text-h)]">
          Coordonnées bancaires
        </h1>

        <p className="mt-2 text-sm text-[var(--text)] opacity-60">
          Modifiez les coordonnées bancaires affichées aux utilisateurs dans la
          fenêtre de don.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
            <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
              Nom de l'association
            </label>

            <input
              type="text"
              name="association"
              value={bankInfo.association}
              onChange={handleChange}
              placeholder="Nom de l'association"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
            <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
              Banque
            </label>

            <input
              type="text"
              name="bank"
              value={bankInfo.bank}
              onChange={handleChange}
              placeholder="Nom de la banque"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
            <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
              RIB
            </label>

            <input
              type="text"
              name="rib"
              value={bankInfo.rib}
              onChange={handleChange}
              placeholder="RIB"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
            />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
            <label className="mb-2 block text-sm text-[var(--text)] opacity-60">
              IBAN
            </label>

            <input
              type="text"
              name="iban"
              value={bankInfo.iban}
              onChange={handleChange}
              placeholder="IBAN"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text-h)] outline-none focus:border-[var(--accent)]"
            />
          </div>
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

export default AdminPayment;
