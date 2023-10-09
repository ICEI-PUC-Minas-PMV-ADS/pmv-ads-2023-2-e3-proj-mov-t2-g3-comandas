import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

interface AuthProps {
    authState?: { token: string | null; auhenticated: boolean | null };
    onRegister?: (email: String, password: string) => Promise<any>;
    onLogin?: (email: String, password: string) => Promise<any>;
    onLogout?: () => Promise<any>;
}

const TOKEN_KEY = 'my-jwt'; //pegar o token com o Alvaro
export const API_URL = 'https://api.developerapp.com'; //pegar o endereço com o Alvaro
const AuthContext = createContext<AuthProps>({});

export const useAuth = () => {
    return useContext(useContext);
};

export const AuthProvider = ({ children }: any) => {
    const [authState, setAuthState] = useState<{
        token: string | null;
        authenticated: boolean | null;
    }>({
        token: null,
        authenticated: null,
    });

    const value = {};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    
}
