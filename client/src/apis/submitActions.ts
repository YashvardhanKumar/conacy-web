import { redirect } from "react-router-dom";

export const handleSubmitLogin = async (value: any): Promise<any> => {
  const { email, password } = value;
  try {
    let url = import.meta.env.VITE_SERVER_URL;
    const res = await fetch(url + "/auth/login", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();
    if (res.ok) {
      localStorage.setItem("isAuthenticated", "Yes");
      localStorage.setItem("username", result.username);
    }
    return result;
  } catch (e) {
    console.log(e);
    return { isAuthenticated: false, error: "Wrong credentials" };
  }
};

export const handleValid = async () => {
  let url = import.meta.env.VITE_SERVER_URL;
  console.log(import.meta.env.VITE_SERVER_URL);

  try {
    const res = await fetch(url + "/auth/verify", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    // console.log(result);

    if (result.isAuthenticated) {
      localStorage.setItem("isAuthenticated", "Yes");
      localStorage.setItem("username", result.username);
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
    }
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const handleLogout = async () => {
  let url = import.meta.env.VITE_SERVER_URL;
  console.log(import.meta.env.VITE_SERVER_URL);

  try {
    const res = await fetch(url + "/auth/logout", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const result = await res.json();
    // console.log(result);

    if (result.isAuthenticated) {
      localStorage.setItem("isAuthenticated", "Yes");
      localStorage.setItem("username", result.username);
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
    }
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};