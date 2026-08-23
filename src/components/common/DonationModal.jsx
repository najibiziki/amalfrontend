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
        overflow-y-auto
        bg-black/70
        px-4 py-8
        backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-title"
        className="
          relative w-full max-w-2xl
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
            absolute right-5 top-5 z-20
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/[0.08]
            bg-white/[0.04]
            text-lg
            text-white/60
            transition-all
            hover:bg-white/[0.08]
            hover:text-white
          "
        >
          ×
        </button>

        <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div
            className="
              flex flex-col justify-between
              border-b border-white/[0.06]
              bg-gradient-to-br
              from-purple-950/40
              via-[#191a22]
              to-[#17181f]
              p-7
              md:border-b-0
              md:border-r
              md:p-9
            "
          >
            <div>
              <div
                className="
                  mb-6 flex h-12 w-12 items-center justify-center
                  rounded-2xl
                  border border-purple-400/20
                  bg-purple-500/10
                  text-purple-300
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.8 8.6c0 5.5-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
                </svg>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
                Votre soutien compte
              </p>

              <h2
                id="donation-title"
                className="
                  mt-3
                  text-3xl font-semibold
                  leading-tight
                  tracking-tight
                  text-white
                "
              >
                Ensemble, faisons
                <span className="block text-purple-400">la différence.</span>
              </h2>

              <p className="mt-5 text-sm leading-6 text-white/55">
                Chaque don, quel que soit son montant, nous aide à poursuivre
                nos actions et à accompagner celles et ceux qui en ont besoin.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/55">
                Merci pour votre confiance et votre générosité.
              </p>
            </div>

            <div className="mt-8 hidden md:block">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-xs text-white/45">
                  Don directement vers le compte de l'association
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-7 md:p-9">
            <p className="text-sm font-medium text-white">
              Comment faire un don ?
            </p>

            <p className="mt-2 text-sm leading-6 text-white/45">
              Vous pouvez effectuer votre don directement par virement bancaire
              sur le compte officiel de l'association.
            </p>

            {/* Bank information */}
            <div
              className="
                mt-6
                overflow-hidden
                rounded-2xl
                border border-white/[0.07]
                bg-white/[0.025]
              "
            >
              <div className="border-b border-white/[0.06] px-5 py-4">
                <p className="text-xs uppercase tracking-[0.15em] text-purple-300">
                  Coordonnées bancaires
                </p>
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <p className="text-xs text-white/30">Bénéficiaire</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {bankInfo.association}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/30">Banque</p>
                  <p className="mt-1 text-sm font-medium text-white">
                    {bankInfo.bank}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-white/30">RIB</p>
                      <p className="mt-1 break-all text-sm font-medium tracking-wide text-white">
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
                        px-3 py-2
                        text-xs font-medium
                        text-white/60
                        transition
                        hover:bg-white/[0.08]
                        hover:text-white
                      "
                    >
                      Copier
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/30">IBAN</p>
                  <p className="mt-1 break-all text-sm font-medium tracking-wide text-white">
                    {bankInfo.iban}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div
              className="
                mt-5
                rounded-2xl
                border border-purple-400/10
                bg-purple-500/[0.06]
                p-4
              "
            >
              <p className="text-sm font-medium text-white">
                Après votre virement
              </p>

              <p className="mt-2 text-xs leading-5 text-white/40">
                Si vous souhaitez nous informer de votre don ou recevoir une
                confirmation, vous pouvez nous contacter en indiquant le montant
                et la date du virement.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-5 flex w-full
                items-center justify-center
                rounded-xl
                bg-[#6d28a9]
                px-5 py-3.5
                text-sm font-semibold
                text-white
                shadow-[0_10px_30px_rgba(109,40,169,0.25)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#7e2dbb]
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

// import { useEffect, useState } from "react";

// const amounts = [10, 25, 50, 100];

// const DonationModal = ({ isOpen, onClose }) => {
//   const [amount, setAmount] = useState(25);
//   const [frequency, setFrequency] = useState("once");
//   const [customAmount, setCustomAmount] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const selectedAmount = customAmount !== "" ? Number(customAmount) : amount;

//   const handleDonate = () => {
//     // Stripe Checkout will be connected here.
//     console.log({
//       amount: selectedAmount,
//       frequency,
//     });
//   };

//   return (
//     <div
//       className="
//         fixed inset-0 z-[100]
//         flex items-center justify-center
//         overflow-y-auto
//         bg-black/70
//         px-4 py-8
//         backdrop-blur-md
//       "
//       onClick={onClose}
//     >
//       <div
//         role="dialog"
//         aria-modal="true"
//         aria-labelledby="donation-title"
//         className="
//           relative w-full max-w-2xl
//           overflow-hidden
//           rounded-3xl
//           border border-white/[0.08]
//           bg-[#17181f]
//           shadow-[0_30px_100px_rgba(0,0,0,0.55)]
//         "
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Background atmosphere */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           <div
//             className="
//               absolute -right-32 -top-32
//               h-80 w-80
//               rounded-full
//               bg-purple-600/20
//               blur-[100px]
//             "
//           />

//           <div
//             className="
//               absolute -bottom-40 -left-32
//               h-80 w-80
//               rounded-full
//               bg-violet-500/10
//               blur-[100px]
//             "
//           />
//         </div>

//         {/* Close */}
//         <button
//           type="button"
//           onClick={onClose}
//           aria-label="Fermer"
//           className="
//             absolute right-5 top-5 z-20
//             flex h-9 w-9 items-center justify-center
//             rounded-full
//             border border-white/[0.08]
//             bg-white/[0.04]
//             text-lg
//             text-white/60
//             transition-all
//             hover:bg-white/[0.08]
//             hover:text-white
//           "
//         >
//           ×
//         </button>

//         <div className="relative grid md:grid-cols-[0.9fr_1.1fr]">
//           {/* Left side */}
//           <div
//             className="
//               flex flex-col justify-between
//               border-b border-white/[0.06]
//               bg-gradient-to-br
//               from-purple-950/40
//               via-[#191a22]
//               to-[#17181f]
//               p-7
//               md:border-b-0
//               md:border-r
//               md:p-9
//             "
//           >
//             <div>
//               <div
//                 className="
//                   mb-6 flex h-12 w-12 items-center justify-center
//                   rounded-2xl
//                   border border-purple-400/20
//                   bg-purple-500/10
//                   text-purple-300
//                 "
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1.6"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M20.8 8.6c0 5.5-8.8 10.2-8.8 10.2S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.8 2.3Z" />
//                 </svg>
//               </div>

//               <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
//                 Votre soutien compte
//               </p>

//               <h2
//                 id="donation-title"
//                 className="
//                   mt-3
//                   text-3xl font-semibold
//                   leading-tight
//                   tracking-tight
//                   text-white
//                 "
//               >
//                 Ensemble, créons
//                 <span className="block text-purple-400">un nouvel élan.</span>
//               </h2>

//               <p className="mt-5 text-sm leading-6 text-white/55">
//                 Chaque contribution nous permet de poursuivre nos actions,
//                 d'accompagner davantage de personnes et de construire des
//                 changements durables.
//               </p>
//             </div>

//             <div className="mt-8 hidden md:block">
//               <div className="mb-3 flex items-center gap-2">
//                 <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

//                 <span className="text-xs text-white/45">Paiement sécurisé</span>
//               </div>

//               <p className="text-xs leading-5 text-white/30">
//                 Vos informations de paiement sont traitées de manière sécurisée
//                 par Stripe.
//               </p>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="p-7 md:p-9">
//             {/* Frequency */}
//             <div>
//               <p className="mb-3 text-sm font-medium text-white">
//                 Je souhaite soutenir l'association
//               </p>

//               <div className="grid grid-cols-2 rounded-xl bg-white/[0.04] p-1">
//                 <button
//                   type="button"
//                   onClick={() => setFrequency("once")}
//                   className={`
//                     rounded-lg px-4 py-2.5
//                     text-sm font-medium
//                     transition-all
//                     ${
//                       frequency === "once"
//                         ? "bg-white text-[#17181f] shadow-sm"
//                         : "text-white/50 hover:text-white"
//                     }
//                   `}
//                 >
//                   Une fois
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => setFrequency("monthly")}
//                   className={`
//                     rounded-lg px-4 py-2.5
//                     text-sm font-medium
//                     transition-all
//                     ${
//                       frequency === "monthly"
//                         ? "bg-white text-[#17181f] shadow-sm"
//                         : "text-white/50 hover:text-white"
//                     }
//                   `}
//                 >
//                   Chaque mois
//                 </button>
//               </div>
//             </div>

//             {/* Amount */}
//             <div className="mt-7">
//               <div className="mb-3 flex items-center justify-between">
//                 <p className="text-sm font-medium text-white">
//                   Choisissez votre montant
//                 </p>

//                 <span className="text-xs text-white/30">EUR</span>
//               </div>

//               <div className="grid grid-cols-2 gap-2.5">
//                 {amounts.map((value) => {
//                   const isSelected = customAmount === "" && amount === value;

//                   return (
//                     <button
//                       key={value}
//                       type="button"
//                       onClick={() => {
//                         setAmount(value);
//                         setCustomAmount("");
//                       }}
//                       className={`
//                         relative
//                         rounded-xl
//                         border
//                         px-4 py-3.5
//                         text-left
//                         transition-all duration-200
//                         ${
//                           isSelected
//                             ? "border-purple-400/60 bg-purple-500/15 text-white shadow-[0_0_25px_rgba(168,85,247,0.08)]"
//                             : "border-white/[0.07] bg-white/[0.025] text-white/65 hover:border-white/[0.14] hover:bg-white/[0.05] hover:text-white"
//                         }
//                       `}
//                     >
//                       <span className="text-lg font-semibold">{value}€</span>

//                       {isSelected && (
//                         <span className="absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full bg-purple-500 text-[10px] text-white">
//                           ✓
//                         </span>
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Custom amount */}
//               <div className="relative mt-2.5">
//                 <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/35">
//                   €
//                 </span>

//                 <input
//                   type="number"
//                   min="1"
//                   step="1"
//                   value={customAmount}
//                   onChange={(e) => setCustomAmount(e.target.value)}
//                   placeholder="Autre montant"
//                   className="
//                     w-full
//                     rounded-xl
//                     border border-white/[0.07]
//                     bg-white/[0.025]
//                     py-3.5 pl-9 pr-4
//                     text-sm text-white
//                     outline-none
//                     placeholder:text-white/25
//                     transition-all
//                     focus:border-purple-400/50
//                     focus:bg-white/[0.04]
//                   "
//                 />
//               </div>
//             </div>

//             {/* Summary */}
//             <div
//               className="
//                 mt-7
//                 rounded-2xl
//                 border border-white/[0.06]
//                 bg-white/[0.025]
//                 p-4
//               "
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-white/45">
//                   Votre contribution
//                 </span>

//                 <span className="text-xl font-semibold text-white">
//                   {selectedAmount > 0 ? selectedAmount : 0}€
//                   {frequency === "monthly" && (
//                     <span className="ml-1 text-xs font-normal text-white/35">
//                       / mois
//                     </span>
//                   )}
//                 </span>
//               </div>
//             </div>

//             {/* Stripe button */}
//             <button
//               type="button"
//               onClick={handleDonate}
//               disabled={!selectedAmount || selectedAmount <= 0}
//               className="
//                 mt-4 flex w-full
//                 items-center justify-center gap-2
//                 rounded-xl
//                 bg-[#6d28a9]
//                 px-5 py-3.5
//                 text-sm font-semibold
//                 text-white
//                 shadow-[0_10px_30px_rgba(109,40,169,0.25)]
//                 transition-all duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-[#7e2dbb]
//                 hover:shadow-[0_12px_35px_rgba(109,40,169,0.35)]
//                 disabled:cursor-not-allowed
//                 disabled:opacity-40
//                 disabled:hover:translate-y-0
//               "
//             >
//               Continuer vers le paiement
//               <svg
//                 viewBox="0 0 16 16"
//                 className="h-4 w-4"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.7"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M3 8h9" />
//                 <path d="m8 4 4 4-4 4" />
//               </svg>
//             </button>

//             <div className="mt-4 flex items-center justify-center gap-2">
//               <svg
//                 viewBox="0 0 24 24"
//                 className="h-3.5 w-3.5 text-emerald-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <rect x="3" y="11" width="18" height="10" rx="2" />
//                 <path d="M7 11V8a5 5 0 0 1 10 0v3" />
//               </svg>

//               <span className="text-[11px] text-white/30">
//                 Paiement sécurisé par Stripe
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DonationModal;
