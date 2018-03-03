import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},

];

const buildControls =(props)=>
{
    return (
        //returning array of BuildControl components as these
        //are reusable components
        <div className={classes.BuildControls}>
            <div > Price of Your Burger is <strong>{props.price.toFixed(2)}</strong></div>
            {controls.map(element => {
                return(
                    <BuildControl
                        label={element.label}
                        key={element.label}
                        add={()=> props.ingredientAdded(element.type) }
                        delete={()=> props.ingredientDeleted(element.type)}
                        disabled ={props.disabled[element.type]}
                    />
                );
            })}
            <button onClick={props.purchasing}
                className={classes.OrderButton}
                disabled={!props.purchasable}>Order Now</button>
        </div>
    );
}

export default buildControls;