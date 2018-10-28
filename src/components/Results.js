import React, { Component } from "react";

class Results extends Component {
  renderResults = () => {
    return (
      <div className="results">
        {this.props.results.map((word, index) => {
          return <h1 key={index}>{word}</h1>;
        })}
      </div>
    );
  };
  render() {
    return <div className="results">{this.renderResults()}</div>;
  }
}

export default Results;
