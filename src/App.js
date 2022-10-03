import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import TerminarCompra from './components/TerminarCompra'

export default function App() {
  
  return (
      <CartProvider>
        <BrowserRouter>
        <NavBar />
      
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/comprar' element={<TerminarCompra/>}/>
        </Routes>

        </BrowserRouter>
      </CartProvider>
  );
}


