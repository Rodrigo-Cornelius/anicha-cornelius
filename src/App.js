import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
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
            <Route path='/cart'>
              <Cart/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
