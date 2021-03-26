import './App.css';
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <div className="bg-light bg-gradient">
        <NavBar/>
        {/* <ItemListContainer greeting="Hola Mundo!!"/> */}
        <ItemDetailContainer/>
      </div>
    </>
  );
}

export default App;
