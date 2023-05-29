import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import bgimg from './components/image/image.png';
import Content from './components/Content';

export default function App() {
  return (
    <div className = "app">
    <img src={bgimg} alt=" " className='bg-img'/>
      <Navbar/>
      <Content/>
    </div>
  )
}
