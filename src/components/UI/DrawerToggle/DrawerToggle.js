import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const DrawerToggle = (props) => (
  <div onClick={props.clicked} style={{ cursor: "pointer" }}>
    <FontAwesomeIcon icon={faBars} size="2x" />
  </div>
);

export default DrawerToggle;
