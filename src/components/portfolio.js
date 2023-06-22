import React from 'react'
import Netflix_mockup from '../svg/Netflix mockup.svg'
import Portfolio_design from '../svg/Portfolio_Design.svg'
import Travel_App from '../svg/Travel_app_Design.svg'
import Propass_Design from '../svg/Pro_pass_Design.svg'
import Projects from './Projects'
import "../Css/portfolio.css"
function Portfolio() {
  return (
    <div id="portfolio" className='portfolio'>
    
        <h1>Portfolio</h1>
      
        <div className='portfolio-wrap'>
        <Projects img={Netflix_mockup} name="Netflix clone" demo="https://netflix-smallclone.netlify.app/"/>
        <Projects img={Netflix_mockup} name="Twitter clone" demo="https://tweetco-mrunal.netlify.app/"/>
        <Projects img={Portfolio_design} name="Portfolio Design" demo="https://www.figma.com/file/KvnnXKBgyRgtEtpqjNDdjl/SO-WEB?node-id=58%3A501"/>
        <Projects img={Travel_App} name="Travel App Design" demo="https://netflix-smallclone.netlify.app/"/>
        <Projects img={Propass_Design} name="PassWord Manager Design" demo="https://netflix-smallclone.netlify.app/"/>
        <Projects img={Netflix_mockup} name="Netflix clone" demo="https://netflix-smallclone.netlify.app/"/>
        </div>
       
    </div>
  )
}

export default Portfolio