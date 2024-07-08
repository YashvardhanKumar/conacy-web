'use server'
import Image from "next/image";
import HomePage from "./HomePage";
import IntroPage from "./IntroPage";

import { ApolloProvider, gql } from "@apollo/client";
import { cookies } from "next/headers";
import { useEffect, useState } from "react";
import { handleValid } from "./api/submitActions";
import InitPage from "./InitPage";

export default async function Home() {
  let token = cookies().get("accessToken");
  console.log(token);
  if (token) {
    const data = await handleValid();
    const { isAuthenticated, error } = data;
    if (isAuthenticated) {
      token = cookies().get("accessToken");
      console.log(token);
    }
  }
  if(token) {
    return <HomePage />;
  }
  return <IntroPage />;
}
