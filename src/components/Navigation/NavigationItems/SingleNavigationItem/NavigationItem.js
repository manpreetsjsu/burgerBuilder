import React from 'react';
import classes from './NavigationItem.css';

const navigationItem =(props)=>(
    <li className={classes.NavigationItem}>
        <a href={props.links}
        className={props.activeLink ? classes.active : null}>{props.children}</a> </li>

)

export default navigationItem;