import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css';

import Screen from './Components/Screen';
import Helper from './Components/Helpers';
import Keyboard from './Components/Keyboard';
import Operator from './Components/Operators';

const App = () => {
  return (
    <Container className="App">
      <Row>
        <Screen />
      </Row>
      <Row>
        <Helper />
      </Row>
      <Row>
        <Keyboard />
        <Operator />
      </Row>
    </Container>
  );
}

export default App;
