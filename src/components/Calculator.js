import React, { Component } from 'react'

import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

class Calculator extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data:null
    }
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(data) {
    this.setState({
      data: data
    })
    console.log(data)
  }

  render() {
    return(
      <div className='calculator'>
        <Display />
        <ButtonPanel callback={this.handleCallback} />
        vkskvjldsjvdjdsvjlid
      </div>
    )
  }

}

export default Calculator;
