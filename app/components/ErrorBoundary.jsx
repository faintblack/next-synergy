import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false };

    this.reset = this.reset.bind(this)
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI

    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }
  reset() {
    this.setState({ hasError: false });
    this.forceUpdate();
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      return this.props.fallback;
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={this.reset}
            // onClick={() => {
            //   this.setState({ hasError: false });
            //   this.forceUpdate();
            //   // this.reset
            //   console.log("haserror", this.state.hasError);
            // }}
          >
            Try again?
          </button>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
