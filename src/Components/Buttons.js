import React from 'react';
import Button from 'react-bootstrap/Button';

const CustomButton = ({ width, content }) => <Button variant="none" style={{ width: `${width}%` }}>{content}</Button>

export default CustomButton;