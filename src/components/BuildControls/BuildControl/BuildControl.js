import React from 'react';

import classes from './BuildControl.css';

const BuildControl = (props) => {
    return (
       <div className={classes.BuildControl}> 
            <div className={classes.Label}>{props.ingredient}</div>
            <button className={classes.More} onClick={event => props.add(props.ingredient)} disabled={props.disable}>ADD</button>
            <button className={classes.Less} onClick={event => props.remove(props.ingredient)} disabled={!props.disable}>REMOVE</button>
       </div>
    )
}

export default BuildControl;