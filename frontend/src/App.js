import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Cities from './pages/Cities';
import City from './pages/City'
import Error404 from './pages/404';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/cities' component={Cities} />
        <Route path='/notfound' component={Error404} />
        <Route path='/city/:id' component={City} />
        <Redirect to='/notfound' />
      </Switch>    
    </BrowserRouter>
  )
}
export default App;