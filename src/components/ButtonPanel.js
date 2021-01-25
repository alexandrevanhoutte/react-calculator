import React, { Component } from 'react'

import Button from '../components/Button';

import './ButtonPanel.css'

class ButtonPanel extends Component {

  constructor(props) {
    super(props)
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(button_data) {
    this.props.callback(button_data)
  }

  render() {
    return(
      <div className='buttonpanel'>
        <p>ButtonPanelComponent</p>
        <div className='row'>
          <Button callback={this.handleCallback} value='1' />
          <Button callback={this.handleCallback} value='2' />
          <Button callback={this.handleCallback} value='3' />
        </div>
        <div className='row'>
          <Button callback={this.handleCallback} value='4' />
          <Button callback={this.handleCallback} value='5' />
          <Button callback={this.handleCallback} value='6' />
        </div>
        <div className='row'>
          <Button callback={this.handleCallback} value='7' />
          <Button callback={this.handleCallback} value='8' />
          <Button callback={this.handleCallback} value='9' />
        </div>
        <div className='row'>
          <Button callback={this.handleCallback} value='0' />
        </div>


      </div>
    )
  }

}

export default ButtonPanel;
