import React from 'react';
import Row from 'react-bootstrap/Row';

import Button from './Buttons';

const Keyboard = () => {
    const height = {
        height: '25%'
    }
    return (
        <div className="keyboard">
            <Row style={height}>
                <Button content="7" width="33"></Button>
                <Button content="8" width="34"></Button>
                <Button content="9" width="33"></Button>
            </Row>
            <Row style={height}>
                <Button content="4" width="33"></Button>
                <Button content="5" width="34"></Button>
                <Button content="6" width="33"></Button>
            </Row>
            <Row style={height}>
                <Button content="1" width="33"></Button>
                <Button content="2" width="34"></Button>
                <Button content="3" width="33"></Button>
            </Row>
            <Row style={height}>
                <Button content="+/-" width="33"></Button>
                <Button content="0" width="34"></Button>
                <Button content="." width="33"></Button>
            </Row>
        </div>
    )
}

export default Keyboard;