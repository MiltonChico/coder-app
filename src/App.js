import './App.css';

import NavBar from './components/common/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/common/ItemCount';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting="Lista de Catalogo"/>
     <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
