import React, { useContext } from 'react'
import '../assets/styles/card.scss'
import { FaPencilAlt,FaRegTrashAlt } from "react-icons/fa";
import DefaultGod from "../assets/img/random.jpg"
import DataContext from '../context/DataContext';
import AuthContext from '../context/AuthContext';
 
 
const Card = ({item}) => {
const {DeleteGod, state, dispatch}= useContext(DataContext);
const {isAuthenticated}=useContext(AuthContext);

const clickEdit=()=>{dispatch({type:"SelectedGod", payload:item})
window.scrollTo({top:0})
}

  return (

    ((item.mythGodName.toLowerCase().startsWith(state.search.toLowerCase())) ||
    (item.mythGodWeapon.toLowerCase().startsWith(state.search.toLowerCase())))
    &&

    <div className="card-container">
      <div className='card'>
        <img src={item.mythGodPicture?item.mythGodPicture:DefaultGod} alt="profil" />
        <div className="card-text">
          <span>{item.mythGodName}</span>
          <span>Köken: {item.mythNation}</span>
          <span>Görev: {item.mythGodType}</span>
          <span>Silahı: {item.mythGodWeapon.length<=15 ? item.mythGodWeapon : item.mythGodWeapon.substring(0,item.mythGodWeapon.substring(0,15).lastIndexOf(" "))+"..."}</span>
          <span>
            Açıklaması: {item.mythGodDescription.substring(0,item.mythGodDescription.substring(0,70).lastIndexOf(" "))+"..."}
          </span>
        </div>
      </div>
      {
        isAuthenticated&&
        <>
            <button onClick={()=>DeleteGod(item.id)} className="delete"><FaRegTrashAlt className='icon'/></button>
            <button onClick={()=>clickEdit()} className="edit"><FaPencilAlt className='icon'/></button>
        </>
      }
    </div>
  )
}
 
export default Card
 