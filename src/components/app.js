import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './index';
import Detail from './detail';


class App extends Component {

  state = {
    list: {}
  }

  handleSearch = query => {
    if (query.length) {
      const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
      fetch(BASE_URL, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          const newListObj = data.items.reduce((obj, item) => {
            obj[item.id] = item
            return obj;
          }, {});

          if (Object.keys(newListObj).length) {
            this.setState({ list: newListObj });
          }
        });
    } else {
      this.setState({ list: {} });
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-container">
            <Switch>
              <Route path="/detail/:id" render={props => (
                <Detail {...props} list={this.state.list} />
              )} />

              <Route exect path="/" render={props => (
                <Index {...props} list={this.state.list} handleSearch={this.handleSearch} />
              )} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
