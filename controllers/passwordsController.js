const Passwords = require('../models/Passwords');


//*********************************************************** 
// Return all passwords

exports.getPassword = async (req, res) => {
    try {
        console.log('Inside get passsword');
         const password = await Passwords.find();
        if(!password){
            res.status(404).json({message: 'DB is empty'});
        }
        else{
            res.status(200).json(password);
            
        } 
    } catch (error) {
        console.log('Inside get passsword');
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Get password by id

exports.getPasswordById = async (req, res) => {
    try {
        console.log("inside get all passwords");
         const password = await Passwords.findById({'_id': req.params.passwordId});
            res.status(200).json(password);              
    } catch (error) {
        res.status(404).json({message: error});
    }
}

//*********************************************************** 
// Create new password

exports.createPassword = async (req, res) => { 
    try {
        console.log('Inside create new password');
         const newPassword = new Passwords({
            password: req.body.password,
        })

        res.status(201).json(await newPassword.save()); 
    } catch (error) {
        res.status(500).json({message: error});
    }
}

//*********************************************************** 
// Delete password by ID

exports.deletePassword = async (req, res) => {
    try {
        console.log("inside delete password");
         res.status(200).json(await Passwords.deleteOne({'_id': req.params.passwordId})); 
    } catch (error) {
        res.staus(500).json({message: error});
    }
}

//*********************************************************** 
// Update existing password by id

exports.updatePassword = async (req, res) => {
    try {
        res.status(201).json(await Passwords.updateOne(
            {
                $set: {
                    password: req.body.password,
                }
            }
        )); 
        
    } catch (error) {
        res.status(400).json({message: error});
    }
}