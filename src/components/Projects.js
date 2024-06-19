import React from 'react'

import {RiCompass3Line} from 'react-icons/ri'
import {BsCodeSlash} from 'react-icons/bs'
import "../Css/project.css"


function Projects(props) {
  return (
    <div className='project'>
     
          <img className="project-img" src={props.img} alt="Netflix mockup"/>        
     
        <h2 className='project-name'>{props.name}</h2>
        
        <div className='demo'>
            <a className='demo-link' href={props.demo}>
                <RiCompass3Line className="demo_img"/>
                <p>Project-demo</p>
               
            </a>
        </div>
        <div className='source_code'>
            <a className='source-link' href={props.source_code}>
                <BsCodeSlash className="sourcecode_img"/>
                <p>Source-code</p>
              
            </a>
        </div>
    </div>
  )
}

export default Projects