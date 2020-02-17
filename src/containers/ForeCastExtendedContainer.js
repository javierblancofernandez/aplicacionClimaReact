import React , { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ForecastExtended from "./../components/ForecastExtended";


class ForeCastExtendedContainer extends Component {
  
  
  render() {
    console.log("la ciudad enForeCastExtendedContainer es :",this.props.city);
    return (
      
      <ForecastExtended city={this.props.city}></ForecastExtended>
    );
  }
}
ForeCastExtendedContainer.prototypes = {
    city:PropTypes.string.isRequired,
};
const mapStateToProps = state =>({city:state.city});

export default connect(mapStateToProps,null)(ForeCastExtendedContainer);