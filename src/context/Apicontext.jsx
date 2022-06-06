import { createContext,useState,useEffect } from "react";



export const ApiContext = createContext()

export const  ApiContextProvider =({children})=>{
    const [data,setData] = useState([])
    async function getData(url){
        let res = await fetch(url)
        .then ((data)=> data.json())
        setData(res)
    }

    const [prod,setProd] = useState({})
    async function getProd(url){
        let res = await fetch(url)
        .then ((data)=> data.json())
        setProd(res)
    }
    
    return <ApiContext.Provider value={{data,getData,prod,getProd}}>
            {children}
           </ApiContext.Provider>
}


