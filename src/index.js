import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner loadingMessage="Please allow location access" />;
  }

  // we have to define the render method
  render() {
    return <div className="border red">{this.renderContent()}</div>;
    // 2nd method
    // return (
    //   <div>
    //     {this.state.lat === null ? (
    //       <h3>{this.state.errorMessage}</h3>
    //     ) : (
    //       <h1>Latitude: {this.state.lat}</h1>
    //     )}
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
