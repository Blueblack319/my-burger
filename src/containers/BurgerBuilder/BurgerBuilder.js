import React, { Component, Fragment } from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1,
    },
    ordered: false,
    totalPrice: 6.9,
    disabled: true,
    loading: false,
  };

  handleAddIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const oldTotalPrice = this.state.totalPrice;
    const updatedTotalPrice = oldTotalPrice + INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredients });
    this.setState({ totalPrice: updatedTotalPrice });
  };

  handleDeductIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const oldTotalPrice = this.state.totalPrice;
    const updatedTotalPrice = oldTotalPrice - INGREDIENT_PRICE[type];
    this.setState({ ingredients: updatedIngredients });
    this.setState({ totalPrice: updatedTotalPrice });
  };

  handleOrdered = () => {
    this.setState({ ordered: true });
  };

  handleContinueOrder = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Crazybirdz",
        address: {
          street: "TestStreet 1",
          zipCode: "42134",
          country: "Korea",
        },
        email: "crazybirdz@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios({
      method: "post",
      url: "/orders.json",
      data: order,
    })
      .then((res) => this.setState({ loading: false, ordered: false }))
      .catch((err) => this.setState({ loading: false, ordered: false }));
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
            price={parseFloat(this.state.totalPrice.toFixed(2))}
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
          price={parseFloat(this.state.totalPrice.toFixed(2))}
          orderContinued={this.handleContinueOrder}
          orderCancled={this.handleCancleOrder}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
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

export default withErrorHandler(BurgerBuilder, axios);
