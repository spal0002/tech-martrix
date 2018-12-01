import React from 'react';
import RenderMapComponent from '../../hoc/renderMapComponent';

const loadmapComponent = (props) => {
    return (
        <RenderMapComponent coordinates={props.mapsCordinates} />
    )
}

export default loadmapComponent;
