const express = require('express') //importar la librería express
const cors = require('cors')
// require('dotenv').config()

const app = express() //crear el servidor. Se ejecuta una instancia de la librería, y lo que devuelve se guarda en la variable app. Se instancia lo que haya dentro de express

// middleware
app.use(cors())

//cuando te hagan un pedido de tipo get a este endpoint, haz tal cosa
// termina con una respuesta al frontend
let cities = [
    {name: 'Kamakura', prefecture: 'Kanagawa', src: '/assets/cities/kamakura.png', src2: '/assets/cities/kamakura2.jpg', src3: '/assets/cities/kamakura3.jpg'},
    {name: 'Kobe', prefecture: 'Hyōgo', src: '/assets/cities/Kobe.png', src2: '/assets/cities/Kobe1.jpg', src3: '/assets/cities/Kobe2.png'},
    {name: 'Sapporo', prefecture: 'Hokkaido', src: '/assets/cities/sapporo.jpg'},
    {src: '/assets/cities/Kyoto.jpg', name: 'Kyoto'},
    {src: '/assets/cities/Nagasaki.jpg', name: 'Nagasaki'},
    {src: '/assets/cities/nara.jpg', name: 'Nara'},
    {src: '/assets/cities/okinawa.jpg', name: 'Okinawa'},
    {src: '/assets/cities/osaka.jpg', name: 'Osaka'},
    {src: '/assets/cities/tokyo2.png', name: 'Tokyo'},
    {src: '/assets/cities/yokohama.jpg', name: 'Yokohama', src2: '/assets/cities/yokohama3.jpg'},
    {src: '/assets/cities/hiroshima.jpg', name: 'Hiroshima'},
    {src: '/assets/cities/kumamoto.jpg', name: 'Kumamoto'},
]

app.get('/prueba/endpoint', (req, res)=>{
    res.json({respuesta: cities})
    console.log(res)
})

app.listen(4000, ()=>console.log('Hi Server listening on port 4000')) //a la app se le pone un escuchador en el puerto 4000, y una vez que lo escucha, ejecuta la función