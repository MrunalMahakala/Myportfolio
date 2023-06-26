import React from 'react'
import '../Css/Home.css'

import FreeLancer from '../images/Freelancer.gif'

function Home() {
  const handleclick=()=>{
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div id="Home" className="Home">
    <div className="Home-text">
        <h3>Hello!</h3>
        <h1>I'm <span>Mrunal Mahakala</span></h1>
        <p> A <span>Front-end developer </span> from Karimnagar.<br/>I love creating web applications with React,<br/>and I'm currently Pursuing Master's in <span>Data Analytics.</span> 
        </p>
        <button onClick={handleclick}>Contact</button>
        {/* <div className="button">
             <a href='#contact'>Contact me</a>
        </div> */}
    </div>
    <div className="Home-image">
     
        <img className="img" src={FreeLancer} alt=""/>
        
    </div>
    
            </div>
  )
}

export default Home