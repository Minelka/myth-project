import React, { useContext, useRef, useState } from 'react'
import '../assets/styles/login-page.scss'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext';
import bold from '../assets/img/bold2.gif'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login}=useContext(AuthContext);
  const navigate= useNavigate();

  const handleLogin =async(e)=>{
    e.preventDefault();
    try{
      await login(username,password);
      console.log("Giriş Başarılı");
      navigate("/");
      
    }
    catch(error){
      alert("Login Failed!");
      setUsername("");
      setPassword("");
      console.log("Giriş Başarısız");

    }
  }

  return (
    <div className='login-page'>
        <form onSubmit={handleLogin}>
            <h3>Login</h3>
            <input value={username} onChange={e=>setUsername(e.target.value)}type="text" placeholder='Username'/>
            <input value={password} onChange={e=>setPassword(e.target.value)}type="text" placeholder='Password'/>
            <input type="submit" value={"Login"}/>
            <Link to="/">Giriş Yapmadan Devam Etmek...</Link>
            <div className='bold'>
            <img src={bold} alt="simsek" />
            </div>
        </form>
    </div>
  )
}

export default LoginPage