import React from 'react'
import { useNavigate } from 'react-router-dom';
import './admin.css';

function Admin({vote}) {
  const navigate = useNavigate();
  const handleLogout = () =>{
    navigate('/');
  }
  return (
    <div>
      <h1>Admin Page</h1>
      {
        vote.map((ele)=> (
        <div className='result'>{ele.candidate}  vote count = {ele.vote_Count}</div>
        ))
      }
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Admin
