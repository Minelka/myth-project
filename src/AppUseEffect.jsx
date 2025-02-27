import React, { useEffect, useState } from 'react'
 
const App = () => {
  const [sayac,setSayac] = useState(0);
  const [deger,setDeger] = useState(true);
 
  //Genel UseEffect Kuralı: her kullanım durumunda useEffect mutlaka 1 kere pro başlangıcında tetiklenir.  
 
  //1.Durum useEffect: Herhangi bir bağımlılıktan ziyade uygulamada gerçekleşen her bir değişiklikte tekrar tekrar tetiklenir.
  // useEffect(()=>{
  //  console.log("1.Durum UseEffect Çalıştı!");
  // });
 
  //2.Durum useEffect: eğer boş bir Dependency Array tanımlanırsa. bu effectin hiçbir bağımlılığı yok demektir.
  // useEffect(()=>{
  //  console.log("2.Durum UseEffect Çalıştı!");
  // },[]);
 
  //3.Durum useEffect:Eğer dependency arraye bir veya daha fazla bağımlılık eklenirse. bağımlılıkları her değiştiğinde tekrar tetiklenir.
  // useEffect(()=>{
  //  console.log("3.Durum UseEffect Çalıştı!");
  // },[deger]);
 
  //4.Durum useEffect:Clean-up Fonksiyonu görevi ile.(ileri seviye)
  //örneğin debouncing yapıları
  useEffect(()=>{
   console.log("4.Durum UseEffect Çalıştı!");
      return ()=>console.log("Clean-up Metodu Çalıştı!");
  },[deger]);
 
 
 
 
 
  return (
    <>
      <button onClick={e=>setSayac(sayac-1)}>Azalt</button>
      <span> **{sayac}** </span>
      <button onClick={e=>setSayac(sayac+1)}>Arttır</button>
      <hr />
      <button onClick={e=>setDeger(!deger)}>
        {deger?"True":"False"}
      </button>
    </>
  )
}
 
export default App