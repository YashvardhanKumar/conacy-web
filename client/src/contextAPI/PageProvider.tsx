// import React, { createContext, useContext, useState } from "react";

// interface PageContextType {
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
// }

// type PageProps = {
//   children: React.ReactNode;
// };

// const PageContext = createContext<PageContextType | undefined>(undefined);

// export const usePageChange = () => {
//   const context = useContext(PageContext);
//   if (!context) {
//     throw new Error("usePageChange must be used within a PageProvider");
//   }
//   return context;
// };



// export const PageProvider: React.FC<PageProps> = ({ children }) => {
//   const [page, setPage] = useState(0);
//   return (
//     <PageContext.Provider value={{ page, setPage }}>
//       {children}
//     </PageContext.Provider>
//   );
// };
