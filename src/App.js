import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/Context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route exact path="/" element={<ItemListContainer />}></Route>
                  <Route exact path="/menu" element={<ItemListContainer />}></Route>
                  <Route exact path="/categoria/:id" element={<ItemListContainer />}></Route>
                  <Route exact path="/detalle/:id" element={<ItemDetailContainer />}></Route>
                  <Route exact path="/Cart" element={<Cart />}/>
                </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    
  );
}

export default App;
