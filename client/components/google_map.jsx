import React from 'react';
import { GoogleMap, GoogleMapLoader, MarkerWithLabel } from 'react-google-maps';
// import APIKey from '../../API_key.js';

export default class Map extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            locations: [],
        }
    }

    componentWillReceiveProps (nextProps) {
        this.loadLocations(nextProps);
    }

    loadLocations (data) {
        const locationData = data.map((location) => {
            const title = `${location.name}, ${location.state}`;
            const { lat, lng } = this.getCoordinates(location);
            return { lat, lng, title };
        });
        this.setState({ locations: locationData, });
    }

    getCoordinates (location) {
        const { name, state } = location;
        const geocodeAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${name},+${state}&key=${APIKey}`;
        fetch(geocodeAPI)
        .then((response) => {
            const { lat, lng } = response.geometry.location;
            return { lat, lng };
        });
    }

    render () {
        return (
            <div className="map">
                <GoogleMapLoader 
                    containerElement={ <div {...this.props} /> }
                    googleMapElement={
                        <GoogleMap 
                            defaultZoom={4.65}
                            defaultCenter={{ lat: 38.4131551, lng: -100.7810554, }} >
                            { this.state.locations.map((location) => {
                                return (
                                    <MarkerWithLabel 
                                        position={{
                                            lat: location.lat,
                                            lng: location.lng, }} 
                                        title={location.title} 
                                    />
                                );
                            }) }
                        </GoogleMap>
                    }
                />
           </div>
        );
    }
}