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
      value: this.props.value
    }
  }

  render() {
    return(
      <div className="display">
        <ValueDisplay value={this.props.value} />
      </div>
    )
  }

}

export default Display;
