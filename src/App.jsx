
import React, { Component } from "react";

export  default class ClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "gopidongari",
      count:0
    };
  }
    

  changeName = () => {
    this.setState({ name: "varma" });
  };J

   increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}, {this.state.count}</h1>
        <button onClick={this.changeName}>count </button>
            <button onClick={()=>{this.increment()}}>Increment</button>
        <button onClick={()=>{this.decrement()}}>decrement</button>
      </div>
    );
  }
}
