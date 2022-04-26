import { createContext, useState } from 'react';

interface AppContextInterface {
  openAuthModal: boolean;
  setOpenAuthModal: (open: boolean) => void;
}

const initialState = {
  openAuthModal: false,
  setOpenAuthModal: (_open: boolean) => {
    // Return void
  },
};

export const AppContext = createContext<AppContextInterface>(initialState);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [openAuthModal, setOpenAuthModal] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ openAuthModal, setOpenAuthModal }}>
      {children}
    </AppContext.Provider>
  );
};
