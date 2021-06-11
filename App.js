import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ListadePersonagens from './Componentes/ListadePersonagens';
import Detalhar from './Componentes/Detalhar'

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={ListadePersonagens} />
        <Route path='/personagem/:id' component={Detalhar} />

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
