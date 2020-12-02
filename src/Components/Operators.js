import React from 'react';

import Row from 'react-bootstrap/Row';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import Button from './Buttons';

import { startOperation, savePrevNumber, calculate, saveOperator } from '../State/reducer';

const Operator = () => {
    const height = {
        height: '25%'
    }

    const number = useSelector(state => state.number, shallowEqual);
    const prevNumber = useSelector(state => state.prevNumber, shallowEqual);
    const prevOperator = useSelector(state => state.prevOperator, shallowEqual);
    const answer = useSelector(state => state.answer, shallowEqual);

    const dispatch = useDispatch();

    const addOperator = (e) => {
        const operator = e.target.value;
        if (!!prevNumber && !!prevOperator) {
            dispatch(calculate({ number, prevNumber, prevOperator }));
        }
        dispatch(saveOperator(operator));
        dispatch(savePrevNumber(number));
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