import React from "react";

function Adminlog(){
    

    return(
        <div style={{ position: 'relative' }}>
        <img src='/images/logimg.jpg' style={{filter: 'blur(3px)'}}></img>
        <div style={{ 
           position: 'absolute', 
           top: '50%', left: '50%',
           transform: 'translate(-50%, -50%)',
           width: '40%',
           padding: '40px', 
           backgroundColor: 'rgba(255, 255, 255, 0.9)',
           borderRadius: '10px',
       
       }}>
        <form>
                    <div style={{fontWeight:'bold',fontSize:'30px'}}>Admin Login</div> <br></br>
            <div className="mb-3 row">
                
                <div className="col-sm-10">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label"style={{fontWeight:'bold'}}>UserName </label><br></br>
                <input type="email" className="form-control" id="userEmail" value="email@example.com" style={{width: '100%'}} />
                </div>
            </div>
            <div className="mb-3 row">
                
                <div className="col-sm-10">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label"style={{fontWeight:'bold'}}>Password</label><br></br>
                <input type="password" className="form-control" id="inputPassword" style={{width: '100%'}} />
                </div>
            </div>
            {/* Add more form elements as needed */}
            {/* <center> */}
            <br></br>
            <div className="mb-3 row">
                <div className="col-sm-10 offset-sm-0">
                <button type="submit" className="btn btn-primary" style={{width: '50%'}}>Login</button>
                </div>
            </div>
            {/* </center> */}
            </form>
            </div>
                
        </div>
    )
}
export default Adminlog;