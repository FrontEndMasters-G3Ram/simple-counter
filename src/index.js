import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

const increment = (state, props) => {
  const { max, step } = props;
  if (state.count >= max) {
    return;
  }
  return { count: state.count + step };
};
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // this.setState (function1, function2);
  // function1 is called before the state is updated
  // function2 is a call back function which is called after the state is updated
  increment() {
    this.setState(increment, () => {
      console.log('AFTER:: Value of count in state is ' + this.state.count);
    });
    console.log('BEFORE:: Value of count in state is ' + this.state.count);
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }
  render() {
    const { count } = this.state;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter max={15} step={5} />, document.getElementById('root'));
