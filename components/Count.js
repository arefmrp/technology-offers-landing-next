import React, { Component } from "react";
import Clock from "./Clock";

class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { deadline: "June, 29, 2022" };
    }
    render() {
        return (
            <div className="App">

                <Clock deadline={this.state.deadline} />
            </div>
        );
    }
}
export default Count;