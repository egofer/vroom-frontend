'use strict';

var LSetup = require('../config/leaflet_setup');
var FileSaver = require('file-saver');
var dataHandler = require('./data_handler');


var exportToFile = function() {

    var collection = {
        "type": "FeatureCollection",
        "features": []
    };

    LSetup.map.eachLayer(function (layer) {
        if (layer instanceof L.Polyline || layer instanceof L.CircleMarker) {
            // Create GeoJSON object from marker
            var geojson = layer.toGeoJSON();
            // Push GeoJSON object to collection
            collection.features.push(geojson);
        }
    });

    // Export the collection to a GeoJSON file
    var d = new Date()
    let filename = `rutas_${(new Date().toJSON().slice(0,10))}.geojson`
    FileSaver.saveAs(new File([JSON.stringify(collection)], filename, {
      type: "text/plain;charset=utf-8"
    }), filename);

}


module.exports = {
    exportToFile: exportToFile
  };
