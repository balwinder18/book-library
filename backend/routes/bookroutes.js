const express = require("express");
const Book = require("../models/bookmodels") 
const router = express.Router()

router.get('/all',async (req,res)=>{
  
    try {
        

        const books = await Book.find({});

        return res.status(201).send({
            count:books.length,
            data:books
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            message:"No books found "
        })
    }


})

router.get('/:id',async (req,res)=>{
  
    try {
        
const {id}  = req.params;
        const book = await Book.findById(id);

        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            message:"No book found "
        })
    }


})

router.put('/update/:id',async (req,res)=>{
  
    try {
        if(
            !req.body.title || !req.body.author || !req.body.publish
        ) {
            return res.status(200).send({
                message:"add all the details "
            })
        }
        
        const {id}  = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(200).send({
                message:"Book not found "
            })
        }


        return res.status(201).send({
            
            message:"Book updated successfully "
        })

        

        
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            message:"add all the details "
        })
    }


})

router.delete('/delete/:id',async (req,res)=>{
  
    try {
        
        const {id}  = req.params;
        const result = await Book.findByIdAndDelete(id);

        if(!result){
            return res.status(200).send({
                message:"Book not found "
            })
        }


        return res.status(201).send({
            
            message:"Book deleted successfully "
        })

        

        
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            message:"book not found "
        })
    }


})



router.post('/',async (req,res)=>{
  
    try {
        if(
            !req.body.title || !req.body.author || !req.body.publish
        ) {
            return res.status(200).send({
                message:"add all the details "
            })
        }
        
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publish:req.body.publish
        }

        const book = await Book.create(newBook)

        return res.status(201).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            message:"add all the details "
        })
    }


})


module.exports = router;