//Import statements
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const weather = require('./weather')

//Creating object for the server
const app = express()

//Defining path for express server
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static dir. for server
app.use(express.static(path.join(__dirname, '../html')))

app.get('', (req, response) => {
    response.render('index', {
        title: 'Weather App'
    })
})

app.get('/help', (req, response) => {
    response.render('help', {
        title: 'Help',
        helpText: 'This is the help page'
    })
})

app.get('/about', (req, response) => {
    response.render('about', {title: 'About'})
})

// HTTP Endpoint for weather
app.get('/temp', (req,response) => {

    weather('1264527',(error,data)=>{

             if(error){
                return response.send({ error })
            
             } else if(data){
                 return response.send({maxTemp: data})
             
             }
         })
    
     
    })

app.get('*',(req,response) => {
    response.render('404Error')
})

//Starting the server
app.listen(5000, () => {
    console.log('Server started and listening on port 5000')
})