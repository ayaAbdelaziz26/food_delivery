import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import {Routes,Route} from 'react-router-dom';
import Cart from './Pages/Cart/Cart';

function App() {
  const [cancel,setCancel]=useState(false);
  return (
    <>
    {cancel?<LoginSignup setCancel={setCancel}/>:<></>}
    <div className="App">
      <Navbar setCancel={setCancel}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
