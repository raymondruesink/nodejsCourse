const request = require('request')



const geoCode = (address, callback) => {
    const mapBoxToken = 'pk.eyJ1IjoicmF5bW9uZDE0NzcyIiwiYSI6ImNrM3pwOHM2NjFzazEzbW8xbHBzMXIwNnAifQ.7AfTN3tlkAQl8dQWvd6vtA'
    const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + mapBoxToken + '&limit=1'
    console.log(mapBoxUrl)
    request ({ url: mapBoxUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.' )
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
 
}

module.exports = geoCode
