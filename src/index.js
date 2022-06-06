import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApiContextProvider } from "./context/Apicontext";
import { AuthContextProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <AuthContextProvider>
    <ApiContextProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ApiContextProvider>
    </AuthContextProvider>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
