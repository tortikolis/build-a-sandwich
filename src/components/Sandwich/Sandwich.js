import React from 'react';

import classes from './Sandwitch.css';

import SandwichIngredient from './SandwichIngredients/SandwichIngredients'

const Sandwich = (props) => {
    const usedIngredients = Object.keys(props.ingredients).filter(ingredient => {
        return props.ingredients[ingredient]
    })
    const renderIngredients = 
    usedIngredients.length > 0 ? 
    usedIngredients.map(ingredient => {
        return <SandwichIngredient type={ingredient} key={ingredient}/>
    }) 
    : <h5>Please add some ingredients</h5>

    return (
        <div className={classes.Sandwich}>
            <SandwichIngredient type='breadTop' />
            {renderIngredients}
            <SandwichIngredient type='breadBottom' />
        </div>
    )
}

export default Sandwich;