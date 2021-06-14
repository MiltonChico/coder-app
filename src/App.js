import './App.css';

import NavBar from './components/common/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/common/ItemCount';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting="Lista de Catalogo"/>
     <ItemCount value={0}/>
    </div>
  );
}

export default App;
