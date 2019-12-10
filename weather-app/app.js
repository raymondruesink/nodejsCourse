const request = require('request')  

const secretKey = '59468cbcb4d51b662ca662fa8498da33'

const url = 'https://api.darksky.net/forecast/59468cbcb4d51b662ca662fa8498da33/51.9226052,5.9333145?units=si&lang=nl'

request({
    url: url,
    json: true
}, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})

