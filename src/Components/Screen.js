import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const Screen = () => {

    const answer = useSelector(state => state.answer, shallowEqual);
    const number = useSelector(state => state.number, shallowEqual);

    console.log({answer})
    return (
        <div className="screen">
            {!!answer ? answer : number}
        </div>
    )
}

export default Screen;