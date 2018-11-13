import React, { Component } from "react";
import Results from "./Results";

const containerStyle = {
  width: 200,
  height: 200,
  marginLeft: "45%",
  marginTop: 20,
  backgroundColor: "yellow"
};

class GameOfChance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    let expression = Math.random() > 0.5;
    return (
      <div style={containerStyle}>
        <div>
          <button onClick={this.handleClick}>Play Again!</button>
          {expression == 1 ? (
            <Results fiftyFifty="You Win!" />
          ) : (
            <Results fiftyFifty="You Lose!" />
          )}
          <p>{"Turn: " + this.state.counter}</p>
        </div>
      </div>
    );
  }
}

export default GameOfChance;
