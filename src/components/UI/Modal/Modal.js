import React,{Component} from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxs/auxilary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.showAnimation !== this.props.showAnimation;
    }
    componentWillUpdate(){
        console.log('[Modal] Willupdate');    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.showAnimation} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style=
                        {{transform: this.props.showAnimation ? 'translateY(0)' : 'translateY(-100vh)',
                            opacity: this.props.showAnimation ? '1' : '0'
                        }}>
                    {this.props.children}
                </div>

            </Aux>
        );
    }

}



export default Modal;