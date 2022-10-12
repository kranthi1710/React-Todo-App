import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters]; //we need to clone counters array and original state must not be modified by us instead react must update it
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; //Pushing the counter into cloned counters array
    counters[index].value++;
    this.setState({ counters });
    //console.log({ ...counter }, " ", counters[index]);
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters }); // if key and value are same, then give only key inside {}
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onHandleIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
