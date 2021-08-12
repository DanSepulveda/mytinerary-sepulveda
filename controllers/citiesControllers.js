let cities = [
    {name: 'Kobe', prefecture: 'Hyōgo', src: '/assets/cities/Kobe.png', src2: '/assets/cities/Kobe1.jpg', src3: '/assets/cities/Kobe2.png'},
    {name: 'Kamakura', prefecture: 'Kanagawa', src: '/assets/cities/kamakura.png', src2: '/assets/cities/kamakura2.jpg', src3: '/assets/cities/kamakura3.jpg'},
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

const citiesControllers = {
    getAllCities: (req, res)=>{
        res.json({response: cities})
    },
    addNewCity: (req, res)=>{
        res.json({response: 'Me llegó una solicitud con método POST'})
    },
    getOneCity: (req, res)=>{
        const city = cities.find((city)=>city.name.toLocaleLowerCase()=== req.params.id)
        res.json({response: city})
    },
    editOneCity: (req, res)=>{
        res.json({response: 'Me llegó una solicitud con método PUT'})
    },
    deleteOneCity: (req, res)=>{
        res.json({response: 'Me llegó una solicitud con método DELETE'})
    }
}

module.exports=citiesControllers