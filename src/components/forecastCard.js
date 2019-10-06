import React, { Component } from "react";

class ForecastCard extends Component {
    render() {
        console.log("state in forecast", this.props.data)
        return (
            <div className="card1">
                <h3>5 day weather forecast</h3>
                <div className="forecast">
                    {(this.props.data) ? this.props.data.list.map((el, index) => {
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
                    }) : null}
                    <br />
                    {this.props.err ?
                        <div>
                            {this.props.err.message}
                        </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default ForecastCard;

