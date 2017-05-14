import React, { Component } from 'react';
class Icon extends Component {

  static propTypes = {
        styleClass: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func,
        name: React.PropTypes.string.isRequired,
  };

  handleClick = ()=> {
    const {onClick} = this.props;
    if(onClick) {
      onClick();
    }
  }
  render() {
    const {styleClass, name} = this.props
    return (
      <div onClick={this.handleClick} className="floatLeft">
        <svg className={styleClass}>
          <use xlinkHref={"/sprite.svg#"+name}></use>
        </svg>
        {this.props.text}
      </div>
    );
  }
}

export default Icon;
