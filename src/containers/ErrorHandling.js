import React, { Component } from "react";

class ErrorHandling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <h1>Error: {error.message}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorHandling;
