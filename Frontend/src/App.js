import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import './App.css'
function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Homepage />
      </Route>
      <Route path='/SignUp' exact>
        <SignUp />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
