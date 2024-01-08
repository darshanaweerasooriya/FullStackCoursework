import React from 'react'
import Navebar from '../components/Navebar'

export default function Orderbooks() {
  return (
    <div>
    <Navebar/>
    <div style={{ padding: '30px', display: 'flex' , marginTop:'10px' }}>

    <div style={{ marginRight: '50px' }}>
    
    <div style={{ display: 'flex', marginTop: '70px' }}>
        <div>
        <img src='/images/harry.jpg' alt="Avatar" style={{ width: '200px', height: '200px' }} /><br />
        
        </div>
    </div>
    </div>
    <div className="vertical-line"></div>
    <form>
    <h1>Order Books </h1>
    <div class="card" style={{width:'700px'}}>
    <div class="card-body">
    <label for="inputPassword" class="col-sm-2 col-form-label" > Member ID:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSID"/>
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" > Member Name:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSname" />
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" >NIC Number:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSname"  />
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" > Member Email:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSname" />
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" >Contact Number:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputSjob"  />
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" >Book ID:</label>
        <div class="col-sm-10">
        <input type="text" class="form-control" id="inputsnum" />
        </div>
    </div>
    </div>

    <div class="card">
    <div class="card-body">
        <label for="inputPassword" class="col-sm-2 col-form-label" > Date:</label>
        <div class="col-sm-10">
        <input type="date" class="form-control" id="inputSDOB"value="DateofBith"/>
        </div>
    </div>
    </div>
    
   
    <br></br>
    <div>
        <center>
    <button type="button" class="btn btn-success" id="assave" style={{width:'120px'}}  >Save</button> 
    <button type="button" class="btn btn-danger" id="asdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
    
    </center>
    </div>
    
    </form>
    </div>
</div>
  )
}
