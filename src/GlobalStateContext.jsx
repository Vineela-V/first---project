import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();
const GlobalStateUpdateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useSetGlobalState = () => useContext(GlobalStateUpdateContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateUpdateContext.Provider value={setState}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
};
