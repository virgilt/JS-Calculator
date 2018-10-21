import React, { Component } from 'react';
import Equals from './equals';
import Nums from './nums';
import Operators from './operators';
import Decimal from './decimal';
import Clear from './clear';
import Display from './display';


class App extends Component {
  state = {
    equals: [{text: '=', id: 'equals'}],
    nums: [
      {text: 0, id: 'zero'},
      {text: 1, id: 'one'},
      {text: 2, id: 'two'},
      {text: 3, id: 'three'},
      {text: 4, id: 'four'},
      {text: 5, id: 'five'},
      {text: 6, id: 'six'},
      {text: 7, id: 'seven'},
      {text: 8, id: 'eight'},
      {text: 9, id: 'nine'},
    ],
    operators: [
      {text: '+', id: 'add'},
      {text: '-', id: 'subtract'},
      {text: 'x', id: 'multiply'},
      {text: '/', id: 'divide'},
    ],
    decimal: [{text: '.', id: 'decimal'}],
    clear: [{text: 'AC', id: 'clear'}],
    display: [{input: 0, output: 0, id: 'display'}]
  }
  render() {


    return (
      <div className="App">
        <Display display={this.state.display} />
        <Clear clear={this.state.clear} />
        <Decimal decimal={this.state.decimal} />
        <Operators operators={this.state.operators} />
        <Nums nums={this.state.nums} />
        <Equals equals={this.state.equals} />
      </div>
    );
  }
}

export default App;
