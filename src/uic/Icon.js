import React, { Component } from 'react';
class Icon extends Component {
  handleClick = ()=> {
    if(this.props.onClick) {
      this.props.onClick();
    }
  }
  render() {
    return (
      <div onClick={this.handleClick} className="floatLeft">
        <svg className={this.props.styleClass}>
          <use xlinkHref={"/sprite.svg#"+this.props.name}></use>
        </svg>
        {this.props.text}
      </div>
    );
  }
}

export default Icon;
