import { call, put, takeLatest } from 'redux-saga/effects';
import { onSuccess, onError } from './actions';
import Axios from 'axios';

const API_KEY = "3fbb2b31fd3e77c536be64abc677a4d1"

const fetchWeather = (payload) => new Promise((resolve, reject) => {
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${payload}&count=3`)
        .then(res => {
            console.log("response", res);
            resolve({
                data: res.data
            })
        }).catch(err => {
            console.log(err);
            reject({ error: err });
        })
})

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
}

function* weatherWatcherSaga() {
    yield takeLatest("ON_SEARCH", weatherWorkerSaga);
}

export default weatherWatcherSaga;
