import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const useProject = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setProject(null);
      setLoading(false);
      setError("Project ID is missing");
      return;
    }

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_URL}/api/projects/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Project not found");
          }

          throw new Error("Failed to fetch project");
        }

        const data = await response.json();

        setProject(data.project);
      } catch (err) {
        console.error("Project error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return {
    project,
    loading,
    error,
  };
};

export default useProject;
