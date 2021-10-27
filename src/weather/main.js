const express = require('express');
const app = express();

const constants = require('./constants');
const weather = require('./weather');

app.use(express.static(constants.SERVER_STATIC_PUBLIC_DIR));

app.get('/', function (req, res) {
    res.sendFile(constants.SERVER_STATIC_PUBLIC_DIR + '/index.html');
});

app.get('/weather', function (req, res) {
    weather.getCurrentWeather('montpellier', 'metric', (e, r) => displayWeather(res, e, r));
});

function displayWeather(appRes, error, response) {
    if (error)
        appRes.status(400).send(error);
    else if (response.error)
        appRes.status(400).send(response.error);
    else
        appRes.status(200).send(response.body);
}

app.listen(constants.SERVER_PORT, () => {
    console.log("Server started at port: " + constants.SERVER_PORT);
});