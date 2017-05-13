import React, { Component } from 'react';
import drawerStyle from "../css/drawer.css";
import Icon from "./Icon";
//TODO work on animation refactor - explore react-transition-group
class RightDrawer extends Component {
  componentWillMount() {
    const {show} = this.props;
    this.setState({show});
  }
  onClose  = () =>{
    const {onClose} = this.props;
    this.setState({slideIn: false});
    setTimeout(() => {
      this.setState({show: false});
      if(onClose) {
        onClose();
      }
    },
    500);
  }

  componentWillReceiveProps(nextProps) {
    const {show} = nextProps;
    this.setState({show, slideIn: false});
    setTimeout(() => this.setState({slideIn: true}), 0);
  }

  componentDidMount () {
    this.setState({slideIn: true});
  }

  render() {
    const {show, slideIn} = this.state;
    const showStyle = show ? "show" : "hide";
    const rightDrawerStyle = slideIn ? drawerStyle.drawer + " " +drawerStyle.slideIn : drawerStyle.drawer + " " + drawerStyle.slideOut;
    return (
        <div className={showStyle}>
          <div className={drawerStyle.grayOut}>
          </div>
          <div className={rightDrawerStyle}>
            <Icon styleClass={drawerStyle.close} name="circle-x"  onClick={this.onClose}/>
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default RightDrawer;
