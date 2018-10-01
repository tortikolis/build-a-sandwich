import React from 'react';

import classes from './Header.css';

import Logo from './Logo/Logo';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div className={classes.Header}>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header;