import React from 'react';
import 'react-bootstrap';
import '../App.css';
import SideNav from '../sidenav/sidenav';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderComponent from '../header/headerComponent';
import FooterComponent from '../footer/footerComponent';
import Aux from '../hoc/aux';
import MapContainer from '../maps/mapContainer';

const home = (props) => {
    return (
        <Aux>
            <Grid fluid={true}>
                <HeaderComponent />
                <Col className="main-content" xs={12} md={12}>
                    <Row>
                        <Col className="sidebar-container custom-width" xs={1} md={1}>
                            <SideNav width={props.width} clicked={props.toggle}></SideNav>
                        </Col>
                        <Col className="maps-container max-width" xs={11} md={11}>
                            <MapContainer />
                        </Col>
                    </Row>
                </Col>
                <FooterComponent />
            </Grid>
        </Aux>
    )
}


export default home;
