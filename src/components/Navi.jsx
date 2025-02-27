import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/img/logo.png'
import '../assets/styles/navi.scss'
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Navi = () => {
  const {logout,isAuthenticated}=useContext(AuthContext);
  const navigate=useNavigate();
  const [currentUser, setCurrentUser]=useState("");

  const handleLogin=()=>{
    navigate("/login");
  }
  const handleLogout=()=>{
    logout();
    navigate("/login");
  }

  const getCurrentUser = async ()=>{
    const url= "https://api.escuelajs.co/api/v1/auth/profile";
    const response = await axios.get(url,{
      headers:{
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")).access_token}`
      }
    })
    const user = response.data;
    setCurrentUser(user);
  }
  useEffect(()=>{
    if(isAuthenticated){
    getCurrentUser();
    }
  },[isAuthenticated])

  return (
    <>
      <nav>
      <div className="brand">
        <img src={Logo} alt="brand" />
        <h3>THRONE OF GODS</h3>
      </div>
      <div className="usercard">
        {
          isAuthenticated&&
          <>
            <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="profil" />
            <span>{currentUser.name + "/" + currentUser.role}</span>
          </>
        }
        <button onClick={isAuthenticated?handleLogout:handleLogin}>{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </nav>
    </>
  )
}

export default Navi