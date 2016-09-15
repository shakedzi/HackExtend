import React, { Component } from 'react'

class Login extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div className="chair">
        <img src={this.state.chair.photo} alt={this.state.chair.name} title={this.state.chair.name} className="img-responsive"/>
      </div>
    );

  }
}

export default Login
