import './App.css';

import NavBar from './components/common/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting="Lista de Catalogo"/>
    </div>
  );
}

export default App;
