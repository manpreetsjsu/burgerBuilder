import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxs/auxilary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer=(props)=>
{

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.openSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.openSideDrawer}
                      clicked={props.closeSideDrawer}/>

        <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
    );

}

export default sideDrawer;