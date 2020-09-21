import React, { Component } from "react";

import axios from "../../axios-order";
import Order from "../../components/Order/Order";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios({
      method: "get",
      url: "orders.json",
    })
      .then((res) => {
        const orders = [];
        for (let key in res.data) {
          orders.push({
            id: key,
            ...res.data[key],
          });
        }
        this.setState({ loading: false, orders });
      })
      .catch((error) => this.setState({ loading: false }));
  }

  render() {
    const orders = this.state.orders.map((order) => {
      return (
        <Order
          ingredients={order.ingredients}
          price={order.price.toFixed(2)}
          key={order.id}
        />
      );
    });
    return <div>{orders}</div>;
  }
}

export default Orders;
