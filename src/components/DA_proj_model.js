import React from 'react'
import '../Css/DA_proj_model.css'
import {BsCodeSlash} from 'react-icons/bs'

function DA_proj_modal({ show, onClose, title, description, source_code }) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal-backdrop'onClick={e=>e.stopPropagation()} >
      <div className='modal-content' >
        <h2>{title}</h2>
        <p className='p'>{description}</p>
        <div className='DA_model_source_code'>
            <a className='DA_model_source-link' href={source_code}>
            <p>Project link</p>
                <BsCodeSlash className="DA_model_sourcecode_img"/>
                
              
            </a>
        </div>
        <button onClick={onClose} className='close-button'>Close</button>
      </div>
    </div>
  );
}

export default DA_proj_modal;
