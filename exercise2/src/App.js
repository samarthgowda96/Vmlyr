import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Badge} from 'react-bootstrap'

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
                  <img src=" https://kittenrescue.org/wp-content/uploads/2015/01/KittenRescue_FB3.jpg" alt="kittens pic" width="380px" height="200px"/>
              </div>
              <p class="flexbox-title-sub">We are a charity organization that takes in rescue kittens and give them to owners.<a href="/more" className="flexbox-title-sub">More...</a></p>
            </div>
            <div class="flexbox-item flexbox-item-2">
            <h2 className="flexbox-titles">Our Kitties</h2>
              <div className="images">
                  <img src="https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min-1024x569.jpg" alt="kittens pic" width="380px" height="200px"/>
              </div>
              <p class="flexbox-title-sub">Our Kitties are given proper shots and are cleaned up for their new homes, <a href="/more" className="flexbox-title-sub">More...</a></p>
            </div>
            <div class="flexbox-item flexbox-item-3">
            
            <h2 className="flexbox-titles">What You Can Do</h2>
              <div className="images">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdPR4hcDJlNKhrKNonet2OqgKC58UqjnZlA&usqp=CAU" alt="kittens pic" width="380px" height="200px"/>
              </div>
              <p class="flexbox-title-sub">Take in a rescue kitten! We need more owners who are willing to take one home with them.<a href="/more" className="flexbox-title-sub">More...</a></p>

            </div>
          </div>
    </div>
  </div>
  );
}

export default App;
