const request = require('request')

// API key - 11931ff206a96b3781e758eb273709bc

// Chennai city id  - 1264527

// Google API key - AIzaSyBBZ-AsZerHeS5T_R_DmvcTB1I3XxhSFjE

// API Call - https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


// API call - http://api.openweathermap.org/data/2.5/forecast?id=1264527&APPID=11931ff206a96b3781e758eb273709bc

// error {"cod":"400","message":"126452sdada7 is not a city ID"}
const getTemp = (cityId, callback) => {

    const myurl = 'https://api.openweathermap.org/data/2.5/forecast?id='+cityId+'&units=metric&APPID=11931ff206a96b3781e758eb273709bc'

    request({url: myurl, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to API', undefined)
        } else if(response.body.cod === '400'){
            callback('Unable to fetch weather data, pls provide correct city id', undefined)
        } else {
            callback(undefined, response.body.list[2].main.temp_max)
        }
        // const dataBody = JSON.parse(response.body)
        // const currentTemp = dataBody.list
        // console.log(currentTemp[0].main.temp_max + '`C') 
    })


}

// getTemp('1264527',(error,data)=>{

//     if(error){
//         console.log('Error', error)
    
//     } else if(data){
//         console.log('Data', data)
//     }
// })

module.exports = getTemp
