import React from 'react'
import aboutus from '../Images/lib.jpg'
import Navbar from '../components/Navbar'

export default function Contactus() {
  return (
    <div>
        <Navbar/>
         <div>
        <h2>AboutUs</h2>
        
                <img src={aboutus}
                alt="Form Image"
                style={{position: 'flex',
                height:"500px", 
                width:"100%",
                }}
                />
                    
                    
                    


                    </div>
                

    </div>
  )
}
