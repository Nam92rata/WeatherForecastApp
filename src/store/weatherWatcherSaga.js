import { all, call, put, takeLatest } from 'redux-saga/effects';
import { onSuccess, onCurrSuccess, onError, onCurrError } from './actions';
import Axios from 'axios';

const API_KEY = "3fbb2b31fd3e77c536be64abc677a4d1"

const fetchWeather = (payload) => {
    return Axios.get(`http://api.openweathermap1.org/data/2.5/forecast?appid=${API_KEY}&q=${payload}&count=3`)
}
const fetchCurrentWeather = (payload) => {
    return Axios.get(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${payload}`)
}

function* weatherWorkerSaga({ payload }) {
    console.log("payload", payload);
    try {
        const data = yield call(fetchWeather, payload);
        console.log("success");
        yield put(onSuccess(data));
    } catch (error) {
        console.log("error");
        yield put(onError(error));
    }
    try {
        const curr = yield call(fetchCurrentWeather, payload);
        console.log("success");
        yield put(onCurrSuccess(curr));
    }
    catch (error) {
        console.log("error");
        yield put(onCurrError(error));
    }

}

function* weatherWatcherSaga() {
    yield takeLatest("ON_SEARCH", weatherWorkerSaga);
}

export default weatherWatcherSaga;
