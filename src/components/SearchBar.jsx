import React, { useContext } from 'react'
import '../assets/styles/searchBar.scss'
import { GrInspect } from "react-icons/gr";
import DataContext from '../context/DataContext';

const SearchBar = () => {
  const {state,dispatch}= useContext(DataContext);
  return (
    <div id='esb' className='searchBar'>
      <ul>
        {
          state.categories.map((item)=>
            <li onClick={e=>dispatch({type:"selectedCategory", payload:e.target.innerText})} key={item.id}>{item.categoryName}</li>
          )
        }
      </ul>
      <div className="searchBar-input">
      <input onChange={e=>dispatch({type:"search", payload:e.target.value})} type="text" placeholder='Ara...' />
      <GrInspect className='search-icon'/>
      </div>
    </div>
  )
}

export default SearchBar