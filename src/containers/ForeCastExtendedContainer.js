import React , { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
    forecastData:PropTypes.array.isRequired,
};
const mapStateToProps = ({city,cities}) =>({city,forecastData:cities[city]&&cities[city].forecastData});

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);