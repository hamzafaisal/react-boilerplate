import React, { Fragment } from "react";
import Navbar from "../common/Navbar";

function Layout(props) {
  return (
    <Fragment>
      <Navbar />
      <div>{props.children}</div>
    </Fragment>
  );
}

export default Layout;
