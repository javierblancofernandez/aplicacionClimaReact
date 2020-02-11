import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { createStore } from "redux";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import {setCity} from './actions';
import "./App.css";

const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// este es un actionCreator que le llamamos setCity

const cities = ["Buenos Aires,ar", "New York,us", "Madrid,es", "Lima,pe"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    //console.log(`handleSelectedLocation ${city}`);
    this.setState({
      city
    });
    //const action = { type: "setCity", value: city };
    store.dispatch(setCity(city));
  };
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
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
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
