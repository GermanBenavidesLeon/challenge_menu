import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'



function App() {
  return (
    <div className="App">
    <NavBar />
    <h1 className="AppH1">Nuestro Menu</h1>
    <ItemListContainer />
    
    </div>
  );
}

export default App;
