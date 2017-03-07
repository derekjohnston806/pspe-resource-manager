/**
    index.js

    @author:
      - Derek Johnston

    @desc:
      - The end-point for the script driving the content at index.html
*/
import React, { Component } from "react";
import ReactDOM             from "react-dom";

class Index extends Component {
  render() {
    return <div id="index">
      <h1>PSPE Resource Management System</h1>
    </div>
  }
}

ReactDOM.render(<Index />, document.getElementById("render-target"));
