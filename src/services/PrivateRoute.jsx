import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({special}) => {
  const{isAuthenticated}=useContext(AuthContext);
  return isAuthenticated ? special : <Navigate to="/"/>
}
