import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
  
     <Nav fill defaultActiveKey="/home" className="navbar" variant="dark" bg="dark" >
      <Nav.Item className="link" variant="dark" bg="dark">
        <Nav.Link href="/home" className="link" variant="dark" bg="dark">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/aboutus" className="link">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Adopt" className="link">Adopt</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Kittens" className="link"> Kittens</Nav.Link>
      </Nav.Item>
    </Nav>
    <Container
    
    </div>
  );
}

export default App;
