import React, { useState } from 'react';


import {BsCodeSlash} from 'react-icons/bs'
import "../Css/DA_projects.css"


function DA_projects(props) {


  return (
    <div className='DA_project' >
         
        <div className={`clickable `}  onClick={props.onOpenModal}>
        <img className="DA_project-img" src={props.img} alt="Netflix mockup"/>        
        <h2 className='DA_project-name'>{props.name}</h2>
        </div>
        
        <div className='DA_source_code'>
            <a className='DA_source-link' href={props.source_code}>
            <p>Project link</p>
                <BsCodeSlash className="DA_sourcecode_img"/>
                
              
            </a>
        </div>
    
 
    </div>
  )
}

export default DA_projects