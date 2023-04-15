import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({ children, value }) {

  return (
  <AuthContext.Provider value={ value }>
    {children}
  </AuthContext.Provider>
  )

}

export function useAuthState() {
  return useContext(AuthContext)
}
