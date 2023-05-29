import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='navbar'>
       <div className='container'>
        <div className='left'>
        <div className='edyoda'>EDYODA</div> 
        <div className='left-right'>
          <ul>
            <li className='course'>Course <i class="fa-sharp fa-solid fa-chevron-down"></i></li>
            <li className="program">Programs <i class="fa-sharp fa-solid fa-chevron-down"></i></li>
          </ul>
        </div>
        </div>
        <div className='right'>

        <ul>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li>Login</li>
            <li><button className='btn' > JOIN NOW</button></li>
        </ul>
            
        </div>
       </div>
    </div>
  )
}
