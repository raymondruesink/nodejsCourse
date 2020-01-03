const request = require ('request')

const secretKey = '59468cbcb4d51b662ca662fa8498da33'


const forecast = (latitude, longitude, callback) => {

const forecastUrl = 'https://api.darksky.net/forecast/' + secretKey + '/' + latitude + ',' + longitude + '?units=si&lang=nl'

console.log(forecastUrl)
request ({ url: forecastUrl, json: true}, (error, response) => {
    if (error) {
        callback('Unable to connect to weather services!')
    } else if (response.body.error != null) {
        callback('Unable to find weather forecast. Try another search.' )
    } else {
        callback(undefined, {
            message : 'Outside we have a temperature of ' + response.body.currently.temperature + ' degrees Celcius.'
        })
    }
})
}

module.exports = forecast;