import React from 'react'
import './footer.css'
import image1 from '../Images/liblogo.png'

export default function Footer() {
  return (
    <footer className='footer'>
         <img src={image1} alt="" width="118" height="118" className=" image1 d-inline-block align-text-top" />
         <br></br>
         <h1 className='footer-heading'>MyLibrary.com</h1>
         <p className='footer-para1'>MyLibrary.com is a island Wide digitalize  Library Platform where </p>
         <p className='footer-para2'>You can borrow books to gain and Improve the skill by rading </p>
         <p className='footer-para3'>We provide the Knowledge to you over the Internet  </p>
    </footer>
  )
}
