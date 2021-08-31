import { useContext } from 'react';
import { useHistory,Link } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import  Container  from 'react-bootstrap/Container';
import  Button  from 'react-bootstrap/Button';
const MainNavigation = () => {
  const history=useHistory()
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler=()=>{
    authCtx.logout()
    history.push('/login')
  }
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
    <Navbar.Brand as={Link} to='/'>
        <div >Dashboard</div>
      </Navbar.Brand>
    <Nav className="justify-content-end">
    <Nav.Item>
      <Nav.Link  as={Link} to="/Company">Company</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  as={Link} to='/Profile'>Profile</Nav.Link>
    </Nav.Item>
    </Nav>
    <Nav >
    {!isLoggedIn ? (
      <Nav.Link as={Link} to='/login' ><Button variant="outline-secondary">Login</Button></Nav.Link>
    ):(
      <Nav.Link ><Button variant="outline-secondary" onClick={logoutHandler}>Logout</Button></Nav.Link>
    )}
    </Nav>
    </Container>
    </Navbar>
  );
};

export default MainNavigation;