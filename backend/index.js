const express = require("express");
const connectdatabase = require("./config/database")
const dotenv = require("dotenv")
const app = express();
const Book = require("./models/bookmodels") 
const book = require("./routes/bookroutes")
dotenv.config({path:"backend/config/dot.env"});
const cors = require("cors")


const port = process.env.PORT;

app.use(express.json());
app.use(cors());


app.use('/books' , book);


connectdatabase().then(()=>{
    app.listen(port , ()=>{

        console.log(`server is running on ${port}`);
    
    });
})

