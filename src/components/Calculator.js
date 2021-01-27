import React, { Component } from 'react'

import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

import update_calculator_data from '../logic/calculate'


class Calculator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayed_value:null,
      value:null,
      sign:null,
      total:null
    }
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(data) {
    this.setState(update_calculator_data(this.state, data))
    console.log("oui")
  }

  render() {
    return(
      <div className='calculator'>
        <Display value={this.state.displayed_value} />
        <ButtonPanel callback={this.handleCallback} />
      </div>
    )
  }

}

export default Calculator;
