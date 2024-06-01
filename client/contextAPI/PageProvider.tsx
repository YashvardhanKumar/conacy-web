"use client";
import { useState } from "react";
import { PageContext } from "@/contextAPI/PageContext";

type PageProps = {
  children: React.ReactNode;
};

export const PageProvider: React.FC<PageProps> = ({
  children,
}) => {
  const [page, setPage] = useState(0);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
