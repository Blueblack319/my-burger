import React, { Component } from "react";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Route exact path="/" component={BurgerBuilder} />
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
