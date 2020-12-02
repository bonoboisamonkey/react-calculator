import React from 'react';
import Row from 'react-bootstrap/Row';

import Button from './Buttons';

const Helpers = () => {
    return (
        <div className="helpers">
            <Row style={{ height: '100%' }}>
                <Button width="23" content="AC"></Button>
                <Button width="24" content="C"></Button>
                <Button width="23" content="CE"></Button>
                <Button width="30" content="<--"></Button>
            </Row>
        </div>
    )
}

export default Helpers;