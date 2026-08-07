const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({

    company:{
        type:String,
        required:true
    },

    model:{
        type:String,
        required:true
    },

    price:{
        type:String,
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    fuel:{
        type:String,
        required:true
    },

    transmission:{
        type:String,
        required:true
    },

    year:{
        type:Number,
        required:true
    },

    km:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    description:{
        type:String
    }

},{
    timestamps:true
});

module.exports = mongoose.model("Car",carSchema);