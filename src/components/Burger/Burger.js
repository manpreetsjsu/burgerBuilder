import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger =  (props)=>{
    //going to convert ingredients coming from BurgerBuilder to array
    //first we have to convert ingredient object to array to use map
    //method on it, therefore object.key will convert it to array
    //lines9-14>outer map returns array of Burger Ingredients
    //line15->flatens the array/reduce array into single value
    //Flattening an array of arrays with the Reduce Method In JavaScript​​
    //map function returned us [[salad],[bacon],[cheese,cheese],[meat]]
    //reduce method will flat/reduce the above returned arrray of arrays to
    //[salad,bacon,cheese,cheese,meat] -> single array on which we can
    //use length method to see if array has ingredients or not
    //array of arrays [[],[],[],[]]->always return 3 but it should give zero
    //to us since there is no burger ingredient in the burger

    let  transformedIngredients = Object.keys(props.ingredients)
        .map( ingrdntKey => {
                return [...Array(props.ingredients[ingrdntKey])].map((_,i) => {
                   return <BurgerIngredient key={ingrdntKey+i} type={ingrdntKey}/> ;
                    });
        } ).reduce((prevVal,currVal)=>{
            return prevVal.concat(currVal)
        },[]);

    console.log(transformedIngredients);
    if(transformedIngredients.length ===0)
        transformedIngredients=<p>Please Add Ingredients</p>

  return(

        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>

        </div>

  );
};

export default burger;