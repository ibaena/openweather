import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


// Intro component
export default class Map extends Component {
  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
  }
  callWeather() {
    $('#search-form').on('submit', (e) => {
      e.preventDefault();
      let query = 'bayonne';
      let place = this.refs.search.value;
        Meteor.call("callWeather",{query:place},(error, res) => {
          Session.set('currentWeather', res.data);
            let local = Session.get('currentWeather');

          if(local) {
            $('#name').html(local.name);
            $('#description').html(local.weather[0].description);
            $('#temp').html(local.main.temp);
          }else {
            $('.weather-data').html('error: ', error);
          }
        });
    })
  }

  componentDidMount(){
    this.callWeather();
  }

  render() {
    return (
      <div id="map" className="container">
        <form id="search-form" className="col-sm-12 col-md-6 col-md-offset-3">
          <div className="form-group">
            <input type="text" ref="search" id="search" className="form-control"/>
          </div>
          <div className="form-group">
            <button id="activate" type="submit" className="form-control">WEATHER</button>
          </div>
        </form>

          <div className="weather-data" className="row">
            <div id="name" className="col-sm-12 col-md-4"></div>
            <div id="description" className="col-sm-12 col-md-4"></div>
            <div id="temp" className="col-sm-12 col-md-4"></div>
          </div>
      </div>
    );
  }
}
