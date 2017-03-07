/**
    NavbarHeader.react.js

    @author:
      - Derek Johnston

    @desc:
      - A component wrapper for a .navbar-header element.
*/
import React, { Component } from "react";

class NavbarHeader extends Component {
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
    return <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={this.props.menuID} aria-expanded="false">
        <span className="sr-only">Toggle Navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">{this.props.brand}</a>
    </div>
  }
}

NavbarHeader.propTypes = {
  menuID: React.PropTypes.string.isRequired,
  brand : React.PropTypes.string.isRequired
};

export default NavbarHeader;
