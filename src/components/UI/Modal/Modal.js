import React, { Fragment } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop'

const Modal = (props) => {
    return(
        <Fragment>
            <Backdrop show={props.show}/>
            <div className={classes.Modal} style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)'}}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal;