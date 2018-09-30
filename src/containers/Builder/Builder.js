import React, { Component, Fragment } from 'react';

import Sandwich from '../../components/Sandwich/Sandwich';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';


const PRICES = {
    iceberg: 0.1, 
    tomato: 0.1,
    bacon: 0.5,
    prosciutto: 0.8, 
    salami: 0.4, 
    chicken: 0.7, 
    cheese: 0.3,
}

class Builder extends Component {
    state = {
        ingredients: {
            iceberg: false, 
            tomato: false,
            bacon: false,
            prosciutto:false, 
            salami: false, 
            chicken: false, 
            cheese: false,
        },
        totalPrice: 1,
        purchase: false
    }

    addIngredient = type => {
        const ing = { ...this.state.ingredients };
        ing[type] = true;
        const oldPrice = this.state.totalPrice;
        const newPrice = PRICES[type] + oldPrice;
        this.setState({
            ingredients: ing,
            totalPrice: newPrice
        })
    }

    removeIngredient = type => {
        const ing = { ...this.state.ingredients };
        ing[type] = false;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICES[type];
        this.setState({
            ingredients: ing,
            totalPrice: newPrice
        })
    }

    purchaseHandler = () => {
        this.setState({purchase: true});
    }

    checkoutHandler = () => {
        this.setState({purchase: false})
    }

    render() {
        return(
            <Fragment>
                <Modal show={this.state.purchase}>
                    <OrderSummary 
                    ingredients={this.state.ingredients} 
                    price={this.state.totalPrice}
                    continue={this.checkoutHandler}/>
                </Modal>
                <Sandwich ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredients={this.state.ingredients} 
                totalPrice={this.state.totalPrice} 
                add={this.addIngredient} 
                remove={this.removeIngredient} 
                purchase={this.purchaseHandler}/>
            </Fragment>
        )
    }
}

export default Builder;