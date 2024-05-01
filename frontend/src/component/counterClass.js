import React from "react";

//inherit class
class CounterClass extends React.Component {
    constructor() {
        super();
        // bind function (increment)
        this.increment = this.increment.bind(this)
        this.state = {
            Number: 0
        }
    }

    increment() {
        this.setState({ //++this.state.Number 
            Number: this.state.Number +1
        })
    }

    render() {
        return(
            <div>
                <h3>Counter Class</h3>
                <h1>Counter = {this.state.Number}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default CounterClass;