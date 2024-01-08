import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import libimg from '../Images/lib.jpg'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <img src={libimg} alt="" width="100%" height="300px" className="d-inline-block align-text-top" />
        <center><h1 >Welcome to MyLibrary.com</h1>
        <p>Where yoou can find your Knowledge by youself from us </p>
        
        </center>
        
       <Footer/>
    </div>
  )
}
