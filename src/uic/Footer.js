import React, { Component } from 'react';
import drawerStyle from "../css/drawer.css";
class Footer extends Component {
  render() {
    return (
        <div className={drawerStyle.footer}>
          {this.props.children}
        </div>
    );
  }
}

export default Footer;
