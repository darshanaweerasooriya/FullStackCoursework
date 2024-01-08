import React from 'react'
import Navbar from '../components/Navbar'
import './feedback.css'
import bckimg from '../Images/lib3.jpeg'
import Footer from '../components/Footer';

export default function Feedback() {
    const backgroundStyle = {
        backgroundSize: 'cover',      
        backgroundPosition: 'center', 
        filter: 'blur(3px)'
      };
  return (
    
   <div>
    <Navbar/>
    
    <div className="center-container" style={{  backgroundImage: `url(${bckimg})`,}}>
        <form>
        <div className="box">
          <div className="rectangle" />

          <div className="feedback-container">
            <div>
            <h1><b>FeedBack</b></h1>
              <label style={{ fontSize: '20px', fontWeight: 'bold' , top:'-60px' , position:'relative' }}><b>How was your experience?</b></label>
            </div>

            <div className="feedback-emojis">
              <button type='button'>😊</button>
              <button type='button'>😐</button>
              <button type='button'>😢</button>
              <button type='button'>😠</button>
            </div>

           
              <div className="text-wrapper">Describe your experience here</div>
              <div><input type="text" className="textbox" /></div>
            </div>
            <div className="button-container">
            <button type="button" class="btn btn-success" id="assave" style={{width:'120px'}}>Save</button> 
            <button type="button" class="btn btn-danger" id="asdelete" style={{marginLeft:'70px',width:'120px'}}>Delete</button>
            
          </div>
          
          </div>

          </form>

          </div>
         
          </div>
  
  )
}
