import React, { Component } from 'react'

import './Display.css'


const ValueDisplay = ({value}) => {
  if (value === null) {
    return ('');
  } else{
    return value
  }
};

class Display extends Component {


  constructor(props) {
    super(props)
    this.state = {
      value: null
    }

  }

  componentDidMount() {
    this.state = {
      value: this.props.value
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({value: this.props.value})
    }
  }

  render() {
    return(
      <div className="display">
        <ValueDisplay value={this.state.value} />
      </div>
    )
  }

}

export default Display;
