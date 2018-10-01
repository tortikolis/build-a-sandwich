import React from 'react';

import classes from './Nav.css';

const Nav = () => {
    return (
        <ul className={classes.Nav}>
            <li><a>Checkout</a></li>
            <li><a>Builder</a></li>
        </ul>
    )
}

export default Nav;