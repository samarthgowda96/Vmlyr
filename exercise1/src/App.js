import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
const App=()=>{
    return(
        <div>
            <Container className="header-cont">
                <h1 className="header-name">
                    <Badge 
                    style={{textAlign:"center", color:"darkblue"}}>Hello there </Badge>
                </h1>
            </Container>
        </div>
    )
}
export default App;