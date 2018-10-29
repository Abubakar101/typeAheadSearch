import React, { Component } from "react";
import typeHead from "./TypeHead";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleValueChange = async e => {
    this.setState({
        value: e.target.value
      }, async () => {
        const results = await typeHead(this.props.data, this.state.value);
        this.props.handleState(results);
      }
    );
  };

  render() {
    return (
      <section>
        <input
          className="input"
          value={this.state.value}
          onChange={this.handleValueChange}
        />
      </section>
    );
  }
}

export default Input;
