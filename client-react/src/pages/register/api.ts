import { redirect } from "react-router-dom";
export const handleSubmitRegister = async (value: any) => {
  const { email, password, name, username, dob } = value;
  const date = new Date(dob);
  try {

  const res = await fetch("/api/auth/signUp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
  redirect("/");
  return result;
} catch (error) {
  console.log(error);
  return { isAuthenticated: false, error: "Something is wrong!" };
}
};
