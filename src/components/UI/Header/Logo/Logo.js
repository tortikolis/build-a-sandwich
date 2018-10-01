import React from 'react';

import classes from './Logo.css';

import logo from '../../../../Asets/sandwich.png';

const Logo = () => {

    return(
        <div className={classes.logo}>
            <img src={logo}/>
            <div>Build-a-Sandwich</div>
        </div>
    )  
}

export default Logo