import React from 'react'


import Navebar from '../components/Navebar'

export default function Userbooks() {
  return (
    <div>
        <Navebar/>
       <table>
        <td>
            <tr>
                        <div class="card" style={{width: '18rem '}}>
            <img src='/images/user.png' class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Harry Potter</h5>
                <p class="card-text">J.K Rowling</p>
                <a href="#" class="btn btn-primary">Borrow</a>
            </div>
            </div>
            </tr>
           
        </td>
       </table>
       
    
    </div>
    
  )
}
