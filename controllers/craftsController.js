const Crafts = require('../models/Crafts');



//*********************************************************** 
// Get all crafts

exports.getAllCrafts = async (req, res) => {
    try {
        console.log("inside get all crafts");
        const allCrafts = await Crafts.find();
        if(!allCrafts){
            res.status(404).json({message: 'No bookings exist'});
        }
        else{
            res.status(200).json(allCrafts);
            
        }
    } catch (error) {
        res.status(500).json({message: error});
    } 
}

//*********************************************************** 
// Get craft by id

exports.getCraftById = async (req, res) => {
     try {
        console.log("inside get get craft by ID");
        const craft = await Crafts.findById({'_id': req.params.craftId});
            res.status(200).json(craft);             
    } catch (error) {
        res.status(404).json({message: error});
    } 
}


//*********************************************************** 
// Create a new craft

exports.createCraft = async (req, res) => { 

     try {
        console.log("inside create new craft");
        const newCraft = new Crafts({
            type: req.body.type,
            name: req.body.name,
            materials: req.body.materials,
            size: req.body.size,
            price: req.body.price,
            image: req.body.image,
        })

        res.status(201).json(await newCraft.save());
    } catch (error) {
        res.status(500).json({message: error});
    } 

}

//*********************************************************** 
// Delete craft by ID

exports.deleteCraft = async (req, res) => {
     try {
        console.log("inside delete craft by ID");
        res.status(200).json(await Crafts.deleteOne({'_id': req.params.craftId}));
    } catch (error) {
        res.staus(500).json({message: error});
    } 
}

//*********************************************************** 
// Update existing craft by id

exports.updateCraft = async (req, res) => {
     try {
        res.status(201).json(await Crafts.updateOne(
            {'_id': req.params.craftId},
            {
                $set: {
                    type: req.body.type,
                    name: req.body.name,
                    materials: req.body.materials,
                    size: req.body.size,
                    price: req.body.price,
                    image: req.body.image,
                }
            }
        ));
        
    } catch (error) {
        res.status(400).json({message: error}); 
    }
}