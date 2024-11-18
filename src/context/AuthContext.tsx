import { supabase } from "../supabase/supabaseClient.tsx";
import { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router-dom";

interface AuthType {
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}

interface SupabaseError {
    message: string;
    status?: number;
    code?: string;
}

const AuthContext = createContext<AuthType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const login = async (email: string, password: string): Promise<void> => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error as SupabaseError;
            setIsAuthenticated(true); // Update the state when logged in
            toast.success('Login successful');
            console.log('Login successful');
            navigate(from, { replace: true });
        } catch (error: unknown) {
            const err = error as SupabaseError;
            console.error('Login error:', err.message);
            toast.error(`Login failed: ${err.message || 'Unknown error'}`);
        }
    };

    const register = async (email: string, password: string): Promise<void> => {
        try {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) throw error as SupabaseError;
            toast.success('Signup successful');
            console.log('Signup successful');
        } catch (error: unknown) {
            const err = error as SupabaseError;
            console.error('Signup error:', err.message);
            toast.error(`Signup failed: ${err.message || 'Unknown error'}`);
        }
    };

    const logout = async (): Promise<void> => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error as SupabaseError;
            setIsAuthenticated(false); // Update state when logged out
            toast.success('You have been logged out');
            console.log('Logout successful');
            navigate('/login');
        } catch (error: unknown) {
            const err = error as SupabaseError;
            console.error('Logout error:', err.message);
            toast.error(`Logout failed: ${err.message || 'Unknown error'}`);
        }
    };

    useEffect(() => {
        // Check session status when the component mounts
        const checkSession = async (): Promise<void> => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsAuthenticated(true); // If there's a session, user is authenticated
            } else {
                setIsAuthenticated(false); // If no session, user is not authenticated
            }
        };

        checkSession();

        // Listen to changes in the session (e.g., login, logout)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });

        // Cleanup on component unmount
        return () => {
            subscription?.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{
            login,
            register,
            logout,
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
