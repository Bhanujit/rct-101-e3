import React , {useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ApiContext } from '../../../context/Apicontext'
import { CartContext } from '../../../context/CartContext'
import axios from 'axios'

const Product = () => {
  // Note: this id should come from api
      const {id} = useParams()
      const {prod} = useContext(ApiContext)
       const {getProd} = useContext(ApiContext)
       useEffect(()=>{
           getProd(`${process.env.REACT_APP_ABCD}/products/${id}`)
       },[])
       
       const {cart} = useContext(CartContext)

       const {cartItemCount} = useContext(CartContext)
       console.log(cart[0].id)
       console.log(prod.id)
       
       function addToCart(prod){
          for(let i = 0;i<cart.length;i++){
             if(prod.id === cart[i].id){
              console.log(true)
             }
             else{
               console.log("add")
             }
          }
       }





       const Container = styled.div`
        height : 500px;
        width: 800px;
        margin: 100px auto;
        box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
        background-color: whitesmoke;
        padding: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
       `
  return (
    <Container data-cy={`product-${prod.id}`}>
      <h1 data-cy="product-name">{prod.name}</h1>
      <h3 data-cy="product-description">{prod.description}</h3>
      <button data-cy="product-add-item-to-cart-button" onClick={()=>{
        addToCart(prod)
      }}> Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">
         Increment
        </button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">
          Decrement
        </button>
        <button data-cy="product-remove-cart-item-button">
          Remove
        </button>
      </div>
    </Container>
  );
};

export default Product;





// import React , {useContext,useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import styled from 'styled-components'
// import { ApiContext } from '../../context/Apicontext'

// export const SingleProduct = () => {
//     const {id} = useParams()
//     const {prod} = useContext(ApiContext)
//     const {getProd} = useContext(ApiContext)
//     useEffect(()=>{
//         getProd(`http://localhost:8080/watches/${id}`)
//     },[])
//     console.log(prod)


//     //styled
//     const Container = styled.div`
//     height : 500px;
//     width: 800px;
//     margin: 100px auto;
//     box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     background-color: whitesmoke;
//     padding: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// `
// const Image = styled.img`
//     height: 300px;
//     width: 300px;
// `
// const Sub = styled.div`
// height: 400px;
// width: 300px;
// display: flex;
// flex-direction: column;
// justify-content: center;
// `
//  const Button = styled.button`
//  height: 35px;
//  margin: 10px;
//  background-color: teal;
//  color: whitesmoke;
//  font-weight: bolder;
//  border-radius:5px;
//  border: 0.5px solid lightgray;
//  padding: 5px;
// `

//   return (
//     <div>
//         <Container>
//         <Image src={prod.image}/>
//         <Sub>
//         <h1>{prod.title}</h1>
//         <h1>Price:{prod.price}</h1>
//         </Sub>
//        </Container>
//     </div>
//   )
// }
