import React, { Component } from 'react'

import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

import calculate from '../logic/calculate'


class Calculator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value:null,
      sign:null,
      total:null
    }
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(data) {
    this.setState(calculate(this.state, data))
    console.log("oui")
  }

  render() {
    return(
      <div className='calculator'>
        <Display value={this.state.value} />
        <ButtonPanel callback={this.handleCallback} />
      </div>
    )
  }

}

export default Calculator;
