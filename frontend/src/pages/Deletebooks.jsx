import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Backbutton from './Backbutton';
import Loader from './Loader';

const Deletebooks = () => {
  const [loading , setLoading] =  useState(false);
  const {id} = useParams();
  const navigate = useNavigate();

  const handledeletebook = ()=>{
    setLoading(true);
    axios
      .delete(`http://localhost:4000/books/delete/${id}`)
      .then(()=>{
        setLoading(false);
        navigate('/');
      })
      .catch((error)=>{
        setLoading(false);
        console.log(error);
      })
  }
  return (
    <>
    <div>
      <Backbutton/>
        <h1>Delete Book</h1>
      </div>

      {loading ? (<Loader/>) : ("")}

      <div>
        <h3>Are you sure you want to delete this?</h3>
      </div>

      <button type="submit" class="btn btn-primary" onClick={handledeletebook}>Delete</button>
    </>
  )
}

export default Deletebooks