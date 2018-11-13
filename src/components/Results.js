import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.fiftyFifty}</h1>
      </div>
    );
  }
}

export default Results;
