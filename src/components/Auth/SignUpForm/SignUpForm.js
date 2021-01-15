import React from 'react';

import classes from './SignUp.module.css'
import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button/Button";

const SignUpForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Sign up</h2>
      <div className={classes.body}>
        <div className={classes.inputs}>
          <FormInput label="Email" id="email"/>
          <FormInput label="Password" id="password" type="password"/>
          <FormInput label="Password Confirmation" id="password" type="password"/>
        </div>
        <div className={classes.submit}>
          <Button>Sign up</Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;