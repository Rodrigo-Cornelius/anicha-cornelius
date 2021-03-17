import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <div className="bg-light bg-gradient">
        <NavBar/>
        <ItemListContainer greeting="Hola Mundo!!"/>
      </div>
    </>
  );
}

export default App;
