import React from "react";

import classes from "./Toolbar.module.css";

const Toolbar = () => {
  return (
    <div className={classes.Toolbar}>
      <div>Menu</div>
      <div>Logo</div>
      <div>Navigation</div>
    </div>
  );
};

export default Toolbar;
