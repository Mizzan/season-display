import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 77lk3W6zAx-7Um66tkcYxj2k4Z18PqJN3fjTKBFX4jA',
      },
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
