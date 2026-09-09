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

export const registerAdmin = async (name, email, password) => {
  return api("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });
};
