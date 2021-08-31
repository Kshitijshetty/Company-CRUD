import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Company from './pages/Company'
import './App.css'
import Layout from './Layout/Layout';
import AddCompany from './pages/AddCompany';
import EditCompany from './pages/EditCompany';
import AuthContext from './Context/AuthContext';
import { useContext } from 'react';
function App() {
  const authCtx=useContext(AuthContext)
  return (
    <Layout>
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
      {authCtx.isLoggedIn &&<Route path='/Profile' exact>
        <Profile />
      </Route>}
      {authCtx.isLoggedIn && <Route path='/Company' exact>
        <Company />
      </Route>}
      {authCtx.isLoggedIn && <Route path='/Company/Add' exact>
        <AddCompany />
      </Route>}
      {authCtx.isLoggedIn &&<Route exact path="/Company/Edit/:id">
        <EditCompany />
      </Route>}
    </Switch>
    </Layout>
  );
}

export default App;
