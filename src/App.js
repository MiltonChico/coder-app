import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'

import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer'

import ThemeContext from './context/context'

function App() {
  return (
    <ThemeContext.Provider value={'test'}>
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
    </ThemeContext.Provider>
  );
}

export default App;
