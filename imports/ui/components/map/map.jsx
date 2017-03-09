import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Intro component
export default class Map extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
  }

  componentDidMount(){

  }

  render() {

    return (
      <div id="map" className="container">
          <div className="weather-data row center-block">
            <div id="name" className="col-sm-12 col-md-4">
              <h4>Name</h4>
              <p id="name-box"></p>
            </div>
            <div id="description" className="col-sm-12 col-md-4">
              <h4>Currently</h4>
              <div id="icon-box"></div>
              <p id="description-box"></p>
            </div>
            <div id="temp" className="col-sm-12 col-md-4">
              <h4>Temperature</h4>
              <p id="temp-box"></p>
            </div>
          </div>
          <div className="weekly-forecast">
            <ul id="weekly-list">

            </ul>
          </div>
      </div>
    );
  }
}
