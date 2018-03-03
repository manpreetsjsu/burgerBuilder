//layout acts as higher order component as it wraps the burgerBuilder
//component

import React, {Component} from 'react';
import Aux from '../Auxs/auxilary';

import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }

    sideDrawerClosedHandler=()=>{
        return(
            this.setState({showSideDrawer: false})
        );
    };
    sideDrawerToggleHandler=()=>(
        this.setState( (prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer};
        } )
    );

    render(){
        return(
            //returning JSX
            <Aux>
                <Toolbar sideDrawerToggle={this.sideDrawerToggleHandler}/>

                <SideDrawer closeSideDrawer={this.sideDrawerClosedHandler}
                            openSideDrawer={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

}

export default Layout;