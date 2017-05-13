import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { log } from "./config/Utils";
import { Provider } from "react-redux";
import store from "./store";

import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

//At this point there is only one route, but adding route for future enhancements
//TODO revist the need to route management
class AppRoute extends Component {

  render(){
    return (
      <div>
          <Router history={browserHistory}>
            <Route path="/" component={Home}>
              <Route path="home" component={Home} />
            </Route>
          </Router>
      </div>
    )
  }
}
//Wraping redux in case if we need to handle complex states in future (for no it is not required)
//But have seen in many react apps state management become mess after sometime.
//TODO revit the need of redux in this app
ReactDOM.render(<Provider store={store}>
  <AppRoute/>
</Provider>, document.getElementById('mainPanel'));
