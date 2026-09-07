import { useRef, useState } from "react";

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const CloudinaryImageUpload = ({ value = "", onUpload, disabled = false }) => {
  const inputRef = useRef(null);

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setError("");

    if (!file.type.startsWith("image/")) {
      setError("Veuillez sélectionner une image.");
      event.target.value = "";
      return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      setError("L'image ne doit pas dépasser 10 MB.");
      event.target.value = "";
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error?.message || "Erreur lors de l'envoi de l'image.",
        );
      }

      onUpload(data.secure_url);
    } catch (error) {
      setError(error.message || "Impossible d'envoyer l'image.");
    } finally {
      setUploading(false);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleRemove = () => {
    onUpload("");
    setError("");
  };

  return (
    <div className="w-full min-w-0">
      <label className="mb-2 block text-sm font-semibold text-gray-700">
        Image
      </label>

      {value ? (
        <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
          <div className="relative h-40 w-full overflow-hidden bg-gray-100 sm:h-48">
            <img
              src={value}
              alt="Aperçu du projet"
              className="h-full w-full object-contain"
            />

            <button
              type="button"
              onClick={handleRemove}
              disabled={disabled || uploading}
              className="
                absolute
                right-3
                top-3
                rounded-lg
                bg-black/70
                px-3
                py-2
                text-sm
                font-medium
                text-white
                backdrop-blur
                transition
                hover:bg-red-600
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Supprimer
            </button>
          </div>

          <div className="flex min-w-0 flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="min-w-0 flex-1 truncate text-xs text-gray-500">
              {value}
            </p>

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled || uploading}
              className="
                shrink-0
                rounded-xl
                bg-gray-100
                px-4
                py-2.5
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:bg-gray-200
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Changer l'image
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={disabled || uploading}
          className="
            flex
            h-40
            w-full
            flex-col
            items-center
            justify-center
            rounded-2xl
            border-2
            border-dashed
            border-gray-200
            bg-gray-50
            px-6
            text-center
            transition
            hover:border-purple-400
            hover:bg-purple-50/50
            disabled:cursor-not-allowed
            disabled:opacity-50
            sm:h-48
          "
        >
          {uploading ? (
            <>
              <svg
                className="mb-3 h-8 w-8 animate-spin text-purple-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              <span className="text-sm font-semibold text-purple-600">
                Envoi de l'image...
              </span>
            </>
          ) : (
            <>
              <svg
                className="mb-3 h-10 w-10 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>

              <span className="text-sm font-semibold text-gray-700">
                Cliquez pour sélectionner une image
              </span>

              <span className="mt-1 text-xs text-gray-400">
                PNG, JPG, WEBP — 10 MB maximum
              </span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        onChange={handleFileChange}
        disabled={disabled || uploading}
        className="hidden"
      />

      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">{error}</p>
      )}
    </div>
  );
};

export default CloudinaryImageUpload;
