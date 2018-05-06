import React, { Component } from 'react';
import Search from './search';
import List from './list';


class App extends Component {

  state = {
    list: []
  }

  handleSearch = query => {
    if (query.length) {
      const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
      fetch(BASE_URL, { method: 'GET' })
        .then(response => response.json())
        .then(date => {
          this.setState({ list: date.items });
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.handleSearch} />
        <List list={this.state.list} />
      </div>
    );
  }
}

export default App;
