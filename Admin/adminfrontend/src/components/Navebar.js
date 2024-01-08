import React from "react";

function Navebar(){
    return(
        <div>
             <img src='/images/liblogo.png' style={{height:'50', width:'50px'}}></img>
        <nav class="navbar navbar-expand-lg  bg-black" style={{backgroundColor: "#161040",}}>
        <div class="container-fluid">
        
            <a class ="navbar-brand text-white" href="#">Library management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
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

export default Navebar;