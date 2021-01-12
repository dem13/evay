import React from 'react';

import classes from './SideDrawer.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const SideDrawer = (props) => {

  let attachesClasses = [classes.SideDrawer, classes.Close]

  if(props.open) {
    attachesClasses = [classes.SideDrawer];
  }

  return (
    <div className={attachesClasses.join(' ')}>
      <NavigationItems/>
    </div>
  );
};

export default SideDrawer;