const mongoose = require("mongoose");


const connectdatabase = async () =>{
    try {
        await mongoose.connect(process.env.mongoDB_URI , {
            useUnifiedTopology:true , useNewUrlParser:true
        });

        console.log("Mongo connected successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

module.exports = connectdatabase;