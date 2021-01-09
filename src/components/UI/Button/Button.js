import React from 'react';

import classes from "./Button.module.css"

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick || null} className={classes.Button}>
      {children}
    </button>
  );
};

export default Button;