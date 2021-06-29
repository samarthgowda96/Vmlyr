import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Badge} from 'react-bootstrap'

function App() {
  return (
    <div>
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
    <div className="cont-1">
      <h1 className="title-main">Saving<Badge bg="primary" className="title-main">Kitties.</Badge>One at a Time.</h1>
      <h3 className="title-sub">Adopt a rescue kitten and give it the love and care it needs</h3>
    </div>
    </div>
    <div>
      <div className="flexbox-cont">
            <div class="flexbox-item flexbox-item-1">
              <h2 className="flexbox-titles">What We Do</h2>
              <div className="images">
                  <img src=" https://images-na.ssl-images-amazon.com/images/I/51Ej2xA7CkL.jpg" alt="kittens pic" width="350px" height="200px"/>
              </div>
            </div>
            <div class="flexbox-item flexbox-item-2">
            <h2 className="flexbox-titles">Our Kitties</h2>
              <div className="images">
                  <img src=" https://images-na.ssl-images-amazon.com/images/I/51Ej2xA7CkL.jpg" alt="kittens pic" width="350px" height="200px"/>
              </div>
            </div>
            <div class="flexbox-item flexbox-item-3">What You Can Do</div>

      </div>
    </div>
   
    
    
    </div>
  );
}

export default App;
