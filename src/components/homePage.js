import React, { Component } from "react";
import {connect} from "react-redux";
import {onSearch} from "../store/actions";
import WeatherCard from "./weatherCard.js";
import ForecastCard from "./forecastCard.js";
import ErrorBoundary from "./errorBoundary.js";
import AboutUs from "./aboutUs";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            loading: false,
            show: false
        }
    }

    showHandler=()=>{
        this.setState({show: true});
    }

    hideHandler=()=>{
        this.setState({show: false});
    }

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value },()=>{
            this.props.onSearch(this.state.cityName)
        })     
    }

    componentWillReceiveProps(nextProps){
        if(this.props.searchState.inProgress!==nextProps.searchState.inProgress){
            this.setState({loading: !this.state.loading})
        }
    }

    render() {
        return (
            <div className = "MainPage">
                <div className="HomePage" >
                <h1>Weather-App</h1>
                <h3>Select City</h3>
                <select className="Select" name="cityName" value={this.state.cityName} onChange={evt => this.onChangeHandler(evt)}>
                    <option disabled value="">List of cities</option>
                    <option value="Lucknow">Chicago</option>
                    <option value="Udaipur">Udaipur</option>
                    <option value="London">London</option>
                    <option value="Bengaluru">Bengaluru</option>                        
                </select>
                <br/>
                {(this.state.loading)?"...loading":<div className="card">
                    <ErrorBoundary>
                        <WeatherCard data={this.props.searchState.curr} err={this.props.searchState.currErr} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <ForecastCard data={this.props.searchState.data} err={this.props.searchState.err}/>
                    </ErrorBoundary>
                </div> }
                </div>
                <div ><span onClick={this.showHandler} onBlur={this.hideHandler} tabIndex={1}>About Us</span></div>
                <div >
                    {(this.state.show)?<AboutUs/>:null}
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return ({
        searchState: state
    })
}

const mapActionToProps={
    onSearch:onSearch
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);