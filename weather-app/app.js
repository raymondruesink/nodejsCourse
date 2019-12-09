const request = require('request')  

const secretKey = '59468cbcb4d51b662ca662fa8498da33'

const url = 'https://api.darksky.net/forecast/59468cbcb4d51b662ca662fa8498da33/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})

