import React from 'react'
import "../Css/Footer.css"
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'

function Footer() {
  return (
    <div className="footer">
    <footer >
      <div className='footer-wrap'>
         <div className='footer-space'>
        <h1>Feeling Bored? <br/> Want to<span> play a Game..</span></h1>
        <button className="play-button" onClick={{}}>play</button>
        </div>
        
        <div className='footer-menu'>
            <h2><b>MENU</b></h2>
            <div className="footer-nav-links">
             <a className="footer-tabs" onClick={ ()=>document.getElementById("Home").scrollIntoView({ behavior: "smooth" })}>Home</a>
             <a className="footer-tabs" onClick={ ()=>document.getElementById("About").scrollIntoView({ behavior: "smooth" })}>About</a>
             <a className="footer-tabs" onClick={ ()=>document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>Skills</a>
             <a className="footer-tabs" onClick={ ()=>document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>Portfolio</a>
             <a className="footer-tabs" onClick={ ()=>document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</a>
         
            </div>
        </div>
        
        <div className='footer-social'>
         {/* <h2><b>SOCIAL</b></h2> */}
         <div className='footer-social-links'>
         <a href='https://www.linkedin.com/in/mrunalreddy' target='blank'><FaLinkedinIn className='social footer-linked-in' /></a>
         <a href='https://github.com/MrunalMahakala' target='blank'> <FaGithub className='social footer-github' /></a>
         </div>
        </div>
        
         </div>
      <div className='copyright' >
        <span className="text-muted">&copy; 2022 Mrunal Mahakala</span>
      </div>
  
    </footer>

</div>
  )
}

export default Footer