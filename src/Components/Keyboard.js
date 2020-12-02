import React from 'react';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { saveNumber, saveAnswer } from '../State/reducer';

import Button from './Buttons';

const Keyboard = () => {
    const height = {
        height: '25%'
    }

    const started = useSelector(state => state.operationStared, shallowEqual);
    let number = useSelector(state => state.number, shallowEqual);
    const operator = useSelector(state => state.operator, shallowEqual);
    const answer = useSelector(state => state.answer, shallowEqual);
    

    const dispatch = useDispatch();

    const readValue = (e) => {
        const value = e.target.value;
        dispatch(saveAnswer(answer));

        if (!number && value !== "0") {
            number = value;
        } else {
            number += value;
        }
        dispatch(saveNumber(number));
    }

    const addPoint = () => {

    }


    return (
        <div className="keyboard">
            <Row style={height}>
                <Button content="7" width="33" getValue={readValue}></Button>
                <Button content="8" width="34" getValue={readValue}></Button>
                <Button content="9" width="33" getValue={readValue}></Button>
            </Row>
            <Row style={height}>
                <Button content="4" width="33" getValue={readValue}></Button>
                <Button content="5" width="34" getValue={readValue}></Button>
                <Button content="6" width="33" getValue={readValue}></Button>
            </Row>
            <Row style={height}>
                <Button content="1" width="33" getValue={readValue}></Button>
                <Button content="2" width="34" getValue={readValue}></Button>
                <Button content="3" width="33" getValue={readValue}></Button>
            </Row>
            <Row style={height}>
                <Button content="+/-" width="33"></Button>
                <Button content="0" width="34" getValue={readValue}></Button>
                <Button content="." width="33"></Button>
            </Row>
        </div>
    )
}

export default Keyboard;