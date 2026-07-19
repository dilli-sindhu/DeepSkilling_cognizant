import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    // Binding methods to the component instance
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // Method (a): increments the counter value
  increment() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  // Method (b): says hello with a static message
  sayHello() {
    alert('Hello! The counter has been incremented.');
  }

  // Decrement method
  decrement() {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  }

  // Increment button invokes BOTH methods (a) and (b)
  handleIncrementClick() {
    this.increment();
    this.sayHello();
  }

  // Step 4: Function that accepts an argument ("welcome")
  sayWelcome(message) {
    alert(message);
  }

  // Step 5: Synthetic event handler - onClick (React's cross-browser event system)
  handlePress(event) {
    alert('I was clicked');
    console.log('Synthetic event type:', event.type);
  }

  render() {
    return (
      <div>
        <h2>Counter Example</h2>
        <p>Counter Value: {this.state.counter}</p>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <h2>Say Welcome Example</h2>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>

        <h2>Synthetic Event Example</h2>
        <button onClick={this.handlePress}>Click Me</button>
      </div>
    );
  }
}

export default EventExamples;