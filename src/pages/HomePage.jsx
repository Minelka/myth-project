//import React, { useContext, useRef } from 'react'
import Navi from '../components/Navi'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'
import { Outlet } from 'react-router-dom'
// import boldmp from '../assets/img/bold.mp3'
// import AuthContext from '../context/AuthContext'

//const {isAuthenticated}=useContext(AuthContext);
// const audioRef = useRef(null);
// if (audioRef.current) {
//   audioRef.current.play(); 
// }


const HomePage = () => {
  return (
    <>
      {/* <audio ref={audioRef} src={boldmp}></audio> */}
      <Navi/>
      <Outlet/>
      <SearchBar/>
      <CardList/>
    </>
  )
}

export default HomePage