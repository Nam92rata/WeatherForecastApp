import React, { Component } from "react";
import { connect } from "react-redux";

class ForecastCard extends Component {
    render() {
        return (
            <div className="card1">
                <h3>5 day weather forecast</h3>
                <div className="forecast">
                    {(this.props.searchState.data) ? this.props.searchState.data.list.map((el, index) => {
                        return (<div key={index} className="row row-bkg">
                            <div className="col">
                                <div >{el.dt_txt}</div>
                            </div>
                            <div className="col">
                                {el.weather.map((el, index) => {
                                    return (<div key={index} className="row">
                                        <div>{el.main}</div>
                                        <div ><img src={`http://openweathermap.org/img/w/${el.icon}.png`}
                                            alt="wthr img" /></div>
                                    </div>)
                                })}
                            </div>
                        </div>)
                    }) : "Select a city"}
                    <br />
                    {this.props.searchState.err ?
                        <div>
                            {this.props.searchState.err.message}
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

export default connect(mapStateToProps)(ForecastCard);

