'use strict';

module.exports = {
  tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  // Issue with CORS? To temporarily unlock access to the demo go to cors-anywhere.herokuapp.com
  // host: 'https://cors-anywhere.herokuapp.com/http://xxx.xx.xxx.xx',
  host: 'http://localhost',
  port: '3000',
  maxTaskNumber: 100,
  overpassEndpoint: 'https://overpass-api.de/api/interpreter'
};
