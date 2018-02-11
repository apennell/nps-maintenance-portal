import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';
 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lng: -122.454558,
      lat: 37.806121,
      zoom: 12
    };
  }

  componentDidMount() {
  	// map.setCenter(this.state);
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/apennell/cjdj84uqw18l42qpqp14c9wlh',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

export default Map;
