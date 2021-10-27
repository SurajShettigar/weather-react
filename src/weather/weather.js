const superagent = require('superagent');
const path = require('path');

const constants = require('./constants');
const secret = require('./secret');


function getCurrentWeather(city, units='metric', callback) {
    superagent
        .get(path.join(constants.API_BASE_URL,
            constants.API_CURR_WEATHER_ENDPOINT))
        .query({ q: city, appid: secret.WEATHER_API_KEY, units: units })
        .end((err, res) => {
            callback(err, res);
        });
}

module.exports = { getCurrentWeather };