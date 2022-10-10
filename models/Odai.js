const mongoose = require("mongoose");

const OdaiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "お題を入れてください"],
        trim: true,
        maxlength: [50, "お題は50文字以内で入力"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
    QNo: {
        type: String,
        required: [true, "何問目か決めてください"],
    }
});

module.exports = mongoose.model("Odai", OdaiSchema);