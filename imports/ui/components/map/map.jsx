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
      let place = this.refs.search.value;
        Meteor.call("callWeather",{query:place},(error, res) => {
          Session.set('currentWeather', res.data);
            let local = Session.get('currentWeather');
            let iconUrl = "http://openweathermap.org/img/w/" + local.weather[0].icon + ".png";
          if(local) {
            $('#name-box').html(local.name);
            $('#description-box').html(local.weather[0].description);
            $('#icon-box').html("<img src='" + iconUrl  + "'>")
            $('#temp-box').html(local.main.temp +' degrees');
          }else {
            $('.weather-data').html(error);
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
        <div className="sidebar row">
          <form id="search-form" className="col-sm-12 col-md-12">
            <div className="form-group col-sm-12 col-md-12">
              <input type="text" ref="search" id="search" className="form-control"/>
              <button id="activate" className="btn btn-default" type="submit" className="form-control">WEATHER</button>
            </div>
          </form>
        </div>


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
      </div>
    );
  }
}
