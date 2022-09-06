import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/*LO QUE SIEMPRE SE MUESTRA*/ }
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer />
        



        {/*<Routes>*/}
            {/*<Route path="/" element={<ItemListContainer/>}/>*/}
            {/*<Route path="/category/:id" element={<ItemListContainer/>}/>*/}
            {/*<Route path='/product/:id' element={<ItemDetailContainer/>}/>*/}
        {/*</Routes>*/}



        {/*FOOTER*/}
      </BrowserRouter>

    </div>
  );
}


