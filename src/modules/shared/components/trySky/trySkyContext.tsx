'use client'

import React, { createContext, useState, useContext } from 'react';

interface TrySkyContextType {
  isTrySkyOpen: boolean;
  openTrySky: () => void;
  closeTrySky: () => void;
}

const TrySkyContext = createContext<TrySkyContextType | undefined>(undefined);

export const TrySkyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTrySkyOpen, setIsTrySkyOpen] = useState(false);

  const openTrySky = () => setIsTrySkyOpen(true);
  const closeTrySky = () => setIsTrySkyOpen(false);

  return (
    <TrySkyContext.Provider value={{ isTrySkyOpen, openTrySky, closeTrySky }}>
      {children}
    </TrySkyContext.Provider>
  );
};

export const useTrySky = () => {
  const context = useContext(TrySkyContext);
  if (context === undefined) {
    throw new Error('useTrySky must be used within a TrySkyProvider');
  }
  return context;
};