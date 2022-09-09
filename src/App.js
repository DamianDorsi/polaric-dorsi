import './App.css';
import ItemDetail from './components/ItemDetail';
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
      

        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemDetailContainer />}/>
            <Route path='/item/:id' element={<ItemDetail/>}/>
        </Routes>



        {/*FOOTER*/}
      </BrowserRouter>

    </div>
  );
}


