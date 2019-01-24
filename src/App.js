import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoute from './Dashboard/Route';
import configureStore from "./store";

const  reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class App extends Component {
  render() {
    return (
      <Provider store = {reduxStore} >
       <div className="App">
       <Router>  
      <div>
      <MainRoute/>
      </div>

      </Router>
      </div>
      </Provider>
    );
  }
}

export default App;

