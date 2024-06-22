'use client';
import React, { createContext, useContext, useState } from 'react';

interface PageContextType {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PageContext = createContext<PageContextType | undefined>(undefined);

export const usePageChange = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageChange must be used within a PageProvider');
  }
  return context;
};
