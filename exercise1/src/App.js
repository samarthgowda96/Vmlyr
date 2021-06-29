import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Badge from 'react-bootstrap/Badge'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const App=()=>{
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    
    const handleFullNameClick=()=>{
        alert(firstName+""+ lastName)
    }
    return(
        <div>
            <Container className="header-cont">
                <h1 className="header-name">
                    <Badge 
                    style={{textAlign:"center", color:"darkblue"}}>Hello there </Badge>
                </h1>
            </Container>
            

            <Container className="input-cont">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">firstName</InputGroup.Text>
                        <FormControl
                        placeholder="firstname"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=>{setFirstName(e.target.value)}}
                        />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">lastName</InputGroup.Text>
                        <FormControl
                        placeholder="lastname"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=>{setLastName(e.target.value)}}
                        />
                </InputGroup>

                <div className="btn">
                <Button variant="primary" size="lg" onClick={handleFullNameClick}>
                    Click me!
                </Button>
                </div>
            </Container>
           
                
        </div>
    )
}
export default App;