import { redirect } from "react-router-dom";

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
): Promise<any> => {
  const { email, password } = value;
  try {
    const res = await fetch("/api/auth/login", {
      method: "PUT",
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
    redirect("/");
    // return result ;
  } catch (e) {
    console.log(e);
    return {isAuthenticated: false,error: "Wrong credentials"};
  }
};

export const handleValid = async () => {
  try {
    const res = await fetch("/api/auth/verify", {
      method: "POST",
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
