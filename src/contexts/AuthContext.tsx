import React, { useState, createContext, ReactNode } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';



type AuthContextData = {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}


type AuthProviderProps = {
  children: ReactNode;
}

type SignInProps = {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  const [loadingAuth, setLoadingAuth] = useState(false)

  const isAuthenticated = !!user.name;

  async function signIn({ email, password }: SignInProps){
    setLoadingAuth(true);

    
  }


  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}