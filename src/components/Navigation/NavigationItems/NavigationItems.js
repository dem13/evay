import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = ({itemClicked}) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true} clicked={itemClicked}>Home</NavigationItem>
        <NavigationItem link="/sign-in" clicked={itemClicked}>Sign in</NavigationItem>
        <NavigationItem link="/sign-up" clicked={itemClicked}>Sign up</NavigationItem>
    </ul>
);

export default NavigationItems;