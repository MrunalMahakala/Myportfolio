import React from 'react'
import '../Css/Services.css'
import PYTHON from '../images/PYTHON.png'
import FIGMA from "../images/FIGMA.png"
import HTML from "../images/HTML.png"
import JS from "../images/JS.png"
import REACT from "../images/REACT.svg" 
import CSS from "../images/CSS.png" 
import Fees from "../images/Fees.png"
import Github from '../images/github.svg'
import Npm from "../images/npm.svg"
import Api from "../images/API.png"
import JSON from "../images/json-file.svg"
import MUI from "../images/MUI.svg"
import Android_Studio from '../images/Android_studio.svg'

function services() {
  return (
    
    <div id="services" className="grid-container">
        <div className='jaffa jaffa1 '> 
            <div className="flex-3d">
                <div className="grid-items1">
                <a href="javascript:void(0)" aria-label="Synthatic curve" className="Grid-item" > 
                <img src={FIGMA} alt="Namaste"/>    
            </a>
                <a href="javascript:void(0)" aria-label="Safe and simple" className="Grid-item" > 
                <img src={PYTHON} alt="Hello"/>    
            </a>
            
            <a href="javascript:void(0)" aria-label="Dex Liquidity" className="Grid-item" > 
                <img src={JS} alt="Namaste"/>    
            </a>
            
            <a href="javascript:void(0)" aria-label="Anti Slippage" className="Grid-item" > 
                <img src={MUI} alt="Namaste"/>    
            </a>
           
            <a href="javascript:void(0)" aria-label="Synthatic curve" className="Grid-item" > 
                <img src={CSS} alt="Namaste"/>    
            </a>
            <a href="javascript:void(0)" aria-label="Do Do" className="Grid-item" > 
                <img src={REACT}alt="Namaste"/>    
            </a>
            <a href="javascript:void(0)" aria-label="Do Do" className="Grid-item" > 
                <img src={HTML}alt="Namaste"/>    
            </a>
            
                    </div>
                </div>
                <div className="text">
        <h3>TOOLS I KNOW</h3>
        <p>These are the Tools which I have knowledge<br/> on or have used in the past.
        </p>
    </div>
            </div>
            <div className='jaffa jaffa2'>
            <div className="text">
        <h3>SKILLS</h3>
        <p>These are the programming languages<br/> i have used in the past and have knowledge on
      
        </p>
    </div>
    
    <div className="flex-3d">
        <div className="grid-items">
        <a href="javascript:void(0)" aria-label="JSON" className="Grid-item" > 
                            <img src={JSON} alt="Hello"/>    
                        </a>
            
                        <a href="javascript:void(0)" aria-label="NPM" className="Grid-item" > 
                            <img src={Npm} alt="Namaste"/>    
                        </a>
                        <a href="javascript:void(0)" aria-label="API" className="Grid-item"> 
                             <img src={Api} alt="Namaste"/>    
                         </a>
                        <a href="javascript:void(0)" aria-label="Anti Slippage" className="Grid-item" > 
                     <img src={MUI}alt="Namaste"/>    
                         </a>
           
                       <a href="javascript:void(0)" aria-label="Synthatic curve" className="Grid-item"> 
                         <img src={FIGMA} alt="Namaste"/>    
                      </a>
                      <a href="javascript:void(0)" aria-label="GitHub" className="Grid-item"> 
                         <img src={Github}alt="Namaste"/>    
                        </a>
                        <a href="javascript:void(0)" aria-label="Do Do" className="Grid-item" > 
                            <img src={Android_Studio}alt="Namaste"/>    
                        </a>
        </div>
    </div>
            </div>
    
    
</div>
  )
}

export default services