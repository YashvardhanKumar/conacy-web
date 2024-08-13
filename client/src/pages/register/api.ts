export const handleSubmitRegister = async (value: any) => {
  const { email, password, name, username, dob } = value;
  const date = new Date(dob);
  let url = import.meta.env.VITE_SERVER_URL;
  
  try {
    const res = await fetch(url + "/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
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
