import React from 'react'
import Navbar from '../components/Navbar'
import book from '../Images/harry.jpg'

export default function Addbooks() {
  return (
    <div>
        <Navbar/>
        <div style={{ padding: '30px', display: 'flex' , marginTop:'10px' }}>

<div style={{ marginRight: '50px' }}>

<div style={{ display: 'flex', marginTop: '70px' }}>
    <div>
    <img src={book} alt="" width="218" height="218" className=" image1 d-inline-block align-text-top" />
    </div>
</div>
</div>
<div className="vertical-line"></div>
<form>
<h1>Borrow Books</h1>
<div class="card" style={{width:'700px'}}>
<div class="card-body">
<label for="inputPassword" class="col-sm-2 col-form-label" > Book ID</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="inputSID" />
    </div>
</div>
</div>

<div class="card">
<div class="card-body">
    <label for="inputPassword" class="col-sm-2 col-form-label"> UserrID </label>
    <div class="col-sm-10">
    <input type="password" class="form-control" id="inputSname"/>
    </div>
</div>
</div>

<div class="card">
<div class="card-body">
    <label for="inputPassword" class="col-sm-2 col-form-label"> Book Author </label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="inputSjob"/>
    </div>
</div>
</div>

<div class="card">
<div class="card-body">
    <label for="inputPassword" class="col-sm-2 col-form-label">Book Name</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="inputsnum"/>
    </div>
</div>
</div>

<div class="card">
<div class="card-body">
    
    <label for="inputPassword" class="col-sm-2 col-form-label"> Borrowing Date</label>
    <div class="col-sm-10">
    <input type="ptext" class="form-control" id="inputSNic"/>
    </div>
</div>
</div>

<div class="card">
<div class="card-body">
    <label for="inputPassword" class="col-sm-2 col-form-label"> Date of Bith</label>
    <div class="col-sm-10">
    <input type="date" class="form-control" id="inputSDOB"/>
    </div>
</div>
</div>
<br></br>
<div>
    <center>
<button type="button" class="btn btn-success" id="assave" style={{width:'120px'}}>Borrow</button> 

</center>
</div>

</form>
</div>
    </div>
  )
}