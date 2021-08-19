const Itinerary = require('../models/Itinerary')

const itinerariesControllers = {
    getAllItineraries: async (req, res)=>{
        try{
            let itineraries = await Itinerary.find()
            res.json({success: true, response: itineraries})
        }catch(e){
            res.json({success: false, response: "Unable to get data"})
        }
    },
    addNewItinerary: (req, res) => {
        const itinerary = new Itinerary(
            {...req.body}
        )
        try{
            itinerary.save()
            res.json({success: true})
        }catch{
            res.json({success: false})
        }
    },
    deleteOneItinerary: async (req, res) =>{
        try{
            await Itinerary.findOneAndRemove({_id: req.params.id})
            res.json({succes: true})
        }catch(e){
            res.json({success: false})
        }

    }

}

module.exports=itinerariesControllers