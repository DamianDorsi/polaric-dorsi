import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount'
import FetchContainer from './test/FetchContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Promesas from "./components/Promesas"

{/*function onAdd(x) {
  alert("agregaste al carrito " + x + " productos");
}*/}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/*LO QUE SIEMPRE SE MUESTRA*/ }
        <NavBar />



        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        </Routes>



        {/*FOOTER*/}
      </BrowserRouter>

    </div>
  );
}


