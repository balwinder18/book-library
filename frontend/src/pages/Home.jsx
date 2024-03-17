import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md"
import { BsFillInfoSquareFill } from "react-icons/bs";
import axios from "axios";
import './home.css'
import { MdAddBox } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Home = () => {
const [books , setBooks] = useState([]);
const [loading , setLoading] = useState(false);



useEffect(() => {
 setLoading(true);
 axios
     .get("http://localhost:4000/books/all")
     .then((response)=>{
           setBooks(response.data.data);
           setLoading(false);
     })
     .catch((error)=>{
      console.log(error);
      setLoading(false);
     })

}, [])



  return (
    <>
     <div className="title">
        <div>
        <h1>Book List</h1>
        
        </div>
        <Link to="/books/create"><MdAddBox/></Link>
        
     </div>
    

    {loading ? (
      <Loader/>
    ) : (
      <div className="booklist">
      <table class="table">
   <thead>
     <tr>
       <th scope="col">No.</th>
       <th scope="col">Title</th>
       <th scope="col">Author</th>
       <th scope="col">Publish Year</th>
       <th scope="col">Operations</th>
     </tr>
   </thead>
   <tbody>
     {books.map((book , index)=>(
       <tr key={book._id} >
         <td>
           {index+1}
         </td>
         <td>
           {book.title}
         </td>
         <td>
           {book.author}
         </td>
         <td>
           {book.publish}
         </td>
          <td>
            <div>
              <Link to={`/books/details/${book._id}`}><BsFillInfoSquareFill/></Link>
            
              <Link to={`/books/update/${book._id}`}><FaEdit/></Link>
            
              <Link to={`/books/delete/${book._id}`}><MdDelete/></Link>
            </div>
          </td>
       </tr>
     ))}
   </tbody>
 </table>
      </div>
    )}
    </>
  )
}

export default Home