import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate()
  const[form,setForm]=useState({
             "emailid":"user@1234",
             "password":"1234"
     })
  const {handleAuth}= useContext(AuthContext)
  function handleSubmit(){
    handleAuth(true)
    navigate('/')
  }
  const Container = styled.div`
          height: 200px;
          width: 300px;
          display: flex;
          flex-direction:column;
          justify-content: center;
          align-items: center;
          margin: 100px auto;
    `
  return (
    <Container>
      <h1>Login</h1>
      <input data-cy="login-email" value={form.emailid} />
      <input data-cy="login-password" value={form.password}/>
      <button data-cy="login-submit" onClick={()=>{handleSubmit()}}> login</button>
    </Container>
  );
};

 

