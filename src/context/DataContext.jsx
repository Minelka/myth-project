import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import { Flip, toast } from "react-toastify";
import { initialState, reducer } from "../reducer/reducer";

//Context oluşturması 
const DataContext=createContext();

//oluşturulan contexte bir sağlayıcı oluşturulması
export const DataProvider=({children})=>{
//projedeki tüm yapılar metotlar, stateler .... vs. buraya taşınacak!

//app.jsx den gelenler

//useState : önyüz ile ilgilidir. componet bazlı veri tutan yapılardır. Componet için oluşturduğumuz depolardır.
  //const[stateIsmı, setStateIsmi]=useSatet(InitialValue)
const [state,dispatch]= useReducer(reducer,initialState);
const{selectedGod,godList}=state;

  const getMythGods = async()=>{
  const url = "http://localhost:3005/Gods";
  const response = await fetch(url);
  const gods= await response.json();
  //setGodList(gods);
  //case-1
  dispatch({type:"getMyGods",payload:gods})

}
//getMythGods();//hatalı sonsuz get döngüsüne sokar

const getCategories = async()=>{
  const url="http://localhost:3005/Categories";
  const response =await axios.get(url);
  const categories = await response.data;
  // setCategories(categories);
  //case-2
  dispatch({type:"getCategories",payload:categories})
}

useEffect(()=>{
  getMythGods();
  getCategories();
},[]);

const AddNewGod = async(newGod)=>{
  let url = "http://localhost:3005/Gods";
    if(!selectedGod){
      //frontend ekleme
      newGod.id=(Number(godList[godList.length-1].id)+1).toString(),
    // setGodList([...godList,newGod])
    //isim:isim yollamanla isim olarak yollasanda olur
    //case-14
    dispatch({type:"AddGod", newGod})
    //backend ekleme
    
    const response = await axios.post(url, newGod);
    console.log("yeni eklenen tanrı:", response.data);
    //getMythGods();//gereksiz get atılmasına seep olur !
    //Toast Message
    toast.success('🦄 Yeni Tanrı yüklendi!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
    else{//düzenleme
      //Frontend Düznleme 
      newGod.id=selectedGod.id;
      // setGodList(prev=>prev.map(god=>{
      //   if(god.id=== selectedGod.id){
      //     //düzenlenen tanrı
      //     return {...newGod}
      //   }
      //   else{
      //     return {...god}
      //   }
      // }))
      //case-16
      dispatch({type:"EditGod", newGod})
      //Backend düzenleme 
      url+=`/${selectedGod.id}`
      const response2= await axios.put(url,newGod);
      console.log("düzenlenmiş tarnı", response2.data);
      // setSelectedGod("");
       //Toast Message
    toast.warning('🦄  Tanrı düzenlendi!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }   
}

const DeleteGod= async (id)=>{
    const confirmation = confirm("emin misin");
    if(confirmation){
        //Frontend den silme
  // setGodList(godList.filter(stateGelen=>stateGelen.id!== id));
  // setGodList(prev=>prev.filter(stateGelen=>stateGelen.id !== id));
  //case-15
  dispatch({type:"DeleteGod", id})
  //backend silme
  const url = `http://localhost:3005/Gods/${id}`;
  // const response = await axios.delete(url);//!tehlikeli
  const response = await axios.patch(url, {isDeleted:true});
  console.log("silinen tanrı:", response.data);
   //Toast Message
   toast.error('🦄 tanrı sliindi', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip,
    });
    }
}



  const handleSubmit= (e)=>{
    e.preventDefault();
    AddNewGod({
        
        mythGodName:state.mythGodName,
        mythNation :state.mythGodNation,
        mythAnimal :state.mythGodAnimal,
        mythGodType:state.mythGodType,
        mythGodPicture: state.mythGodPicture,
        mythGodWeapon: state.mythGodWeapon,
        mythGodDescription:state.mythGodDescription
    });
    //form reset
    // setMythGodName("");
    // setMythGodNation("");
    // setMythGodAnimal("");
    // setMythGodDescription("");
    // setMythGodPicture("");
    // setMythGodWeapon("");
    // setMythGodType("");
    //case-3
    dispatch({type:"formReset"});
  }
  //cse-11 de burası için düzenleme yapıldı burası editte yazdığımızda form kısmına bilgilerin gelmesini sağlar
  // useEffect(()=>{
  //   if(selectedGod){
  //     setMythGodName(selectedGod.mythGodName);
  //   setMythGodNation(selectedGod.mythNation);
  //   setMythGodAnimal(selectedGod.mythAnimal);
  //   setMythGodDescription(selectedGod.mythGodDescription);
  //   setMythGodPicture(selectedGod.mythGodPicture);
  //   setMythGodWeapon(selectedGod.mythGodWeapon);
  //   setMythGodType(selectedGod.mythGodType);
  //   }
  // },[selectedGod]);

return <DataContext.Provider value={{
    DeleteGod,//carddan gelenler
    handleSubmit, state, dispatch//formdan gelenler
}}>
            {children}
       </DataContext.Provider>
}

export default DataContext;