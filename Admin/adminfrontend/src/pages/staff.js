import React from "react";
import Navebar from "../components/Navebar";


function Staff(){
    return(
        <div>
        <Navebar />
        <div style={{ padding: '30px', display: 'flex' , marginTop:'20px' }}>

          <div style={{ marginRight: '50px' }}>
            <button type="button" className="btn btn-primary" id="addmember">+ Add Member</button>
            <div style={{ display: 'flex', marginTop: '70px' }}>
              <div>
                <img src='/images/user.png' alt="Avatar" style={{ width: '200px', height: '200px' }} /><br />
                <input type="email" className="form-control1" id="exampleFormControlInput1" placeholder="UserID" style={{marginTop: '30px', width:'250px'}}/><br />
                <button type="button" className="btn btn-primary" id="ssearch" style={{marginTop:'20px', marginLeft:'20px'}}>Search</button>
                <button type="button" className="btn btn-danger" id="srfresh" style={{marginLeft: '20px' , marginTop:'20px'}}>Refresh</button>
              </div>
            </div>
          </div>
          <div className="vertical-line"></div>
          <form>
           <div class="card" style={{width:'700px'}}>
            <div class="card-body">
                Name of Employee :
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                Address : 
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                Jobe Role :
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                Telephonr number :
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                Nic Number :
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                Date of Birth :
            </div>
            </div>
            <br></br>
            <div>
                <center>
            <button type="button" class="btn btn-success" id="ssave" style={{width:'120px'}}>Edit</button> 
            <button type="button" class="btn btn-danger" ib="sdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
            
            </center>
            </div>
            
          </form>
        </div>
      </div>
    )
}
export default Staff;