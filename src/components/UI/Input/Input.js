import React from 'react';

import './Input.module.css';

const Input = ({type, id, name}) => {
  return (
    <input id={id} name={name} type={type || 'text'}/>
  );
};

export default Input;