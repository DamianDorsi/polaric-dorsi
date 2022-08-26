import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
//import Promesas from "./components/Promesas"

export default function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer prop = "hola mundo"/>
    </div>
  );
}


