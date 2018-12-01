import React, { Component } from 'react';
import { geocodeByAddress, getLatLng, } from 'react-places-autocomplete';
import AutoCompleteComponent from '../hoc/autoCompleteComponent';
import { connect } from 'react-redux';
import { Row, Panel, Col } from 'react-bootstrap';
import LoadmapComponent from './components/loadmapComponent';
import * as mapsAction from '../actions';
class MapsContainer extends Component {

  constructor() {
    super()
    this.state = { address: '', coordinates: {} };
  }

  handleChange = address => {
    this.setState({ address: address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        let coordinates = Object.assign({}, latLng);
        this.setState({ address })
        this.props.setCoordinatesData(coordinates)
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <Panel>
        <Panel.Body>
          <Row>
            <Col className="search-bar" xs={3} md={3}>
              <AutoCompleteComponent
                handleChange={(evt) => this.handleChange(evt)}
                handleSelect={(evt) => this.handleSelect(evt)}
                location={this.state.address}
              />
            </Col>
            <Col className="maps-container" xs={9} md={9}>
              <LoadmapComponent mapsCordinates={this.props.coordinates} />
            </Col>
          </Row></Panel.Body>
      </Panel>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    coordinates: state.mapsData.coordinates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCoordinatesData: (payload) => dispatch(mapsAction.setCoordinates(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer)


