import React, {useContext} from "react";
import { Navigate } from "react-router-dom"
import  { AuthContext } from '../context/AuthContext'
export const RequiredAuth = ({ children }) => {
  const {auth} = useContext(AuthContext)
     if(!auth){
       return <Navigate to="/Login" replace={true}/>
     }
  return children;
};



// import { Navigate } from "react-router-dom"
// import  { AuthContext } from '../context/AuthContext'
// import { useContext } from "react"

//  export const Private = ({children})=>{
//     const {auth} = useContext(AuthContext)
//     if(!auth){
//       return <Navigate to="/Login" replace={true}/>
//     }
//     return children
//   }