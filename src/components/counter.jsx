import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   //props will get data from one component to other
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  // };

  // Constructor will have access to this keyword which event handler method does not have
  // IN order to fix that, event handler method is binded with this keyword in constructor
  // Instead of using bind from constructor, we can use Arror function for event handler method
  // As Arrow functions will inherit this keyword
  //   constructor() {
  //     super();
  //     console.log(this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  styles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  render() {
    // props -- Plain JS object that includes all the attributes that we set in the component
    // in below value and selected are these properties but key is not listed under props

    // props vs state
    // props include data that we give to a component. Props is read only
    // state includes data that is local or private to that component. Other components cannot access that state.
    console.log("props", this.props);
    return (
      <React.Fragment>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          {/* On click method must not be given parenthesis and case sensitive */}
          <button
            onClick={() => this.props.onHandleIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/* <div> */}
        {/* True and true--will return second/last value */}
        {/* {this.state.tags.length === 0 && "Please insert a new Tag! "};
          {this.renderTags()}
        </div> */}
      </React.Fragment>
    );
  }

  // Event Handling
  // Use Arrow function to access this
  // IN react, we directly don't update the state, instead we need to use setState() and it will tell react
  // that we are updating the state, then React will figure out what part of state is changed and based on that
  // It will bring the DOM in sync with irtual DOM

  //In Angular,
  // handleIncrement = () => {
  //   // console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  //we can write arrow function diectly inline in onClick method
  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  //Conditionl Rendering
  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No tags Available!!!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h1>ZEROOO</h1> : count;
  }

  // Rendering classes Dynamically
}

export default Counter;
