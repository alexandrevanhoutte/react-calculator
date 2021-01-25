import React, { Component } from 'react'


class Button extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.callback(this.props.value)
  }

  render() {
    return(
      <div className="button">
        <button onClick={this.handleClick}>
          {this.props.value}
        </button>
      </div>
    )
  }

}

export default Button;
