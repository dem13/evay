import React from 'react';

import classes from './DrawerToggle.module.css'

const DrawerToggle = (props) => {
  let attachedClasses = [classes.DrawerToggle];

  if(props.opened) {
    attachedClasses.push(classes.Closed)
  }

  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked}>
      <div/>
      <div/>
      <div/>
    </div>
  );
};

export default DrawerToggle;