import React from 'react';

import classes from './FormInput.module.css'
import Input from "../Input/Input";

const FormInput = (props) => {
  return (
    <div className={classes.FormInput}>
      <label htmlFor={props.id}>{props.label}</label>
      <Input {...props}/>
    </div>
  );
};

export default FormInput;