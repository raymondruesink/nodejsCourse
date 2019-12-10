const request = require('request')
const chalk = require('chalk')

const secretKey = '59468cbcb4d51b662ca662fa8498da33'

const url = 'https://api.darksky.net/forecast/59468cbcb4d51b662ca662fa8498da33/51.9226052,5.9333145?units=si&lang=nl'
const mapBoxToken = 'pk.eyJ1IjoicmF5bW9uZDE0NzcyIiwiYSI6ImNrM3pwOHM2NjFzazEzbW8xbHBzMXIwNnAifQ.7AfTN3tlkAQl8dQWvd6vtA'
const mapBoxPlace = 'huissen huttenstraat 32'
const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + mapBoxPlace + '.json?access_token=' + mapBoxToken + '&limit=1'


request({
    url: url,
    json: true
}, (error, response) => {
    if (error) {
        console.log(chalk.red.bold('Unable to connect to weather service!'))
    } else if (response.body.error) {
        console.log(chalk.red.bold('Unable to find location!'))
    }



    else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
    }



})

//Geocoding

request({
    url: mapBoxUrl,
    json: true
}, (error, response) => {
    const f = response.body.features[0]
    if (error) {
        console.log(chalk.red.bold('Location services unavailable'))
    } else if (!f) {
        console.log(chalk.red.bold('Location not found'))
    } else {
        const f = response.body.features[0]
        console.log('Place : ' + f.place_name)
        console.log('Longitude : ' + f.center[0])
        console.log('Latitude : ' + f.center[1])
    }






})