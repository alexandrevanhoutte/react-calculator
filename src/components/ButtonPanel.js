import React, { Component } from 'react'

import Button from '../components/Button';

class ButtonPanel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.handleCallback = this.handleCallback.bind(this)
  }

  handleCallback(button_data) {
    this.props.callback(button_data)
  }

  render() {
    return(
      <div className='buttonpanel'>
        <p>ButtonPanelComponent</p>
        <Button callback={this.handleCallback} value='1' />
      </div>
    )
  }

}

export default ButtonPanel;
