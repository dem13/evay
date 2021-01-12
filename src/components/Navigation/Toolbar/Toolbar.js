import React from 'react';

import logo from '../../../logo.png'
import './Toolbar.css'
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header>
      <div className="header-left">

      </div>
      <div className="header-center">
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
      </div>
      <div className="header-right">
        <DrawerToggle opened={props.sideDrawerOpened} clicked={props.sideDrawerToggled}/>
      </div>
    </header>
  );
};

export default Toolbar;