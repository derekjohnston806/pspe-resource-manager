/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The end-point for the script driving the content at index.html
*/
import React, { Component } from "react";
import ReactDOM             from "react-dom";
import {
  Navbar,
  NavbarHeader
} from "./components";

class Index extends Component {
  render() {
    return <div id="index">
      <Navbar>
        <NavbarHeader menuID="header-menu" brand="PSPE Resource Management System" />
      </Navbar>
    </div>
  }
}

ReactDOM.render(<Index />, document.getElementById("render-target"));
