import React, { Component } from "react";
//import {connect} from 'react-redux';
//import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtended from "./components/ForecastExtended";
//import {setCity} from './actions';

import "./App.css";




const cities = ["Buenos Aires,ar", "New York,us", "Madrid,es", "Lima,pe"];


class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

 
  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer
              cities={cities}
              
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper>
              <div className="details">
                {city ? (
                  <ForecastExtended city={city}></ForecastExtended>
                ) : null
                // city && <ForecastExtended city={city}></ForecastExtended>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}




 
 export default App;

//export default AppConnected;