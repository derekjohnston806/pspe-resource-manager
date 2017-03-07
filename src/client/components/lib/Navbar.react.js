/**
    Navbar.React.js

    @author:
      - Derek Johnston

    @desc:
      - A container for the main header component.
*/
import React, { Component } from "react";

class Navbar extends Component {
  /**
    render()

    @desc:
      - Update the component in the DOM.

    @param:
      - null

    @return:
      - null
  */
  render() {
    return <nav className="navbar navbar-default">
      <div className="container">
        { this.props.children }
      </div>
    </nav>
  }
}

export default Navbar;
