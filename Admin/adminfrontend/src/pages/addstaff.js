import React, {useState} from "react";
import Navebar from "../components/Navebar";
import axios from "axios";


function Addstaff()
{
  
        const [StaffID,setStaffID] = useState('');
        const [StaffName,setstaffname] = useState('');
        const [JobRole,setjobRole] = useState('');
        const [Password,setpassword] = useState('');
        const [ConfirmPassword,setconfirmpassword] = useState('');
        const [TeleNumber,setTelenumber] = useState('');
        const [NICNumber,setnicnumber] = useState('');
        const [DateofBith,setdateofbirthdat] = useState('');
        const [successMessage,setSuccessMessage] = useState('');
        const [passwordsMatch,setPasswordMatch] = useState('');
        const [agreed, setAgreed] = useState('');

        const registerStaff = async(staffdata) =>{
          try {
            const response = await axios.post('http://localhost:3001/api/staff',staffdata);
            console.log('Data inserted succefully',response.data);
            setSuccessMessage('Thank you for register with us!');
            setStaffID('');
            setstaffname('');
            setjobRole('');
            setpassword('');
            setconfirmpassword('');
            setTelenumber('');
            setnicnumber('');
            setdateofbirthdat('');
        
          } catch (error) {
             console.log('Failed to insert data',error);
          }

        }

        const handleRegister = (event) =>{
          event.preventDefault();


          if(Password !== ConfirmPassword){
            setPasswordMatch(false);
            return;
          }

          setPasswordMatch(true);

          const staffdata ={
            StaffID:StaffID,
            StaffName:StaffName,
            JobRole:JobRole,
            Password:Password,
            ConfirmPassword:ConfirmPassword,
            TeleNumber:TeleNumber,
            NICNumber:NICNumber,
            DateofBith:DateofBith,
          }
          registerStaff(staffdata);
         
          

          
        }
        
      
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
             <label for="inputPassword" class="col-sm-2 col-form-label" > Staff ID</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSID"  onChange={(e) => setStaffID(e.target.value)} />
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> Staff Name</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputSname"  onChange={(e) => setstaffname(e.target.value)} />
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> JobRole </label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSjob"  onChange={(e) => setjobRole(e.target.value)}/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> Password </label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSjob"  onChange={(e) => setpassword(e.target.value)}/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> Confirm Password </label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSjob"  onChange={(e) => setconfirmpassword(e.target.value)}/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label">Tele Number</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputsnum"  onChange={(e) => setTelenumber(e.target.value)}/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
               
                <label for="inputPassword" class="col-sm-2 col-form-label"> NIC Number</label>
                <div class="col-sm-10">
                <input type="ptext" class="form-control" id="inputSNic"  onChange={(e) => setnicnumber(e.target.value)}/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label"> Date of Bith</label>
                <div class="col-sm-10">
                <input type="date" class="form-control" id="inputSDOB"  onChange={(e) => setdateofbirthdat(e.target.value)}/>
                </div>
            </div>
            </div>
            <br></br>
            <div>
                <center>
            <button type="button" class="btn btn-success" id="assave" style={{width:'120px'}} onClick={handleRegister}>Save</button> 
            <button type="button" class="btn btn-danger" id="asdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
            
            </center>
            </div>
            
          </form>
        </div>
      </div>
    )
}
export default Addstaff;