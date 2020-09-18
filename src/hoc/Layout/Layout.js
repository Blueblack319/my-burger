import React, { Component, Fragment } from "react";

import classes from "./Layout.module.css";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    opened: false,
  };

  handleSHowSideDrawer = () => {
    this.setState({ opened: true });
  };

  handleCloseSideDrawer = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  };

  render() {
    return (
      <Fragment>
        <Toolbar showSideDrawer={this.handleSHowSideDrawer} />
        <SideDrawer
          opened={this.state.opened}
          close={this.handleCloseSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
