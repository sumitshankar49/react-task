import React, { useState } from 'react'
import {BrowserROuter as Router
,Switch,Route,Link} from 'react-router-dom'

function Sidebar() {

  const [tb,setTb]=useState("Home")

  const handleClick1=()=>{
       
        setTb("Home");
  }
  const handleClick2=()=>{
       
    setTb("Cat");
}
  return (
    <div className='bg-light text-center side-bar h-100'>
      <ul className='list-inline'>
        {

        }
        <li className= {`{ ${tb =="Home"?'bg-dark text-white':'bg-light'} my-2  font-weight-bold py-2`} > <Link  className= {`{ ${tb =="Home" ?'text-white':'text-black'}`} style={{ textDecoration: 'none' }} to="/" onClick={handleClick1}>Home</Link></li>
        <li className={`{ ${tb =="Cat" ?'bg-dark text-white':'bg-light'} my-2  font-weight-bold py-2`}> <Link className= {`{ ${tb =="Cat" ?'text-white':'text-black'}`} style={{ textDecoration: 'none' }} to="/category" onClick={handleClick2}>Category</Link></li>
      </ul>
    </div>
  )
}

export default Sidebar