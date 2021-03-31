import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="bg-light bg-gradient">
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route path='/category/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route path= '/item/:itemId'>
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
