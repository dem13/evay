import React from 'react';

import classes from './SignIn.module.css'
import FormInput from "../../UI/FormInput/FormInput";
import Button from "../../UI/Button/Button";

const SignInForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2>Sign In</h2>
      <div className={classes.body}>
        <div className={classes.inputs}>
          <FormInput label="Email" id="email"/>
          <FormInput label="Password" id="password" type="password"/>
        </div>
        <div className={classes.submit}>
          <Button>Sign in</Button>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;