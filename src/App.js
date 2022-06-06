import "./App.css";
import { Products } from './components/Products/Products'
import { Routes,Route } from 'react-router-dom';
import Product from "./components/Products/Product/Product";
import { RequiredAuth } from './hoc/RequiredAuth'
import {Login} from './pages/Login'
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        
      <Route path="/Products" element={<RequiredAuth>
        <Products/>
      </RequiredAuth>}>
      </Route>


      <Route path="/" element={<RequiredAuth>
        <Home/>
      </RequiredAuth>}>
      </Route>

      <Route path='/:id' element={<RequiredAuth>
        <Product/>
      </RequiredAuth>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
