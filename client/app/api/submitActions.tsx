"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export const handleSubmitRegister = async (value: any) => {
  const url = process.env.NEXT_PUBLIC_CLIENT_URL;

  const { email, password, name, username, dob } = value;
  const date = new Date(dob);
  const id = uuidv4();
  const res = await fetch(`${url}/api/auth/signUp`, {
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
  const set_cache = res.headers.getSetCookie()?.map((v) => v.split("; "));
  if (set_cache && set_cache.length > 0) {
    cookies()
      .set("accessToken", set_cache[0][0].split("=")[1], {
        // secure: true,
        // httpOnly: true,
        maxAge: 5 * 60,
        path: "/",
      })
  }

  redirect("/");
};

// export const handleImageUpload = async (value: any) => {
//   const url = process.env.NEXT_PUBLIC_CLIENT_URL;

//   const { image } = value;
//   console.log(image)
// //   const res = await axios.post(`${url}/api/upload`, {
// //     file:image
// //   },
// // {
// //   headers: {
// //     "Content-Type": "multipart/form-data",
// //   },
// // });
// //   const result = await res.data;
// //   return result;
// };

export const handleSubmitLogin = async (
  value: any
): Promise<string | undefined> => {
  const url = process.env.NEXT_PUBLIC_CLIENT_URL;

  const { email, password } = value;
  try {
    const res = await fetch(`${url}/api/auth/login`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const set_cache = res.headers.getSetCookie()?.map((v) => v.split("; "));
    if (set_cache && set_cache.length > 0) {
      cookies()
        .set("accessToken", set_cache[0][0].split("=")[1], {
          // secure: true,
          // httpOnly: true,
          maxAge: 5 * 60,
          path: "/",
        })
    }
    console.log(cookies().getAll());

  } catch (e) {
    console.log(e);

    return "Wrong credentials";
  }
  redirect("/");
};

export const handleValid = async () => {
  const url = process.env.NEXT_PUBLIC_CLIENT_URL;
  const accessToken = cookies().get("accessToken")?.value;
  const header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Accept", "application/json");
  header.append("Authorization", `Bearer ${accessToken}`);
  if (url) {
    const res = await fetch(`${url}/api/auth/verify`, {
      method: "POST",
      headers: header,
    });
    const result = await res.json();
    
    const set_cache = res.headers.getSetCookie()?.map((v) => v.split("; "));
    if (set_cache && set_cache.length > 0) {
      cookies() 
        .set("accessToken", set_cache[0][0].split("=")[1], {
          // secure: true,
          // httpOnly: true,
          path: "/",
        })
    }
    console.log(cookies().getAll());
    console.log(cookies().getAll());
    return result;
  } else {
    return {error: "Server error"};
  }
  redirect("/");
};
