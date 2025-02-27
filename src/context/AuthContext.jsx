import { useState } from "react";
import { createContext } from "react";
import AuthService from "../services/AuthService";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [isAuthenticated, setAuthenticate]=useState(JSON.parse(localStorage.getItem("userToken")));//kontrol statetidir. loginli mi loginsiz mi diye kontrol eder.
    const login = async(username, password)=>{
        try{
            const response = await AuthService.login(username,password);
            if(response.access_token){
            setAuthenticate(JSON.parse(localStorage.getItem("userToken")))
        }
        }catch(error){
            // setAuthenticate(JSON.parse(localStorage.getItem("userToken")));
            // setAuthenticate(false);
            throw new Error(error);
        }
        
    }
    const logout=()=>{
        AuthService.logout();
        setAuthenticate(JSON.parse(localStorage.getItem("userToken")));
    }
    

    return <AuthContext.Provider value={{login,logout,isAuthenticated}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContext