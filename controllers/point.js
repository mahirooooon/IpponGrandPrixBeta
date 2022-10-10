const Point = require("../models/Point");


const getAllPoint = async (req, res) =>{
    // try{
    //     const allPoint = await Point.find({});
    //     res.status(200).json(allPoint);
    // }catch{
    //     res.status(500).json(err);
    // }
    res.send("投票画面です");
};

const createPoint = async (req, res) =>{
    try{
        const createPoint = await Point.create(req.body);
        res.status(200).json(createPoint);
    }catch{
        res.status(500).json(err);
    }
    
};

const getSinglePoint = async (req, res) =>{
    try{
        const getSinglePoint = await Point.findOne({ _id: req.params._id });
        if(!getSinglePoint){
            return res.status(404).json(`_id:${req.params._id}は存在しません`);
        }
        res.status(200).json(getSinglePoint);
    }catch{
        res.status(500).json(err);
    }
};

const updatePoint = async (req, res) =>{
    try{
        const updatePoint = await Point.findOneAndUpdate(
            { _id: req.params._id }, 
            req.body,
            );
        if(!updatePoint){
            return res.status(404).json(`_id:${req.params._id}は存在しません`);
        }
        res.status(200).json(updatePoint);
    }catch{
        res.status(500).json(err);
    }
};

module.exports = {
    getAllPoint,
    createPoint,
    getSinglePoint,
    updatePoint,
};