import React,{Component} from 'react';
import Aux from '../../hoc/Auxs/auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component{
    state={
        //ingredient is an object not an array, therefore map methd can not be used
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0,
        },
        totalPrice : 4,
        purchasable: false,
        purchasing: false
    }

    purchasingHandler=()=>{
        this.setState({purchasing: true});
    }

    updatePurchaseState =(ingredients)=> {
        const sumOfIngredients =
            Object.keys(ingredients).map(key=>{
                return(
                    ingredients[key]
                );
            }).reduce((sum,elm)=>{
                return sum+elm ;
            } ,0);
        this.setState({purchasable : sumOfIngredients>0 });
    }

    addIngredientHandler =(type)=>
    {
        const oldcount = this.state.ingredients[type];
        const updatedCount = oldcount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    deleteIngredientHandler =(type)=>
    {
        const oldcount = this.state.ingredients[type];
        if(oldcount <=0)
            return;
        const updatedCount = oldcount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceReduction = INGREDIENT_PRICES[type];
        const oldTotalPrice = this.state.totalPrice;
        const newPrice= oldTotalPrice - priceReduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseCancelHandler =()=>{
        this.setState({purchasing : false});
    }

    purchaseContinueHandler=()=>
    {
        alert('You can Continue !');
    }

        render(){
        const disabledButtonInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledButtonInfo)
        {
            //{ salad: true, meat: false, bacon: true}
            disabledButtonInfo[key] = disabledButtonInfo[key] <=0 ;
        }
            return(
                <Aux>
                    <Modal showAnimation={this.state.purchasing}
                           modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredients}
                                      purchaseContinued={this.purchaseContinueHandler}
                                      purchaseCancelled={this.purchaseCancelHandler}
                                      totalPrice={this.state.totalPrice.toFixed(2)}/>
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientDeleted={this.deleteIngredientHandler}
                        disabled ={disabledButtonInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        purchasing={this.purchasingHandler}/>

                </Aux>
            );

        }
}

export default BurgerBuilder;