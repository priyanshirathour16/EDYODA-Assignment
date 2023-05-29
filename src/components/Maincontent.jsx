import React from 'react'
import './Maincontent.css';
import bookimg from './image/bookimg.png'
import tv from './image/tv.png'
import sch from './image/sch.png'
import ads from './image/ads.png'
import clock from './image/clock.png'

export default function Maincontent() {
  return (
    <>
      <div className='main-content'>
         <p className='p1'>Access curated course worth</p>
         <p className="p2"> <span className='span1'> &#8377; <span className ="span-child">18,500</span></span> at just <span className='span2'> &#8377; 99</span> per year!</p>
         <div className='ele-1'>
            <div className='icon'>
               <img src={bookimg} alt="" className='book'/>
            </div>
            <div className='text'>
               <span className='div-span'> 100+</span> Job relevant courses
            </div>
         </div>

         <div className='ele-1'>
            <div className='icon'>
            <img src={clock} alt="" className='book'/>
            </div>
            <div className='text'>
               <span className='div-span'> 20,000+</span> Hours of content
            </div>
         </div>

         <div className='ele-1'>
            <div className='icon'>
               <img src={tv} alt="" className='book'/>
            </div>
            <div className='text'>
               <span className='div-span'> Exclusive</span> webniar access
            </div>
         </div>

         <div className='ele-1'>
            <div className='icon'>
               <img src={sch} alt="" className='book'/>
            </div>
            <div className='text'>
               Scholarship worth<span className='div-span'> &#8377; 94,500</span>
            </div>
         </div>

         <div className='ele-1'>
            <div className='icon'>
               <img src={ads} alt="" className='book'/>
            </div>
            <div className='text'>
               <span className='div-span'>Ad Free</span> learning experience
            </div>
         </div>
      </div>
    </>
  )
}
