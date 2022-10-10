const Odai = require("../models/Odai");



const getAllOdai = async (req, res) =>{
    try{
        const allOdai = await Odai.find({});
        res.status(200).json(allOdai);
    }catch{
        res.status(500).json(err);
    }
    
};

const createOdai = async (req, res) =>{
    try{
        const createOdai = await Odai.create(req.body);
        res.status(200).json(createOdai);
    }catch{
        res.status(500).json(err);
    }
    
};

const getSingleOdai = async (req, res) =>{
    try{
        const getSingleOdai = await Odai.findOne({ QNo: req.params.QNo });
        if(!getSingleOdai){
            return res.status(404).json(`QNo:${req.params.QNo}は存在しません`);
        }
        res.status(200).json(getSingleOdai);
    }catch{
        res.status(500).json(err);
    }
};

const updateOdai = async (req, res) =>{
    try{
        const updateOdai = await Odai.findOneAndUpdate(
            { QNo: req.params.QNo }, 
            req.body,
            { new: true,}
            );
        if(!updateOdai){
            return res.status(404).json(`QNo:${req.params.QNo}は存在しません`);
        }
        res.status(200).json(updateOdai);
    }catch{
        res.status(500).json(err);
    }
};

const deleteOdai = async (req, res) =>{
    try{
        const deleteOdai = await Odai.findOneAndDelete({ QNo: req.params.QNo });
        if(!deleteOdai){
            return res.status(404).json(`QNo:${req.params.QNo}は存在しません`);
        }
        res.status(200).json(deleteOdai);
    }catch{
        res.status(500).json(err);
    }
};

module.exports = {
    getAllOdai,
    createOdai,
    getSingleOdai,
    updateOdai,
    deleteOdai
};
