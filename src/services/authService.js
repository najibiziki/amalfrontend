import api from "./api";

export const loginAdmin = async (email, password) => {
  return api("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
};
