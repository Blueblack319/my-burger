import React, { Fragment } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer, classes.Open];

  if (!props.opened) {
    sideDrawerClasses = [classes.SideDrawer, classes.Close];
  }
  return (
    <Fragment>
      <Backdrop show={props.opened} clicked={props.close} />
      <div className={sideDrawerClasses.join(" ")}>
        <div className={classes.Logo}>Logo</div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
