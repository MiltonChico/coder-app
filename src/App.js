import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import ItemListContainer from './components/container/ItemListContainer';

import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Features from './pages/Features'


function App() {
  return (
    <BrowserRouter >
      <NavBar />
        <Switch > 
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route path="/features" component={Features} />
        </Switch>
    </BrowserRouter >
  );
}

export default App;
