import React, { Component } from 'react';
import uicStyle from "../css/uic.css";
class Toast extends Component {
  render() {
    return (
      <input type="button" value={this.props.name} className={uicStyle.button +" "+this.props.styleClass} onClick={this.props.onClick}/>
    );
  }
}

export default Toast;
