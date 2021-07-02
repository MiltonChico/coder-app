import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'

import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer'


function App() {
  return (
    <BrowserRouter >
      <NavBar />
        <Switch > 
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/buzos" component={ItemListContainer} />
            <Route path="/pantalones" component={ItemListContainer} />
            <Route path="/remeras" component={ItemListContainer} />
            <Route path="/product/:id" component={ItemDetailContainer} />
        </Switch>
    </BrowserRouter >
  );
}

export default App;
