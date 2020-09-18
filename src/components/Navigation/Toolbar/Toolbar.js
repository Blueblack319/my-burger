import React from "react";
import DrawerToggle from "../../UI/DrawerToggle/DrawerToggle";
import NavigationItems from "../NavigationItems/NavigationItems";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div className={classes.Toolbar}>
      <DrawerToggle clicked={props.showSideDrawer} />
      <div className={classes.DesktopOnly}>Logo</div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Toolbar;
