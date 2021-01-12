import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active={true}>Home</NavigationItem>
        <NavigationItem link="/">Sign in</NavigationItem>
        <NavigationItem link="/">Sign up</NavigationItem>
    </ul>
);

export default NavigationItems;