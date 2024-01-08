import React from 'react'
import './signin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import happy from '../Images/happy.png'
import liblogo from '../Images/liblogo.png'
export default function Signin() {
  return (
    <div className='signin-part1'>
        
           <img src={happy} width={310} height={360} className='signin-happy'/>
           <br></br>
           <h1 className='sigin-heading1'>Welcome to</h1>
           <h1 className='sigin-heading2'>MyLibrary.com</h1>
      
        <div className='sigin-part2'>
          <div className='sigin-content1'>
           <label>New to MyLibrary.com</label>
            <button type="submit" className="btn btn-primary" >Sign up</button>
            </div>
            <img src={liblogo} width={100} height={100} className='signin-happy1'/>
            <form>
            
            <h1  className='sigin-heading3'> Welcome Back !!</h1>
            <h2  className='sigin-heading4'> Log with us to Discover the Knowledge...</h2>
            <br></br>
            <div className="username mb-3">
            <label for="exampleFormControlInput1" class="form-label">Username</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username"/>
            </div>
            <div class="password mb-3">
            <label for="exampleFormControlInput1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
            </div>
            
            <button type="submit" className="slogin btn btn-primary" >Sign In</button>

            </form>
        </div>
      
    </div>
    
  )
}
