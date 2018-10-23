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

  clearDisplay = (input, output) => {
    let display = [...this.state.display];
    display[0].input = input;
    display[0].output = output;
    this.setState({
      display: display
    })
  }

  equalDisplay = (input, output) => {
    let display = [...this.state.display];
    display[0].input.splice(0, display[0].input.length, input);
    display[0].output = output;
    this.setState({
      display: display
    })
  }

  addInput = (value) => {
    let display = [...this.state.display];
    if (display[0].input == 0) {
      display[0].input = []
    }
    display[0].input.push(value);
    display[0].output = value;
    this.setState({
      display: display
    })
  }

  replaceOpInput = (value) => {
    let display = [...this.state.display];
    display[0].input.splice(display[0].input.length - 1, 1, value);
    display[0].output = value;
    this.setState({
      display: display
    })
  }

  render() {

    let nums = this.state.nums.map(num => {
      return (
        <Nums
          text={num.text}
          id={num.id}
          key={num.id}
          addInput={this.addInput}
        />
      )
    })

    let operators = this.state.operators.map(operator => {
      return (
        <Operators
          text={operator.text}
          id={operator.id}
          key={operator.id}
          addInput={this.addInput}
          input={this.state.display[0].input}
          replaceOpInput={this.replaceOpInput}
        />
      )
    })

    let decimal = this.state.decimal.map(dec => {
      return (
        <Decimal
          text={dec.text}
          id={dec.id}
          key={dec.id}
          addInput={this.addInput}
          input={this.state.display[0].input}
        />
      )
    })

    let equals = this.state.equals.map(equal => {
      return (
        <Equals
          text={equal.text}
          id={equal.id}
          key={equal.id}
          input={this.state.display[0].input}
          equalDisplay={this.equalDisplay}
        />
      )
    })

    let display = this.state.display.map(displays => {
      return (
        <Display
          input={displays.input}
          output={displays.output}
          id={displays.id}
        />
      )
    })

    return (
      <div className="App">
        {display}
        <Clear clear={this.state.clear} clearDisplay={this.clearDisplay} />
        {decimal}
        {operators}
        {nums}
        {equals}
      </div>
    );
  }
}

export default App;
