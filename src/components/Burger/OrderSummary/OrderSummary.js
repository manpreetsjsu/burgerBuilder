import React,{Component} from 'react';
import Aux from '../../../hoc/Auxs/auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    componentWillUpdate(){
        console.log('[Order Summary ] willUpdate');
    }


    render(){
        const ingredientSummary =
            Object.keys(this.props.ingredients).map(key => {
                return (
                    <li key={key}>
                        <span style={{textTransform:'capitalize'}}>{key}</span> : {this.props.ingredients[key]}
                    </li>
                );
            })

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Your Burger wth following Ingredients :</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice}</strong></p>
                <p>Continue to Checkout</p>
                <Button clicked={this.props.purchaseCancelled} btyType="Danger" >CANCEL ORDER</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }

}

export default OrderSummary;