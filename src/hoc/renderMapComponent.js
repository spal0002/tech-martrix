import React from 'react';
import Aux from '../hoc/aux';

const RenderMapComponent = (props) => {
    let latLng = props.coordinates;

    if (latLng.lat) {
        var location = { lat: latLng.lat, lng: latLng.lng };
        var map = new window.google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: location });
        var marker = new window.google.maps.Marker({ position: location, map: map });
    }

    return (
        <Aux>
            <div id="map"></div>
        </Aux>
    )
}

export default RenderMapComponent;