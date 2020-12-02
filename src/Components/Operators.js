import React from 'react';

import Row from 'react-bootstrap/Row';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Button from './Buttons';

import { equal, savePrevNumber, calculate, saveOperator, saveNumber } from '../State/reducer';

const Operator = () => {
    const height = {
        height: '25%'
    }

    let number = useSelector(state => state.number, shallowEqual);
    const prevNumber = useSelector(state => state.prevNumber, shallowEqual);
    const prevOperator = useSelector(state => state.prevOperator, shallowEqual);
    const answer = useSelector(state => state.answer, shallowEqual);

    const dispatch = useDispatch();

    const addOperator = (e) => {
        const operator = e.target.value;
        console.log({ number, prevNumber, prevOperator });
        if (!!prevNumber && !!prevOperator) {
            dispatch(calculate({ number, prevNumber, prevOperator }));
        }
        dispatch(saveOperator(operator));
        dispatch(savePrevNumber(number));
    }

    const calculateSquareRoot = () => {
        if (!!answer & !number) {
            number = answer;
        }
        if (!!number) {
            number = Math.sqrt(number);
        }
        dispatch(saveNumber(number.toString()));
    }

    const calculatePercentage = () => {
        if (!!prevNumber) {
            number = prevNumber * number / 100;
            dispatch(saveNumber(number.toString()));
        }
    }

    const equalHandler = () => {
        if (!!prevNumber && !!prevOperator) {
            dispatch(calculate({ number, prevNumber, prevOperator }));
            dispatch(equal(answer));
        }
    }

    return (
        <div className="operators">
            <Row style={height}>
                <Button content="+" width="50" getValue={addOperator}></Button>
                <Button content="-" width="50" getValue={addOperator}></Button>
            </Row>
            <Row style={height}>
                <Button content="*" width="50" getValue={addOperator}></Button>
                <Button content="/" width="50" getValue={addOperator}></Button>
            </Row>
            <Row style={height}>
                <Button content="&radic;" width="50" getValue={calculateSquareRoot}></Button>
                <Button content="%" width="50" getValue={calculatePercentage}></Button>
            </Row>
            <Row style={height}>
                <Button content="=" width="100" getValue={equalHandler}></Button>
            </Row>
        </div>
    )
}

export default Operator;