import React from 'react';
import img1 from './images/add_photo_logo.jpeg';
import img2 from './images/update-leftDown.jpeg';
import img3 from './images/update-right-up.jpeg';
import img4 from './images/update-right-mid.jpeg';
import img5 from './images/update-rightDown.jpeg';
import Axios from "axios";





const BookUpdate = () => {
  
  const formStyle = {
    width: '700px',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#e9f5f7',
    marginLeft:"650px"
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  };

  // const submitButtonStyle = {
  //   width: '120px',
  //   backgroundColor: '#4CAF50',
  //   color: 'white',
  //   padding: '14px 20px',
  //   margin: '8px 0',
  //   border: 'none',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   marginLeft:'300px',
    
  // };

  // const submitButtonHoverStyle = {
  //   backgroundColor: '#0000ff',
  // };

  const verticalLineStyle = {

    
    borderLeft: '3px solid #000', 
    height: '700px',
     margin: '0 240px',
      position: 'absolute', 
      top: 0, bottom: 0, left: 'calc(300px + 50px)', zIndex: -1 
  };

  return (
    
<div>
    <div style={formStyle}>

    
      <h2> Update Book </h2>
      <br></br>
      
      
<div>
    <img //right up image
        src={img3}
        alt="Form Image"
        style={{ display: 'flex', 
    
        borderRadius: '8px',
        position: 'fixed',
        top: '0',
     right: '0', 
         width:'300px',
         marginTop:'20px',
         marginLeft:'500px', 
         height:'300px',
         }}
      />
      </div>


<div>
<img //right mid image
        src={img4}
        alt="Form Image"
        style={{ display: 'flex', 
    
        borderRadius: '8px',
        position: 'fixed',
        top: '0',
     right: '0', 
         width:'200px',
         marginTop:'320px', 
         height:'200px',
         marginRight:'50px',
         }}
      />
</div>

<div>
<img //right down  image
        src={img5}
        alt="Form Image"
        style={{ display: 'flex', 
    
        borderRadius: '8px',
        position: 'fixed',
        top: '0',
     right: '0', 
         width:'250px',
         marginTop:'550px', 
         height:'200px',
         marginRight:'50px',
         }}
      />
</div>


      <form action="/action_page.php">

      <label htmlFor="BId"> Book ID</label>
        <input type="text" id="BId" name="bookId" placeholder="Book ID.." style={inputStyle} />

        <label htmlFor="Bname"> Book Name</label>
        <input type="text" id="Bname" name="bookName" placeholder="Book name.." style={inputStyle} />

        <label htmlFor="Aname">Author Name</label>
        <input type="text" id="Aname" name="Authorname" placeholder="Author name.." style={inputStyle} />

        <label htmlFor="catogory">Catogory</label>
        <select id="catogory" name="catogory" style={inputStyle}>
        <option value="select">Select Book catogory</option>
          <option value="informationTechnology">Information Technology</option>
          <option value="science">Science</option>
          <option value="mathematics">Mathematics</option>
          <option value="medicine">Medicine</option>
          <option value="engineering">Engineering</option>
          <option value="english">English</option>
         
        </select>


        <label htmlFor="date">Date</label>
        <input type="date" id="date" name="date" placeholder="date" style={inputStyle} />


        <label htmlFor="dateAdded">Date Added</label>
        <input type="date" id="dateAdded" name="ADateAdded" placeholder="Date Added.." style={inputStyle} />

        <label htmlFor="Description"> Description</label>
        <input type="description" id="description" name="description" placeholder="Description.." style={inputStyle} />


        <button //update button
          type="button"
          style={{
            backgroundColor: '#0000ff',
   
            color: '#ffffff',
             
             padding: '15px 50px',
             borderRadius: '8px',
             position: 'fixed',
             left: '0',  
               bottom: '0', 
              
              marginTop:'150px',
              marginLeft:'920px', 
              height:'50px',
              marginBottom:'15px',
              textAlign:'center',
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#0000ff',
              }
          
          }}
        >
          Update
        </button>
      </form>


      <div style={verticalLineStyle}></div>



<div>
      <img // left up omage
        src={img1}
        alt="Form Image"
        style={{  display: 'flex',
        height:"220px", 
        width:"180px",
        borderRadius: '8px',
        position: 'fixed',
        left: '0',  
        bottom: '0',  
        marginBottom: '460px',  
        marginLeft: '220px', 
        marginTop: '200px',
        border: 'solid',
        borderWidth:'28px'
         }}
      />
</div>


<div>
<img //left down image
        src={img2}
        alt="Form Image"
        style={{  display: 'flex',
        height:"250px", 
        width:"520px",
        borderRadius: '8px',
        position: 'fixed',
        left: '0',  
        bottom: '0',  
        marginBottom: '50px',  
        marginLeft: '120px', 
        marginTop: '200px',
         }}
      />
</div>


<button //image edit button
          type="button"
          style={{
            backgroundColor: '#0000ff',
   
            color: '#ffffff',
             
             padding: '15px 50px',
             borderRadius: '8px',
             position: 'fixed',
             left: '0',  
               bottom: '0', 
              
              marginTop:'150px',
              marginLeft:'225px', 
              height:'50px',
              marginBottom:'350px',
              
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#0000ff',
              }
          
          }}
        >
          Edit Image
        </button>

      


      

      

    </div>
    </div>
  );
};



export default BookUpdate