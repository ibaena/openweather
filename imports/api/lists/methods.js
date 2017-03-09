import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
let appId = '&appid=199cc1597806786a2fc3b9125afcb63d';
let unit = '&units=imperial'

Meteor.methods({
  callWeather: function(query){
    let place = query.query;
    this.unblock();
    return HTTP.get(url+place+unit+appId, {});
  },
});
