import React, { Component, Fragment } from 'react';

import Sandwich from '../../components/Sandwich/Sandwich'

class Builder extends Component {

    render() {
        return(
            <Fragment>
                <Sandwich />
                <div>BuildControls</div> 
            </Fragment>
        )
    }
}

export default Builder;