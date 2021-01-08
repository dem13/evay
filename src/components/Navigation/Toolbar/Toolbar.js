import React from 'react';

import logo from '../../../logo.png'
import './Toolbar.css'

const Toolbar = () => {
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
        <div className="header-button">
            <div/>
            <div/>
            <div/>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;