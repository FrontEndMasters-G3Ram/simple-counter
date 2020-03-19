import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button>Increment</button>
          <button>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    );
  }
}

render(<Counter />, document.getElementById('root'));
