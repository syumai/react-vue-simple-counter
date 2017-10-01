import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="counter">
        <div className="current-count">
          {this.state.count}
        </div>
        <div className="button-container">
          <button className="increment" onClick={() => this.increment()}>
            +
          </button>
          <button className="increment" onClick={() => this.decrement()}>
            -
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

