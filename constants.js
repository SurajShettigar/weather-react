const path = require('path');

const API_BASE_URL = 'api.openweathermap.org/data/2.5/';
const API_CURR_WEATHER_ENDPOINT = 'weather';

const SERVER_STATIC_PUBLIC_DIR = path.join(__dirname, 'public');
const SERVER_PORT = 4000;

module.exports = { API_BASE_URL, API_CURR_WEATHER_ENDPOINT, SERVER_STATIC_PUBLIC_DIR, SERVER_PORT };
