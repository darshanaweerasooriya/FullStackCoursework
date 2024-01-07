import React from "react";
import Navebar from "../components/Navebar";

function Addstaff()
{
    return(
        <div>
        <Navebar />
        <div style={{ padding: '30px', display: 'flex' , marginTop:'10px' }}>

          <div style={{ marginRight: '50px' }}>
           
            <div style={{ display: 'flex', marginTop: '70px' }}>
              <div>
                <img src='/images/user.png' alt="Avatar" style={{ width: '200px', height: '200px' }} /><br />
               
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <form>
            <h1>Add Member for Staff </h1>
           <div class="card" style={{width:'700px'}}>
            <div class="card-body">
             <label for="inputPassword" class="col-sm-2 col-form-label" > User ID</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSID" />
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> User Name</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputSname"/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> JobRole </label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSjob"/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label">Tele Number</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputsnum"/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
               
                <label for="inputPassword" class="col-sm-2 col-form-label"> NIC Number</label>
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
            <button type="button" class="btn btn-success" id="assave" style={{width:'120px'}}>Save</button> 
            <button type="button" class="btn btn-danger" id="asdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
            
            </center>
            </div>
            
          </form>
        </div>
      </div>
    )
}
export default Addstaff;