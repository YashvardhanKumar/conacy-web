export interface RegisterPayload {
  email?: string;
  password?: string;
  name?: string;
  username?: string;
  dob?: string | number | Date;
}

export interface RegisterResponse {
  isAuthenticated: boolean;
  username?: string;
  error?: string;
  message?: string;
}

export const handleSubmitRegister = async (value: RegisterPayload): Promise<RegisterResponse> => {
  const { email, password, name, username, dob } = value;
  const date = dob ? new Date(dob) : new Date();
  const url = import.meta.env.VITE_SERVER_URL || "";

  try {
    const res = await fetch(url + "/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        hash: password,
        name,
        username,
        dob: date,
      }),
    });
    const result = await res.json();
    if (res.ok) {
      localStorage.setItem("isAuthenticated", "Yes");
      localStorage.setItem("username", result.username);
    }
    return result;
  } catch (error) {
    console.log(error);
    return { isAuthenticated: false, error: "Something is wrong!" };
  }
};
