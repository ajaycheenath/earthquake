import React, { Component } from 'react';
import Icon from "../uic/Icon";
import iconStyle from "../css/icon.css";
import drawerStyle from "../css/drawer.css";
class Header extends Component {
  render() {
    return (
        <div className={drawerStyle.content}>
          {this.props.children}
        </div>
    );
  }
}

export default Header;
