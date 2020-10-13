import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmVyc2Nob29sOTkiLCJhIjoiY2tnNjgycnQyMDZzaTM2cjE2d2JsN2txaiJ9.0YTxLr64i00eXdAKQibVCw';

class FableMapCountries extends React.Component {
    // Code from the next few steps will go here
    constructor(props) {
        super(props);
        this.state = {
          lng: 5,
          lat: 34,
          zoom: 1,
          selectedCountries: 'FABLE'
        };
      }

      componentDidMount() {

        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/mapbox/light-v10',
          center: [this.state.lng, this.state.lat],
          zoom: this.state.zoom
        });

        let data = []


        if (this.state.selectedCountries === 'FABLE') {
            data = [{ "code": "ROU", "hdi": 0.811 },
                { "code": "ARG", "hdi": 1 },
                { "code": "AUS", "hdi": 1 },
                { "code": "BRA", "hdi": 1 },
                { "code": "CAN", "hdi": 1 },
                { "code": "CHN", "hdi": 1 },
                { "code": "COL", "hdi": 1 },
                { "code": "ETH", "hdi": 1 },
                { "code": "DEU", "hdi": 1 },
                { "code": "FIN", "hdi": 1 },
                { "code": "DNK", "hdi": 1 },
                { "code": "IND", "hdi": 1 },
                { "code": "MYS", "hdi": 1 },
                { "code": "MEX", "hdi": 1 },
                { "code": "NOR", "hdi": 1 },
                { "code": "RUS", "hdi": 1 },
                { "code": "RWA", "hdi": 1 },
                { "code": "SWE", "hdi": 1 },
                { "code": "GBR", "hdi": 1 },
                { "code": "USA", "hdi": 1 } ]
        } else {
          data = []
        } 


        /*map.on('move', () => {
            this.setState({
              lng: map.getCenter().lng.toFixed(4),
              lat: map.getCenter().lat.toFixed(4),
              zoom: map.getZoom().toFixed(2)
            });
        });*/
        
        map.on('load', function () {
 
            // Add source for country polygons using the Mapbox Countries tileset
            // The polygons contain an ISO 3166 alpha-3 code which can be used to for joining the data
            // https://docs.mapbox.com/vector-tiles/reference/mapbox-countries-v1
            map.addSource('countries', {
            type: 'vector',
            url: 'mapbox://mapbox.country-boundaries-v1'
            });


            var matchExpression = ['match', ['get', 'iso_3166_1_alpha_3']];
 
            // Calculate color values for each country based on 'hdi' value
            data.forEach(function (row) {
             
            // Convert the range of data values to a suitable color
            var green = row['hdi'] * 255;
            var color = 'rgb(0, '+ green + ', 0)';
             
            matchExpression.push(row['code'], color);
             
            });
             
            // Last value is the default, used where there is no data
            matchExpression.push('rgba(0, 0, 0, 0)');
             
            // Add layer from the vector tile source to create the choropleth
            // Insert it below the 'admin-1-boundary-bg' layer in the style
            map.addLayer({
            'id': 'countries-join',
            'type': 'fill',
            'source': 'countries',
            'source-layer': 'country_boundaries',
            'paint': {
            'fill-color': matchExpression
            }
            }, 'admin-1-boundary-bg');
             
            });


      }

      changeCountries = (event) => {
          this.setState(prevState => {
            console.log(prevState.selectedCountries)
            return prevState.selectedCountries = "FABLE"
          })
      }

      render() {
        return (
          <div>
            <select  onChange = {this.changeCountries}>
              <option value = 'FABLE'>FABLE</option>
              <option value = 'ALL'>ALL</option>
            </select>
            <div className='sidebarStyle'>
              <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            </div>
            <div ref={el => this.mapContainer = el} className='mapContainer' />
          </div>
        )
      }

}


export default FableMapCountries;

