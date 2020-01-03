
const chalk = require('chalk')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const mapBoxPlace = process.argv[2];

if (!mapBoxPlace) {
    return console.log('Please provide an address')
} else {
    geoCode(mapBoxPlace, (error, data) => {
        if (error) {
            return console.log(error);
        }
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(data.location);
            console.log(forecastData.message);
        }
        
        )
    })
}

console.log(mapBoxPlace);

console.log(process.argv);





