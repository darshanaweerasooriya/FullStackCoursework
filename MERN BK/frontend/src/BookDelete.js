import React from 'react';
import img1 from './images/delete-logo.jpeg';
import img2 from './images/delete-right-down.jpeg';
import img3 from './images/delete-leftUp.jpeg';



const BookDelete = () => {
  const formStyle = {
    width: '700px',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#e9f5f7',
    marginLeft:"700px"
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
     margin: '0 300px',
      position: 'absolute', 
      top: 0, bottom: 0, left: 'calc(300px + 50px)', zIndex: -1 
  };

  return (
    
<div>
  
    <div style={formStyle}>
      
      <h2> Delete Book </h2>
      <br></br>
      <br></br>
      
{/* right image */}
    <div>
        <img src={img1} alt="A description of the image" 
        style={{ display: 'flex', 
    
        borderRadius: '8px',
        position: 'fixed',
        top: '0',
     right: '0', 
         width:'300px',
         marginTop:'50px',
         marginLeft:'500px', 
         height:'300px',
         }}
          />
    </div>

    {/* right down  image */}
<div> 
        <img src={img2}  
        alt="Form Image"
        style={{ display: 'flex', 
    
        borderRadius: '8px',
        position: 'fixed',
        top: '0',
     right: '0', 
         width:'200px',
         marginTop:'420px', 
         height:'250px',
         marginRight:'50px',
         }}
         />
      </div>


      <form action="/action_page.php">
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


        {/* <input
          type="delete"
          value="   Delete"
          style={Object.assign({}, submitButtonStyle, submitButtonHoverStyle)}
        /> */}

<button //delete button
          type="button"
          style={{
            backgroundColor: '#D2042D',
   
            color: '#ffffff',
             
             padding: '15px 50px',
             borderRadius: '8px',
             position: 'fixed',
             left: '0',  
               bottom: '0', 
              
              marginTop:'150px',
              marginLeft:'1000px', 
              height:'50px',
              marginBottom:'125px',
              textAlign:'center',
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#D2042D',
              }
          
          }}
        >
          Delete
        </button>


      </form>


      <div style={verticalLineStyle}></div>

 {/* left side label for enter the book id */}
      <label htmlFor="book id" style={{
            color: '#000000' , 
          
          fontSize:'20px',
          display: 'flex', 
         
          position: 'fixed',
          left: '0',  
          bottom: '0',  
          marginBottom: '420px',  
          marginLeft: '310px',
          fontWeight: 'bold'}}
          >Book ID
          </label>


        <input type="id" id="bookId" name="BookID" placeholder="Enter the Book ID...." style={{
            color: '#000000' , 
          textAlign:'center',
          fontSize:'20px',
          display: 'flex', 
         width: "400px",
          position: 'fixed',
          left: '0',  
          bottom: '0',  
          marginBottom: '380px',  
          marginLeft: '150px', 
          }} />

{/* left image */}
<div>
      <img
        src={img3}  
        alt="Form Image"
        style={{  display: 'flex',
        height:"250px", 
        width:"220px",
        borderRadius: '8px',
        position: 'fixed',
        left: '0',  
        bottom: '0',  
        marginBottom: '460px',  
        marginLeft: '250px', 
        marginTop: '200px',
         }}
      />
</div>
<button //cancel button
          type="button"
          style={{
            backgroundColor: '#D2042D',
   
            color: '#ffffff',
             
             padding: '15px 50px',
             borderRadius: '8px',
             position: 'fixed',
             left: '0',  
               bottom: '0', 
              
              marginTop:'150px',
              marginLeft:'290px', 
              height:'50px',
              marginBottom:'200px',
              textAlign:'center',
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#D2042D',
              }
          
          }}
        >
          Cancel
        </button>

      


        <button //button Refresh
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
              marginLeft:'400px', 
              height:'50px',
              marginBottom:'280px',
              textAlign:'center',
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#0000ff',
              }
          
          }}
        >
          Refresh
        </button>


        <button //button Search
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
              marginLeft:'150px', 
              height:'50px',
              marginBottom:'280px',
              textAlign:'center',
          
              '&:hover': {
                  opacity: '0.7',
                  backgroundColor: '#0000ff',
              }
          
          }}
        >
          Search
        </button>

      

    </div>
    </div>
  );
};

export default BookDelete;
