import React from 'react';
import SignInForm from "../components/Auth/SignInForm/SignInForm";

const SignIn = () => {
  const submitHandler = e => {
    e.preventDefault();
    alert("Signing in...");
  }

  return (
    <div>
      <SignInForm onSubmit={submitHandler}/>
    </div>
  );
};

export default SignIn;