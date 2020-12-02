import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ width, content, getValue }) => <Button
    variant="none"
    style={{ width: `${width}%` }}
    value={content}
    onClick={(value) => getValue(value)}
>
    {content}
</Button>

export default CustomButton;