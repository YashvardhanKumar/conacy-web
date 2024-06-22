import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import LoadingLogo from "../LoadingLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create | Conacy",
  description: "Add a new photo",
};

export default function CreateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<LoadingLogo />}>{children}</Suspense>
      </body>
    </html>
  );
}
