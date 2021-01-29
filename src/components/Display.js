import React, { Component } from 'react'

import './Display.css'


class Display extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({value: this.props.value})
    }
  }

  render() {
    return(
      <div className="display">
        {this.state.value}
      </div>
    )
  }

}

export default Display;
