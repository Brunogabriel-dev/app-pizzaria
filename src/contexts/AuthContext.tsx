import React, { useState, createContext, ReactNode } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api'


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
    id: '123',
    name: 'Sujeito Programador',
    email: 'teste@teste.com',
    token: '123123123123123123'
  })

  const isAuthenticated = !!user.name;


  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}