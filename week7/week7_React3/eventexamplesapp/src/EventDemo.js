import React from 'react';

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };


  sayHello = () => {
    alert("Hello! Count has been updated.");
  };

  
  sayWelcome = (message) => {
    alert("Welcome Message: " + message);
  };

  
  handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked (Synthetic Event)");
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>🔘 Event Handling Demo</h2>
        <p><strong>Counter:</strong> {this.state.count}</p>
        
        <button onClick={this.increment}>Increment</button> &nbsp;
        <button onClick={this.decrement}>Decrement</button> &nbsp;

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>OnPress (Synthetic Event)</button>
      </div>
    );
  }
}

export default EventDemo;
