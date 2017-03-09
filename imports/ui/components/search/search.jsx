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
      Session.set('query', this.refs.search.value)
      let place = Session.get('query');
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
  forecastWeather() {
    $('#search-form').on('submit', (e) => {
      e.preventDefault();
      //clear previous list
      $('#weekly-list').html('');
      let place = Session.get('query');
        Meteor.call("forecastWeather",{query:place},(error, res) => {
          Session.set('weeklyWeather', res.data);
            let weekly = Session.get('weeklyWeather');
            if(weekly) {
              weekly.list.map((item) => {
                $('#weekly-list').append('<li>'+item.main.temp+'</li>');
              });
            }else {
              $('#weekly-list').html('error');
            }
        });
    })
  }
  componentDidMount(){
    this.callWeather();
    this.forecastWeather();

  }

  render() {
    return (
      <div id="search-bar" className="container">
        <div className="sidebar row">
          <form id="search-form" className="col-sm-12 col-md-12">
            <div className="form-group col-sm-12 col-md-12">
              <input type="text" ref="search" id="search" className="form-control"/>
              <button id="activate" className="btn btn-default" type="submit" className="form-control">WEATHER</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
