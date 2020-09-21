import React, { Component } from "react";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/" component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
