import React, { createContext, useReducer, useEffect } from 'react';

const GlobalStateContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: { name: action.payload } };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (init) => {
      try {
        const localData = localStorage.getItem('appState');
        return localData ? JSON.parse(localData) : init;
      } catch {
        return init;
      }
    }
  );

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  const login = (name) => dispatch({ type: 'LOGIN', payload: name });
  const logout = () => dispatch({ type: 'LOGOUT' });
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });

  return (
    <GlobalStateContext.Provider value={{ ...state, login, logout, toggleTheme }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;
