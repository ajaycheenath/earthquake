import React, { Component } from 'react';
import EarthquakesDetails from "./EarthquakesDetails";

//Home page which loads the Earthquakes Details manin component..
class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <EarthquakesDetails />
        </div>
      </div>
    );
  }
}

export default Home;
