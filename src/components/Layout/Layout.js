import React, { Fragment } from 'react';

import Builder from '../../containers/Builder/Builder';
import Header from '../UI/Header/Header';


const Layout = () => {
    return (
        <Fragment>
            <Header />
            <Builder />
        </Fragment>
    )
}

export default Layout;