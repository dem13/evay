import React from 'react';

import classes from './NavigationItem.module.css';
import {Link, useRouteMatch} from "react-router-dom";

const NavigationItem = ( props ) => {
  let match = useRouteMatch({
    path: props.link,
    exact: true,
  });

  return (
    <li className={classes.NavigationItem}>
      <Link
        to={props.link}
        onClick={props.clicked}
        className={match ? classes.active : null}>{props.children}</Link>
    </li>
  )
};

export default NavigationItem;