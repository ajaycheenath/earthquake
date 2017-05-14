import React, { Component } from 'react';
import rangeStyle from "../css/range.css";
class RangeSelector extends Component {
  static propTypes = {
        start: React.PropTypes.number,
        end: React.PropTypes.number,
        selectedRange: React.PropTypes.number,
        onClick: React.PropTypes.func
  };
  render() {
      const {start, end, selectedRange, onClick} = this.props;
      const range = [];
      for(let i = start ; i <= end; i++) {
        const selected = selectedRange === i ? "selected" : "";
        range.push(<span key={i} className={rangeStyle.numberCircle + " " + rangeStyle[selected]} onClick={(event) => onClick(i)}>{i}</span>);
      }
      return(<div>{range}</div>);
  }
}

export default RangeSelector;
