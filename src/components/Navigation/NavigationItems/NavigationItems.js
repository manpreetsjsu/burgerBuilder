//navigation items are the list of the links to be displayed in the
//navigation bar,,, since there are more than one navigation items or
//links, therefore we will split navigationItems component into
// singleNavigationItem component which we can reuse in navigationItems component
//again and again

import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './SingleNavigationItem/NavigationItem';



const navigationItems=(props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem links="/" activeLink={true} >Burger Builder</NavigationItem>
        <NavigationItem links="/">Checkout</NavigationItem>

    </ul>
);

export default navigationItems;