import { createContext } from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children}: {children:React.ReactNode}) => {
    
    <AuthContext.Provider value={{

    }}>
        {children}
    </AuthContext.Provider>
}