import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Header(){

    return(
        <div>
            <img src='https://img.freepik.com/premium-vector/book-leaf-logo-design_104950-421.jpg' style={{height:"100px", width:"100px"}}></img>
        <nav class="navbar navbar-expand-lg  bg-black" style={{backgroundColor: "#161040",}}>
        <div class="container-fluid">
        
            <a class ="navbar-brand text-white" href="#">Library management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="#">Dashboard</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#">Books</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#">Staff</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white " href="#" >Librarian</a>
                </li>
                <li class="nav-item">
                <a class="nav-link text-white" href="#">Logout</a>
                </li>
            </ul>
            </div>
            </div>
        </nav>

        
        </div>

        
    )
}

export default Header;