import React, { Component } from "react";
import {connect} from "react-redux";
import {onSearch} from "../store/actions";
import Card from "./card.js";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            loading: false
        }
    }

    onSubmitHandler = (evt) => {
        console.log("cityName", this.state.cityName);
        this.props.onSearch(this.state.cityName);
        this.setState({ cityName: "" });
        evt.preventDefault(evt);
    }

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    componentWillReceiveProps(nextProps){
        if(this.props.searchState.inProgress!==nextProps.searchState.inProgress){
            this.setState({loading: !this.state.loading})
        }
    }

    render() {
        // console.log()
        return (
            <div>
                <h1>Weather-App</h1>
                Enter the city
                  <form onSubmit={evt => this.onSubmitHandler(evt)}>
                    <input list ="cities" name="cityName" value={this.state.cityName} onChange={evt => this.onChangeHandler(evt)} />
                    <datalist id="cities">
                        <option value="Lucknow"/>
                        <option value="Udaipur"/>
                        <option value="London"/>
                        <option value="Bengaluru"/>
                        <option value="Ratlam"/>
                    </datalist>
                    <button type="submit" onClick={evt => this.onSubmitHandler(evt)}>Search</button>
                </form>                                
                {(this.state.loading)?"...loading":<div className="card">
                    <Card >Current weather data 
                        Temperature: {this.props.searchState.data?this.props.searchState.data.data.list[0].main.temp:null} K 
                        Pressure: {this.props.searchState.data?this.props.searchState.data.data.list[0].main.pressure:null} hPa 
                        Humidity: {this.props.searchState.data?this.props.searchState.data.data.list[0].main.humidity:null} %               
                        {(this.props.searchState.data)?this.props.searchState.data.data.list[0].weather.map(el=>{
                            return(<div>Weather: {el.main}

                            <img src ={`http://openweathermap.org/img/w/${el.icon}.png`} 
         alt="wthr img" /></div>)
                        }):null}
                    </Card>
                    <Card >5 day weather forecast
                    {(this.props.searchState.data)?this.props.searchState.data.data.list.map(el=>{
                        return(<div>
                            {el.dt_txt}
                            {el.weather.map(el=>{
                            return(<div>{el.main}
                            <img src ={`http://openweathermap.org/img/w/${el.icon}.png`} 
         alt="wthr img" /></div>)
                        })}
                        </div>)
                    }):null}

                    </Card>
                </div> }
                <div>About Us</div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state in homePage", state)
    return ({
        searchState: state
    })
}

const mapActionToProps={
    onSearch:onSearch
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);