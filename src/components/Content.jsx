import React from 'react'
import './Content.css'
import Maincontent from './Maincontent'
import Form from './Form'

export default function Content() {
  return (
    <>
    <div className='content-container'>
       <div className='left-container'>
            <Maincontent/>

       </div>
       <div className='right-container'>
           <Form/>
       </div>
    </div>
      
    </>
  )
}
