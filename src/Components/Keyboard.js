import React from 'react';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { saveNumber, saveAnswer } from '../State/reducer';

import Button from './Buttons';

const Keyboard = () => {
    const height = {
        height: '25%'
    }

    let number = useSelector(state => state.number, shallowEqual);
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
        if (!number) {
            number = "0.";
        } else if (!number.includes('.')) {
            number += '.';
        }
        dispatch(saveAnswer(answer));
        dispatch(saveNumber(number));
    }

    const makeOposite = () => {
        if(!!answer && !number){
            number = answer;
        }
        console.log({number})
        if (!!number && number !== "0") {
            if (number > "0") {
                number = "-" + number;
            } else {
                number = number.substr(1);
            }
        }
        dispatch(saveAnswer(number));
        dispatch(saveNumber(number));
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
                <Button content="+/-" width="33" getValue={makeOposite}></Button>
                <Button content="0" width="34" getValue={readValue}></Button>
                <Button content="." width="33" getValue={addPoint}></Button>
            </Row>
        </div>
    )
}

export default Keyboard;