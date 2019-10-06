import React, { Component } from "react";
import ErrorBoundary from "./errorBoundary.js";

class WeatherCard extends Component {
    render() {
        console.log("Weather", this.props.err)
        return (
            <div className="card1">
                <h3>Current weather data</h3>
                <div className="weather">
                    {this.props.data ?
                        <div className="block">
                            <div className="row">
                                <div className="col col-bkg">
                                    <div>Temperature</div>
                                    <div>{this.props.data.data.main.temp} K</div>
                                </div>
                                <div className="col col-bkg-oblique">
                                    <div>Pressure</div>
                                    <div>{this.props.data.data.main.pressure} hPa</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-bkg-oblique">
                                    <div>Humidity</div>
                                    <div>{this.props.data.data.main.humidity} %</div>
                                </div>
                                <div className="col col-bkg">{this.props.data.data.weather.map((el, index) => {
                                    return (<div key={index}>
                                        <div>Weather</div>
                                        <div>{el.main}</div>
                                        <div>
                                            <img src={`http://openweathermap.org/img/w/${el.icon}.png`}
                                                alt="wthr img" />
                                        </div>
                                    </div>)
                                })}</div>
                            </div>
                        </div> : null}
                    <br />
                    {this.props.err ?
                        <div>
                            {this.props.err.message}
                        </div> : null
                    }
                </div>

            </div >
        )


    }
}

export default WeatherCard;