import React, { Component } from "react";
import Input from "./components/Input";
import Results from "./components/Results";

import "./App.css";
var states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: states,
      isLoading: false,
      results: []
    };
  }

  handleState = arr => {
    if (arr) {
      this.setState({
        isLoading: true,
        results: arr
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Input data={this.state.data} handleState={this.handleState} />
        {this.state.isLoading && <Results results={this.state.results} />}
      </div>
    );
  }
}

export default App;
