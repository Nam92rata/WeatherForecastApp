import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import { onSearch, logout } from "../store/actions";
import WeatherCard from "./weatherCard.js";
import ForecastCard from "./forecastCard.js";
import ErrorBoundary from "./errorBoundary.js";
import AboutUs from "./aboutUs";
import ClipLoader from 'react-spinners/ClipLoader';
import createHistory from 'history/createBrowserHistory';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Redirect } from "react-router";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            loading: false,
            show: false,
            logout: false
        }
    }

    logoutHandler = () => {
        localStorage.removeItem('login');
        this.setState({ logout: true, loading: false });
        this.props.logout();
    }

    showHandler = () => {
        this.setState({ show: true });
    }

    hideHandler = () => {
        this.setState({ show: false });
    }

    onChangeHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value }, () => {
            this.props.onSearch(this.state.cityName)
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.searchState.inProgress !== nextProps.searchState.inProgress) {
            this.setState({ loading: !this.state.loading })
        }
    }

    render() {
        if (localStorage.getItem('login')) {
            return (
                <div className="MainPage">
                    <div className="HomePage" >
                        <h1>Weather-App</h1>
                        <h3>Select City</h3>
                        <select className="Select" name="cityName" value={this.state.cityName} onChange={evt => this.onChangeHandler(evt)}>
                            <option disabled value="">List of cities</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Udaipur">Udaipur</option>
                            <option value="London">London</option>
                            <option value="Bengaluru">Bengaluru</option>
                        </select>
                        <br />
                        <br />


                        <ErrorBoundary>
                            <Router history={createHistory}>
                                <div>
                                    <div className="AppBar">
                                        <div className="tab"><Link to="/HomePage"><button className="button">WeatherCard</button></Link></div>
                                        <div className="tab"><Link to="/ForecastCard"><button className="button">ForecastCard</button></Link></div>
                                        <div className="tab"><Link to="/About"><button className="button">About</button></Link></div>
                                        <div className="tab"><button className="button" onClick={this.logoutHandler}>Logout</button></div>
                                    </div>
                                    {this.state.loading ? <ClipLoader /> :
                                        <div>
                                            <Switch>
                                                <Route exact path='/HomePage' component={WeatherCard}></Route>
                                                <Route path='/ForecastCard' component={ForecastCard}></Route>
                                                <Route path='/About' component={AboutUs}></Route>
                                            </Switch>
                                        </div>
                                    }
                                </div>
                            </Router>
                        </ErrorBoundary>

                    </div>
                </div >
            )
        } else {
            return <Redirect to='/' />;
        }
    }
}

const mapStateToProps = (state) => {
    return ({
        searchState: state
    })
}

const mapActionToProps = {
    onSearch: onSearch,
    logout: logout
}

export default connect(mapStateToProps, mapActionToProps)(HomePage);