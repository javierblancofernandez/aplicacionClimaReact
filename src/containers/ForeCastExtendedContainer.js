import React , { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getForecastDataFromCities, getCity} from './../reducers';
import ForecastExtended from "./../components/ForecastExtended";


class ForeCastExtendedContainer extends Component {
  
  
  render() {
    const {city,forecastData}=this.props;
    console.log("la ciudad enForeCastExtendedContainer es :",city);
    return (
      
      <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
    );
  }
}
ForeCastExtendedContainer.prototypes = {
    city:PropTypes.string.isRequired,
    forecastData:PropTypes.array,
};
//{city,cities} es el destructuring del state
const mapStateToProps = state =>({city:getCity(state),forecastData:getForecastDataFromCities(state)});

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);