import React from 'react';

import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    const controls = Object.keys(props.ingredients)
                    .map(ingredient => <BuildControl ingredient = {ingredient} add={props.add} remove={props.remove} disable={props.ingredients[ingredient]} key={ingredient}/>)
    return(
      <div className={classes.BuildControls}>
        <p className={classes.Price}><strong>Total Price: {props.totalPrice.toFixed(2)}$</strong></p>
        {controls}
        <button className={classes.Checkout} disabled={props.totalPrice === 1} onClick={props.purchase}>CHECKOUT</button>
      </div>  
    )
};

export default BuildControls;