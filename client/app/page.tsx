import Image from "next/image";
import HomePage from "./HomePage";
import IntroPage from "./IntroPage";

import { ApolloProvider, gql } from "@apollo/client";
import { cookies } from "next/headers";

export default async function Home() {
  const token = cookies().get('accessToken')?.value;
  const refreshToken = cookies().get('refreshToken')?.value;
  
  if(token != undefined) return <HomePage/>
  return <IntroPage/>
}
