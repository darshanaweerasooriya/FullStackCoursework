import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import book1 from '../Images/harry.jpg'

export default function Userbooks() {
  return (
    <div>
        <Navbar/>
       <table>
        <td>
            <tr>
                        <div class="card" style={{width: '18rem '}}>
            <img src={book1} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Harry Potter</h5>
                <p class="card-text">J.K Rowling</p>
                <a href="#" class="btn btn-primary">Borrow</a>
            </div>
            </div>
            </tr>
           
        </td>
       </table>
       
       <Footer/>
    </div>
    
  )
}
