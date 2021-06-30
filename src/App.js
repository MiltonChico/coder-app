import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'


import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Features from './pages/Features'
import ItemDetailContainer from './components/container/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter >
      <NavBar />
        <Switch > 
            <Route exact path="/" component={ItemDetailContainer} />
            <Route path="/contact" component={Contact} />
            <Route path="/shop" component={Shop} />
            <Route path="/features" component={Features} />
        </Switch>
    </BrowserRouter >
  );
}

export default App;
