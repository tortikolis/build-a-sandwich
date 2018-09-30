import React from 'react';

import classes from './SandwichIngredients.css';

const SandwichIngredients = (props) => {
    let ingredient = null;
    if(props.type === 'breadTop'){
        ingredient = <div className={classes.breadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
    } else {
        ingredient = <div className={classes[props.type]}></div>
    }



    return (
       ingredient 
    )
}

export default SandwichIngredients;