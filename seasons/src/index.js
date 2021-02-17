import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, errorMessage: '' }; // only time we directly assign to this.state
  // }
  state = { lat: null, errorMessage: '' }; // this does the same as what the constructor is doing

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), // updates our initial state
      err => this.setState({ errorMessage: err.message }) // runs if no data is returned
    );
  }

  // Render() must always be defined
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
