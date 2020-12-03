import React from 'react';
import Row from 'react-bootstrap/Row';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { equal, saveNumber } from '../State/reducer';

import Button from './Buttons';

const Helpers = () => {

    const dispatch = useDispatch();

    let number = useSelector(state => state.number, shallowEqual);

    const allClear = () => {
        dispatch(equal(null));
    }

    const clearEntry = () => {
        dispatch(saveNumber(null));
    }

    const editNumber = () => {
        if (!!number && number !== "") {
            number = number.substring(0, number.length - 1);
            console.log({ number });
            dispatch(saveNumber(number));
        }
    }

    return (
        <div className="helpers">
            <Row style={{ height: '100%' }}>
                <Button width="35" content="CE" getValue={clearEntry}></Button>
                <Button width="35" content="<--" getValue={editNumber}></Button>
                <Button width="30" content="AC" getValue={allClear}></Button>
            </Row>
        </div>
    )
}

export default Helpers;