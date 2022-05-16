import React, { Component } from "react";

import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <span onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </span>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
