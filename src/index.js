const app = require('./app')

// funcion asincona, espera a que el servidor le indique que realice
// la siguiente instrucion
const main = async() => {
    app.listen(3000);
    console.log('Server Port: ', 3000)
}

main()