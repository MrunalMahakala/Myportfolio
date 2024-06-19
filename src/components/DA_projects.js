import React, { useState } from 'react';


import {BsCodeSlash} from 'react-icons/bs'
import "../Css/DA_projects.css"
import Modal from './DA_proj_model'

function DA_projects(props) {
// code for onclick popup
// const [showModal, setShowModal] = useState(false);

// const handleOpenModal = () => {
//     setShowModal(true);
  
// };
// const handleCloseModal = () => {
//     setShowModal(false);
  
// };

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
        {/* <Modal 
       
        show={showModal}
        onClose={handleCloseModal}
        title={props.name}
        description={props.description}
        source_code={props.source_code}
      /> */}
 
    </div>
  )
}

export default DA_projects