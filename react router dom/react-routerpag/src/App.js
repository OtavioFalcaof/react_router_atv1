import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Cidade from './Cidade'
import Musica from './Musica'

import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/musica" component={ Musica } />
          <Route path="/cidade" component={ Cidade } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
