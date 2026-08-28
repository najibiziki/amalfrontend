import { useEffect } from "react";

const DonationModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Replace these with the association's real bank information
  const bankInfo = {
    association: "Nom de l'association",
    bank: "Nom de la banque",
    rib: "000 000 000000000000000000",
    iban: "MA00 0000 0000 0000 0000 0000 000",
  };

  const copyRib = async () => {
    try {
      await navigator.clipboard.writeText(bankInfo.rib);
    } catch (error) {
      console.error("Unable to copy RIB", error);
    }
  };
  return (
    <div
      className="
      fixed inset-0 z-[100]
      flex items-center justify-center
      overflow-hidden
      bg-black/70
      px-3 py-3
      backdrop-blur-md
      sm:px-4 sm:py-6
    "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-title"
        className="
        relative
        w-full
        max-w-2xl
        overflow-hidden
        rounded-3xl
        border border-white/[0.08]
        bg-[#17181f]
        shadow-[0_30px_100px_rgba(0,0,0,0.55)]
      "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background atmosphere */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
            absolute -right-32 -top-32
            h-80 w-80
            rounded-full
            bg-purple-600/20
            blur-[100px]
          "
          />

          <div
            className="
            absolute -bottom-40 -left-32
            h-80 w-80
            rounded-full
            bg-violet-500/10
            blur-[100px]
          "
          />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="
          absolute right-3 top-3 z-20
          flex h-8 w-8 items-center justify-center
          rounded-full
          border border-white/[0.08]
          bg-white/[0.04]
          text-base
          text-white/60
          transition-all
          hover:bg-white/[0.08]
          hover:text-white
          sm:right-5
          sm:top-5
          sm:h-9
          sm:w-9
          sm:text-lg
        "
        >
          ×
        </button>

        <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
          {/* ================= LEFT ================= */}
          <div
            className="
            flex flex-col justify-between
            border-b border-white/[0.06]
            bg-gradient-to-br
            from-purple-950/40
            via-[#191a22]
            to-[#17181f]
            p-5
            sm:p-6
            md:border-b-0
            md:border-r
            md:p-9
          "
          >
            <div>
              {/* Icon */}
              <div
                className="
                mb-4
                flex h-10 w-10
                items-center justify-center
                rounded-2xl
                border border-purple-400/20
                bg-purple-500/10
                text-purple-300
                sm:mb-6
                sm:h-12
                sm:w-12
              "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 8.6c0 5.5-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
                </svg>
              </div>

              {/* Label */}
              <p
                className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-purple-300
                sm:text-xs
                sm:tracking-[0.2em]
              "
              >
                Votre soutien compte
              </p>

              {/* Title */}
              <h2
                id="donation-title"
                className="
                mt-2
                text-2xl
                font-semibold
                leading-tight
                tracking-tight
                text-white
                sm:mt-3
                sm:text-3xl
              "
              >
                Ensemble, faisons
                <span className="block text-purple-400">la différence.</span>
              </h2>

              {/* Description */}
              <p
                className="
                mt-3
                text-xs
                leading-5
                text-white/55
                sm:mt-5
                sm:text-sm
                sm:leading-6
              "
              >
                Chaque don, quel que soit son montant, nous aide à poursuivre
                nos actions et à accompagner celles et ceux qui en ont besoin.
              </p>

              <p
                className="
                mt-3
                text-xs
                leading-5
                text-white/55
                sm:mt-4
                sm:text-sm
                sm:leading-6
              "
              >
                Merci pour votre confiance et votre générosité.
              </p>
            </div>

            {/* Bottom information */}
            <div className="mt-5 hidden md:block">
              <div className="flex items-center gap-2">
                <div
                  className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-emerald-400
                "
                />

                <span className="text-xs text-white/45">
                  Don directement vers le compte de l'association
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="p-5 sm:p-6 md:p-9">
            {/* Heading */}
            <p className="text-sm font-medium text-white">
              Comment faire un don ?
            </p>

            <p
              className="
              mt-1.5
              text-xs
              leading-5
              text-white/45
              sm:mt-2
              sm:text-sm
              sm:leading-6
            "
            >
              Vous pouvez effectuer votre don directement par virement bancaire
              sur le compte officiel de l'association.
            </p>

            {/* ================= BANK INFORMATION ================= */}
            <div
              className="
              mt-4
              overflow-hidden
              rounded-2xl
              border border-white/[0.07]
              bg-white/[0.025]
              sm:mt-6
            "
            >
              {/* Header */}
              <div
                className="
                border-b
                border-white/[0.06]
                px-4
                py-3
                sm:px-5
                sm:py-4
              "
              >
                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-purple-300
                  sm:text-xs
                  sm:tracking-[0.15em]
                "
                >
                  Coordonnées bancaires
                </p>
              </div>

              {/* Content */}
              <div className="space-y-3 p-4 sm:space-y-4 sm:p-5">
                {/* Association */}
                <div>
                  <p className="text-[11px] text-white/30 sm:text-xs">
                    Bénéficiaire
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-white sm:mt-1 sm:text-sm">
                    {bankInfo.association}
                  </p>
                </div>

                {/* Bank */}
                <div>
                  <p className="text-[11px] text-white/30 sm:text-xs">Banque</p>

                  <p className="mt-0.5 text-xs font-medium text-white sm:mt-1 sm:text-sm">
                    {bankInfo.bank}
                  </p>
                </div>

                {/* RIB */}
                <div>
                  <div
                    className="
                    flex
                    items-start
                    justify-between
                    gap-2
                    sm:gap-3
                  "
                  >
                    <div className="min-w-0">
                      <p className="text-[11px] text-white/30 sm:text-xs">
                        RIB
                      </p>

                      <p
                        className="
                        mt-0.5
                        break-all
                        text-xs
                        font-medium
                        tracking-wide
                        text-white
                        sm:mt-1
                        sm:text-sm
                      "
                      >
                        {bankInfo.rib}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={copyRib}
                      className="
                      shrink-0
                      rounded-lg
                      border border-white/[0.08]
                      bg-white/[0.04]
                      px-2.5
                      py-1.5
                      text-[11px]
                      font-medium
                      text-white/60
                      transition
                      hover:bg-white/[0.08]
                      hover:text-white
                      sm:px-3
                      sm:py-2
                      sm:text-xs
                    "
                    >
                      Copier
                    </button>
                  </div>
                </div>

                {/* IBAN */}
                <div>
                  <p className="text-[11px] text-white/30 sm:text-xs">IBAN</p>

                  <p
                    className="
                    mt-0.5
                    break-all
                    text-xs
                    font-medium
                    tracking-wide
                    text-white
                    sm:mt-1
                    sm:text-sm
                  "
                  >
                    {bankInfo.iban}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div
              className="
              mt-3
              rounded-2xl
              border border-purple-400/10
              bg-purple-500/[0.06]
              p-3
              sm:mt-5
              sm:p-4
            "
            >
              <p className="text-xs font-medium text-white sm:text-sm">
                Après votre virement
              </p>

              <p
                className="
                mt-1.5
                text-[11px]
                leading-4
                text-white/40
                sm:mt-2
                sm:text-xs
                sm:leading-5
              "
              >
                Si vous souhaitez nous informer de votre don ou recevoir une
                confirmation, vous pouvez nous contacter en indiquant le montant
                et la date du virement.
              </p>
            </div>

            {/* ================= CLOSE BUTTON ================= */}
            <button
              type="button"
              onClick={onClose}
              className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              rounded-xl
              bg-[#6d28a9]
              px-4
              py-3
              text-xs
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(109,40,169,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#7e2dbb]
              sm:mt-5
              sm:px-5
              sm:py-3.5
              sm:text-sm
            "
            >
              Merci pour votre soutien ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;
