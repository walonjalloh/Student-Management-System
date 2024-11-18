import { Outlet,useLocation,Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

export default function AuthLayout(){
    const { isAuthenticated } = useContext(AuthContext) || {}
    const location = useLocation()
    return isAuthenticated ? 
    <Outlet/> 
    : 
    <Navigate to='/login' state={{from:location}} replace/> 
}    