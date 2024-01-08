import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image2 from '../Images/user.png'

export default function PersonalDetails() {
  return (
    <div>
        <Navbar/>
        <h1 className='personal-heading1'>Personal Details</h1>
        <div className='personalDetails'>
        <div style={{ padding: '30px', display: 'flex' , marginTop:'20px' }}>

<div style={{ marginRight: '50px' }}>
  
  <div style={{ display: 'flex', marginTop: '70px' }}>
    <div>
    <img src={image2} alt="" width="150" height="150"/>
        </div>
  </div>
</div>
<div className="vertical-line"></div>
<form className="formuser">
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
     
  </div>
  
</form>
</div>
    </div>
    <Footer/>
    </div>
  )
}
