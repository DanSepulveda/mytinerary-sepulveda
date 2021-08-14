const City = require('../models/City')

const citiesControllers = {
    getAllCities: async (req, res)=>{
        try{
            let cities = await City.find()
            res.json({success: true, response: cities})
        }catch(e){
            res.json({success: false, response: cities})
        }
    },
    addNewCity: (req, res)=>{
        const cityToUpload = new City({
            name: req.body.name,
            prefecture: req.body.prefecture,
            region: req.body.region,
            description: req.body.description,
            src: req.body.src,
            src2: req.body.src2,
            src3: req.body.src3 
        })
        cityToUpload.save()
        .then(()=>res.json({success: true}))
    },
    getOneCity: (req, res)=>{
        console.log(res)
        City.findOne({_id: req.params.id})
        .then((city)=>res.json({response: city}))
    },
    editOneCity: (req, res)=>{
        console.log(req.body)
        City.findOneAndUpdate({_id: req.params.id}, {...req.body.cityToEdit})
        .then((city)=>console.log(city))
        .catch(err=>console.log(err))
    },
    deleteOneCity: (req, res)=>{
        console.log(req.body)
        City.findOneAndRemove({_id: req.params.id})
        .then(()=>res.json({response: 'Deleted'}))
    }
}

module.exports=citiesControllers