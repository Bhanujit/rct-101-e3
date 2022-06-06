import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {
  const navigate = useNavigate()
  let Container = styled.div`
           height: 2.6em;
           border-bottom:0.5px solid black;
           display: flex;
           align-items: center;
           justify-content: space-around;
         padding:5px 3em;
       `
     let Section = styled.div`
          min-width: 80px;
          text-align:center;
          border: 2px solid green;
  
       `

  const {handleAuth}= useContext(AuthContext)
  function handleSubmit(){
    handleAuth(false)
    navigate('/login')
  }
 const{cart} = useContext(CartContext)
 const {cartItemCount} = useContext(CartContext)
 
  return (
    <Container data-cy="navbar">
      <Section> <Link data-cy="navbar-home-link" to="/" className='plain-text'>HOME</Link> </Section>
      <span data-cy="navbar-cart-items-count">{cartItemCount}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>{handleSubmit()}}>Logout</button>
    </Container>
  );
};

export default Navbar;


// import React from 'react'
// import styled from 'styled-components'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// export const Navbar = () => {
//     let Container = styled.div`
//         height: 2.6em;
//         border-bottom:0.5px solid black;
//         display: flex;
//         align-items: center;
//         justify-content: space-around;
//         padding:5px 3em;
//     `
//     let Section = styled.div`
//         min-width: 80px;
//         text-align:center;
//         border: 2px solid green;

//     `
//   return (
//     <div>
//         <Container >
//             <Section> <Link to="/" className='plain-text'>HOME</Link> </Section>
//             <Section> <Link to="/Products" className='plain-text'>PRODUCTS</Link> </Section>
//             <Section> <Link to="/Login" className='plain-text'>LOGIN</Link></Section>
//             <Section> <Link to="/Admin" className='plain-text'>ADMIN</Link> </Section>
//         </Container>
//     </div>
//   )
// }
