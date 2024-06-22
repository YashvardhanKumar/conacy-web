"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export const handleSubmitRegister = async (value: any) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  console.log(url);

  const { email, password, name, username, dob } = value;
  const date = new Date(dob);
  const id = uuidv4();
  if (url) {
    const res = await fetch(`${url}/auth/signUp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id,
        email,
        hash: password,
        name,
        username,
        dob: date,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.accessToken != undefined)
      cookies()
        .set("accessToken", result.accessToken, {
          secure: true,
          httpOnly: true,
        })
        .set("refreshToken", result.refreshToken, {
          secure: true,
          httpOnly: true,
        });
  }
  redirect("/");
};

export const handleValid = async (value: any) => {
  const url = process.env.NEXT_PUBLIC_SERVER_URL;
  console.log(url);

  const accessToken = cookies().get("accessToken")?.value;
  const refreshToken = cookies().get("refreshToken")?.value;
  const { email, password, name, username, dob } = value;
  const date = new Date(dob);
  const id = uuidv4();
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Accept", "application/json");
  header.append("Authorization", `Bearer ${accessToken}`);
  if (url) {
    const res = await fetch(`${url}/auth/verify`, {
      method: "POST",
      headers: header,
      body: JSON.stringify({
        refreshToken,
      }),
    });
    const result = await res.json();
    console.log(result);
    if (result.accessToken != undefined)
      cookies()
        .set("accessToken", result.accessToken, {
          secure: true,
          httpOnly: true,
          maxAge: 5 * 60,
        })
        .set("refreshToken", result.refreshToken, {
          secure: true,
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60,
        });
  }
  redirect("/");
};
