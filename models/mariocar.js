const mongoose = require('mongoose');
const Schema= mongoose.Schema;

// create schena and model

const MCS=new Schema({
    name :String,
    weight :Number
});


const MC= mongoose.model("mariocar",MCS);

module.exports =MC;

