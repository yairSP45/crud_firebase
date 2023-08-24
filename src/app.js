const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const morgan = require('morgan')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
}).engine
)
app.set('view engine', '.hbs')

// Middlewares recibe la peticion y la reenvia 
app.use(morgan('dev'))
app.use(express.urlencoded({ //Codificar las url si tienen espacios o simbolos raros
    extended: false
}))

app.use(require('./routes/index'))

//Archivos estaticos
app.use('/public', express.static(path.join(__dirname,'public')))

module.exports = app