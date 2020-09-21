import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "../Checkout/ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1,
    },
    price: 0,
  };

  componentDidMount() {
    console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients, price });
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Crazybirdz",
    //     address: {
    //       street: "TestStreet 1",
    //       zipCode: "42134",
    //       country: "Korea",
    //     },
    //     email: "crazybirdz@test.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axios({
    //   method: "post",
    //   url: "/orders.json",
    //   data: order,
    // })
    //   .then((res) => this.setState({ loading: false, ordered: false }))
    //   .catch((err) => this.setState({ loading: false, ordered: false }));
  }

  handleCancleCheckout = () => {
    this.props.history.goBack();
  };

  handleContinueCheckout = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <Fragment>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancle={this.handleCancleCheckout}
          continue={this.handleContinueCheckout}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              totalPrice={this.state.price}
              {...props}
            />
          )}
        />
      </Fragment>
    );
  }
}

export default Checkout;
