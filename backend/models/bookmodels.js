const mongoose =require("mongoose");



const bookschenma = mongoose.Schema({


    title:{
        type:String,
        required:true
    },
    
    author:{
        type:String,
        required:true
    },
    
    publish:{
        type:Number,
        required:true
    },
    
},
{
    timestamps:true
}


)


module.exports = mongoose.model('book' , bookschenma);