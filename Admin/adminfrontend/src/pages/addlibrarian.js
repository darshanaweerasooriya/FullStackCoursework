import React, { useState } from "react";
import Navebar from "../components/Navebar";
import './addlibrarian.css'
import axios from 'axios'

function Addlibrarian(){

    const[MemberID,setMemberId] = useState('');
    const[Name,setName] = useState();
    const[Password,setPassword] = useState();
    const[RPassword,setRpassword] = useState();
    const[WorkingDays,setWorkingDays] = useState();
    const[TeleNumberm,setTeleNumberm] = useState();
    const[DateofBith,setDateofBith] = useState();
    const[Salary,setSalary] = useState();
    const[confirmPassword,setConfirmPassword] = useState();
    const[successMesseage, setSuccessMessage] = useState();
    const[passwordMatch,setPasswordatch] = useState();

    const handleRegister = (event) =>{
        event.preventDefault();


        if(Password !== RPassword){
            setPasswordatch(false);
          return;
        }

        setPasswordatch(true);

        const libdataa={
            MemberID:MemberID,
            Name:Name,
            Password:Password,
            WorkingDays:WorkingDays,
            TeleNumberm:TeleNumberm,
            DateofBith:DateofBith,
            Salary:Salary
        }
        
        
        const newlibreg = async(libdataa) =>{
            try{
                const response = await axios.post('http://localhost:3000/api/librarian',libdataa);
                console.log("successfully");
                setSuccessMessage('Thamks for register');
                setMemberId('');
                setName('');
                setPassword('')
                setWorkingDays('');
                setTeleNumberm('');
                setDateofBith('');
                setSalary('');                
            }catch(error){
                console.log('Failled');
            }
            
        }
};

    return(
        <div>
            <Navebar/>
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
            <h1>Add a new Librarian </h1>
            <div class="card" style={{width:'700px'}}>
            <div class="card-body">
            <label for="inputPassword" class="col-sm-2 col-form-label" > Member ID:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSID" value="MemberID" onChange={(e)=>setMemberId(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" > Name:</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputSname"value="Name" onChange={(e)=>setName(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" > Password:</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputSname" value="Password" onChange={(e)=>setPassword(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" > Reenter-Password:</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputSname"value="RPassword" onChange={(e)=>setRpassword(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" > Working Days: </label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputSjob" value="WorkingDays" onChange={(e)=>setWorkingDays(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" >Tele Number</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputsnum" value="TeleNumbers" onChange={(e)=>setTeleNumberm(e.target.value) }/>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card-body">
                <label for="inputPassword" class="col-sm-2 col-form-label" > Date of Bith:</label>
                <div class="col-sm-10">
                <input type="date" class="form-control" id="inputSDOB"value="DateofBith" onChange={(e)=>setDateofBith(e.target.value) }/>
                </div>
            </div>
            </div>
            
            <div class="card">
            <div class="card-body">
                
                <label for="inputPassword" class="col-sm-2 col-form-label" > Salary:</label>
                <div class="col-sm-10">
                <input type="ptext" class="form-control" id="inputSNic"value="Salary" onChange={(e)=>setSalary(e.target.value) }/>
                </div>
            </div>
            </div>
            <br></br>
            <div>
                <center>
            <button type="button" class="btn btn-success" id="assave" style={{width:'120px'}} onClick={handleRegister} >Save</button> 
            <button type="button" class="btn btn-danger" id="asdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
            
            </center>
            </div>
            
            </form>
            </div>
        </div>
    )
    
}

export default Addlibrarian;