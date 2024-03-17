import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Backbutton from './Backbutton';
import Loader from './Loader';

const Createbooks = () => {

const [title ,setTitle] = useState("");
const [author ,setAuthor] = useState("");
const [publish ,setPublish] = useState("");
const [loading ,setLoading] = useState(false);
const navigate = useNavigate();

const handlesavebook = (e)=>{
    e.preventDefault();
    const data = {
      title,author,publish
    }

    setLoading(true);

    axios
    .post(`http://localhost:4000/books`,data)
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
        <h1>Create Books</h1>
      </div>

      {loading ? (<Loader/>) : ("")}
     
     <div>
     <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Title</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Author</label>
    <input type="text" class="form-control" value={author} onChange={(e)=>setAuthor(e.target.value)} aria-describedby="emailHelp"/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Publish Year</label>
    <input type="text" class="form-control" value={publish} onChange={(e)=>setPublish(e.target.value)} aria-describedby="emailHelp"/>
   
  </div>
  <button type="submit" class="btn btn-primary" onClick={handlesavebook}>Save</button>
</form>
     </div>


    </>
  )
}

export default Createbooks