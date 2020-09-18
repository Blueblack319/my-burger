import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    ordered: false,
    price: 4,
    disabled: true,
  };

  handleAddIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    this.setState({ ingredients: updatedIngredients });
  };

  handleDeductIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    this.setState({ ingredients: updatedIngredients });
  };

  handleOrdered = () => {
    this.setState({ ordered: true });
  };

  handleContinueOrder = () => {
    return;
  };

  handleCancleOrder = () => {
    this.setState({ ordered: false });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let ingredient in disabledInfo) {
      disabledInfo[ingredient] = disabledInfo[ingredient] <= 0;
    }

    let burger;
    let orderSummary;

    if (this.state.ingredients) {
      burger = (
        <Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            adding={this.handleAddIngredient}
            deducting={this.handleDeductIngredient}
            ordered={this.handleOrdered}
            disabled={disabledInfo}
          />
        </Fragment>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.price}
          orderContinued={this.handleContinueOrder}
          orderCancled={this.handleCancleOrder}
        />
      );
    }
    return (
      <Fragment>
        <Modal
          ordered={this.state.ordered}
          cancleOrder={this.handleCancleOrder}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Fragment>
    );
  }
}

export default BurgerBuilder;
