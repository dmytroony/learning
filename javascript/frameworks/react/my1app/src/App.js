import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function App() {
  return (
      // or to use an empty tag
      <div>
        <h1>Hello, World!</h1>
        <Button variant="primary">Button</Button>
      </div>
  );
}

export default App;
