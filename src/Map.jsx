import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import Tooltip from './Tooltip.jsx';
import './Map.css';
 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

class Map extends Component {
  tooltipContainer;

  constructor(props) {
    super(props);

    this.state = {
      lng: -122.454558,
      lat: 37.806121,
      zoom: 12
    };
  }

  componentDidMount = () => {
  	// this.tooltipContainer = document.createElement('div');

  	// map.setCenter(this.state);
    const { lng, lat, zoom } = this.state;

    let map = new mapboxgl.Map({
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

    // const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
    //   offset: [-120, 0]
    // }).setLngLat([0,0]).addTo(map);

    // map.on('click', function(e) {
    // 	const features = map.queryRenderedFeatures(e.point, {
    //     layers: ['work-order-data']
    //   });
    //   tooltip.setLngLat(e.lngLat);
    //   map.getCanvas().style.cursor = features.length ? 'pointer' : '';
      
    //   if (features.length) {
    //     ReactDOM.render(
    //       React.createElement(
    //         Tooltip, {
    //           features
    //         }
    //       ),
    //       this.tooltipContainer
    //     );
    //   } else {
    //     this.tooltipContainer.innerHTML = '';
    //   }
    // });
  }

  render() {
    return (
      <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
    );
  }
}

export default Map;
