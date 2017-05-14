import React, { Component } from 'react';
import uicStyle from "../css/uic.css";
class Button extends Component {
  static propTypes = {
        name: React.PropTypes.string,
        styleClass: React.PropTypes.string,
        onClick: React.PropTypes.func
  };
  render() {
    const { name, styleClass, onClick } = this.props;
    return (
      <input type="button" value={name} className={uicStyle.button +" "+styleClass} onClick={onClick}/>
    );
  }
}

export default Button;
