import React, { Children, createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();
const GlobalStateUpdateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);
export const useSetGlobalState = () => useContext(GlobalStateUpdateContext);

export const GlobalStateProvider = ({ Children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });
  return (
    <GlobalStateContext.Provider value={state}>
       <GlobalStateUpdateContext.Provider value={setState}>
          {Children}
       </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
}