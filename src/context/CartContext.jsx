import axios from "axios";
import { createContext,useState,useEffect } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState([])
  async function getData(){
      let res = await fetch('http://localhost:8080/cartItems')
      .then ((data)=> data.json())
      setCart(res)
  }
  useEffect(()=>{
    getData()
  },[cart.length])
  const cartItemCount = cartItems(cart)
  function cartItems(cart){
    let sum = 0;
    for(let i = 0;i<cart.length;i++){
      sum+=cart[i].count
    }
    return sum
  }
  function Poster (data){
    axios.post('http://localhost:8080/cartItems',{...data})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  
  return <CartContext.Provider value={{cart,Poster,cartItemCount}}>
          {children}
         </CartContext.Provider>;
};
