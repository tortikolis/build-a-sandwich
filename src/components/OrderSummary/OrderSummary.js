import React, { Fragment } from 'react';

import classes from './OrderSummary.css';

const OrderSummary = (props) => {

    const usedIngredientsList = Object.keys(props.ingredients).filter(ingredient => props.ingredients[ingredient]).map(item => <li key={item}>{item}</li>)

    return (
        <Fragment>
            <h4>Your order</h4>
            <p>Delicious sandwich with following ingredients:</p>
            <ul>{usedIngredientsList}</ul>
            <p className={classes.Total}><span>Total price:</span> {props.price.toFixed(2)}$</p>
            <button className={classes.redButton} onClick={props.continue}>Back</button>
            <button className={classes.greenButton} onClick={props.continue}>Continue</button>
        </Fragment>
        
    )
}

export default OrderSummary;