import React from 'react';
import SignUpForm from "../components/Auth/SignUpForm/SignUpForm";

const SignUp = () => {
  const submitHandler = e => {
    e.preventDefault();
    alert("Signing up...");
  }

  return (
    <div>
      <SignUpForm onSubmit={submitHandler}/>
    </div>
  );
};

export default SignUp;