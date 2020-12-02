import React from 'react';

import Row from 'react-bootstrap/Row';
import Button from './Buttons';

const Operator = () => {
    const height = {
        height: '25%'
    }
    return (
        <div className="operators">
            <Row style={height}>
                <Button content="+" width="50" ></Button>
                <Button content="-" width="50"></Button>
            </Row>
            <Row style={height}>
                <Button content="*" width="50"></Button>
                <Button content="/" width="50"></Button>
            </Row>
            <Row style={height}>
                <Button content="&radic;" value="sqrt" width="50"></Button>
                <Button content="%" width="50"></Button>
            </Row>
            <Row style={height}>
                <Button content="=" width="100"></Button>
            </Row>
        </div>
    )
}

export default Operator;