//useReducer UseState alternatifidir. Context api yapısı ile çok uyumlu çalışır.
//-----------
//useRdecer terimleri Redux teknolojisine bezer(state, dispatch, action)
//redux-redux toolkit öğrne
//NextJS (ReactJS'in fullstack webFramework 'ü)

export const initialState={
    godList:[],
    categories:[],
    selectedCategory:"Tümü",
    search:"",
    selectedGod:"",
    mythGodName:"",
    mythGodNation:"Kökeni Seçiniz",
    mythGodAnimal:"",
    mythGodWeapon:"",
    mythGodPicture:"",
    mythGodDescription:"",
    mythGodType:""

}

export const reducer = (state,action)=>{
    switch(action.type){
        //case-1
        case "getMyGods": return{
            ...state,
            godList:action.payload
        }
        //case-2
        case "getCategories": return{
            ...state,
            categories:action.payload
        }
        //case-3
        case "formReset": return{
            ...state,
            mythGodName:"",
            mythGodNation:"Kökeni Seçiniz",
            mythGodAnimal:"",
            mythGodWeapon:"",
            mythGodPicture:"",
            mythGodDescription:"",
            mythGodType:""
        }
        //case-4(formdan gelenler)
        case"GodName": return{
            ...state,
            mythGodName: action.payload
        }
        //case-5(formdan gelenler)
        case"GodNation": return{
            ...state,
            mythGodNation: action.payload
        }
        //case-6(formdan gelenler)
        case"GodType": return{
            ...state,
            mythGodType: action.payload
        }
        //case-7(formdan gelenler)
        case"GodAnimal": return{
            ...state,
            mythGodAnimal: action.payload
        }
        //case-8(formdan gelenler)
        case"GodPicture": return{
            ...state,
            mythGodPicture: action.payload
        }
        //case-9(formdan gelenler)
        case"GodWeapon": return{
            ...state,
            mythGodWeapon: action.payload
        }
        //case-10(formdan gelenler)
        case"GodDescription": return{
            ...state,
            mythGodDescription: action.payload
        }
        //case-11(carddan gelenler)
        case"SelectedGod": 
        //projede herhangi bir card üzerinde edit butununa basıldığında seçilen tanrı state i doldururken aynı zaanda da seçilen bilgileri form aktarılan için form statleri de doldurulabilir böylelikle fazladan bir case yazılmadan ve contexte useeffect e ihtiyaç duyulmadan işlem gerçekleştirebilir
        const selected = action.payload
        return{
            ...state,
            selectedGod:selected,
            mythGodName:selected.mythGodName,
            mythGodNation:selected.mythNation,
            mythGodAnimal:selected.mythAnimal,
            mythGodWeapon:selected.mythGodWeapon,
            mythGodPicture:selected.mythGodPicture,
            mythGodDescription:selected.mythGodDescription,
            mythGodType:selected.mythGodType
        }
        //case-12(search gelenler)
        case"selectedCategory": return{
            ...state,
            selectedCategory: action.payload
        }
        //case-13(search gelenler)
        case"search": return{
            ...state,
            search: action.payload
        }
        //case-14(DATACONTEXT gelenler)
        case"AddGod": 
        //state i direk olarak action objesinden gelen newGod ile güncelleyemeyiz bu durumda eski verileri silip sadece yeniyi ekler eskilerin üzerine ekleme işlemi yapılması için yöntem kullanılmıştır
        const newGodList=[...state.godList,action.newGod]
        return{
            ...state,
            godList: newGodList
        }
        //case-15(DATACONTEXT gelenler)
        case"DeleteGod": 
        const updateGodList= state.godList.filter(item=>item.id !== action.id)
        return{
            ...state,
            godList: updateGodList
        }
        //case-16(DATACONTEXT gelenler)
        case"EditGod": 
        const edittedGodList= state.godList.map(item=>{
            if(item.id==state.selectedGod.id){
                return{...action.newGod}
            }else{
                return{...item}
            }
        })
        return{
            ...state,
            godList: edittedGodList
        }
        
    }
}
