import logo from './images/logo.png';
import './App.css';
import {Form, Button, Modal} from "react-bootstrap";
import {useState} from "react";
import axios from 'axios';
import AppTitle from './components/app-title';
import { config } from './config';

function App() {

    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false);

    const submit = (event) => {
        event.stopPropagation();
        let formData = new FormData();
        formData.append("E-Mail", email);
        console.log(formData);
        axios.post("https://script.google.com/macros/s/AKfycbxIGPYn-cpGQy58ey98EryBXtAGLznoVZeX6RgzN9V74PnXZFn3GmxTJ8wNiX4Q2aD9/exec", formData)
            .then(response => {
                setShow(true);
                setEmail('');
            })
            .catch(error => {
                console.error(error);
            })
    }

  return (
    <div className="App fade-in wrapper">
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Thank You</Modal.Title>
            </Modal.Header>
            <Modal.Body>We will notify you when products are available for purchase.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{padding: 56}}/>
          <div className={'mini-container'}>
              <AppTitle
                  text={'Launching this Holiday Season'}
                  color={config.primaryColor}
              />
              <AppTitle
                  text={'Check back soon, or enter your email to be notified when we are live:'}
                  color={config.secondaryColor}
                  subtitle
              />
              <Form style={{display: 'flex', flexDirection: 'row'}}>
                  <Form.Group controlId="formGridEmail" style={{flex: 1}}>
                      <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                  </Form.Group>
                  <Button variant="dark" onClick={submit}>
                      Submit
                  </Button>
              </Form>
          </div>


      </header>
    </div>
  );
}

export default App;
