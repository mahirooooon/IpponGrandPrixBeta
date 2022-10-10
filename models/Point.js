const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({

    omoro: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Point", PointSchema);