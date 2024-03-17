import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Backbutton from './Backbutton';

const Showbooks = () => {
  const [book , setBook] = useState([]);
  const [loading , setLoading] = useState(false);
  const {id} = useParams();
  
  useEffect(() => {
    
    setLoading(true);
    axios
        .get(`http://localhost:4000/books/${id}`)
        .then((response)=>{
              setBook(response.data);
              setLoading(false);
        })
        .catch((error)=>{
         console.log(error);
         setLoading(false);
        })
   
  }, [id])
  

  return (
    <>
    <div>
      <Backbutton/>
      <h1>Show Book</h1>
    </div>

    {loading ? (
      <Loader/>
    ) : (
      
      <div>
        <div>
          <span>Id  :</span>
          <span>{book._id}</span>
        </div>
        <div>
          <span>Title  :</span>
          <span>{book.title}</span>
        </div>
        <div>
          <span>Author   :</span>
          <span>{book.author}</span>
        </div>
        <div>
          <span>Publish  :</span>
          <span>{book.publish}</span>
        </div>
        
      </div>

    )}
    
    </>
  )
}

export default Showbooks