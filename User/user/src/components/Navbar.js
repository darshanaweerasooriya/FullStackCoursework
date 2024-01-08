import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../Images/liblogo.png'
export default function Navbar() {
  return (
    <div>
        
    <nav class="navbar navbar-expand-lg  bg-black" style={{backgroundColor: "#161040",}}>
    <div class="container-fluid">

    <img src={image1} alt="" width="50" height="50"/>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
   </button>
   <div class="items" id="navbarNav">
   <ul class="navbar-nav ml-auto">
       <li class="nav-item">
       <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
       </li>
       <li class="nav-item">
       <a class="nav-link text-white" href="#">Books</a>
       </li>
       <li class="nav-item">
       <a class="nav-link text-white" href="#">About us</a>
       </li>
       <li class="nav-item">
       <a class="nav-link text-white " href="#" >Contact us</a>
       </li>
       <li class="nav-item">
       <a class="nav-link text-white" href="#">Feed Back</a>
       </li>
   </ul>
   </div>
</div>
</nav>
</div>
  )
}
