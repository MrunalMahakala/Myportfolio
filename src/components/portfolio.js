import React, { useState } from 'react'
import Netflix_mockup from '../svg/Netflix mockup.svg'
import Portfolio_design from '../svg/Portfolio_Design.svg'
import Travel_App from '../svg/Travel_app_Design.svg'
import Propass_Design from '../svg/Pro_pass_Design.svg'
import Projects from './Projects'
import DA_projects from './DA_projects'
import Modal from './DA_proj_model'
import "../Css/portfolio.css"


function Portfolio() {
  const [activeTab, setActiveTab] = useState('dataanalysis');

  const frontendProjects = [
    { img: Netflix_mockup, name: "Netflix Clone", demo: "https://netflix-smallclone.netlify.app/" },
    { img: Netflix_mockup, name: "Twitter Clone", demo: "https://tweetco-mrunal.netlify.app/" },
    { img: Portfolio_design, name: "Portfolio Design", demo: "https://www.figma.com/file/KvnnXKBgyRgtEtpqjNDdjl/SO-WEB?node-id=58%3A501" },
    { img: Travel_App, name: "Travel App Design", demo: "https://netflix-smallclone.netlify.app/" },
    { img: Propass_Design, name: "Password Manager Design", demo: "https://netflix-smallclone.netlify.app/" },
  ];

  const dataAnalysisProjects = [
    { img: Netflix_mockup, name: "Northpoint Project", demo: "https://example1.netlify.app/",
    description:"Northpoint project, aimed to reduce mailing costs and increase profits by leveraging machine learning models. the goal was to identify potential purchasers from a pool of 200,000 customers and predict their spending.\n We analyzed a trial subset of 2000 customers from 20,000 mailing data, achieving targeted mailing and cost optimization. By implementing classification models and regression models, we focused on high-potential customers, significantly enhancing the company's marketing efficiency and reducing unnecessary expenditure."
  },
    { img: Portfolio_design, name: "Used Mobile Market Analysis", demo: "https://example2.netlify.app/",
    description:"Northpoint project, aimed to reduce mailing costs and increase profits by leveraging machine learning models. the goal was to identify potential purchasers from a pool of 200,000 customers and predict their spending.\n We analyzed a trial subset of 2000 customers from 20,000 mailing data, achieving targeted mailing and cost optimization. By implementing classification models and regression models, we focused on high-potential customers, significantly enhancing the company's marketing efficiency and reducing unnecessary expenditure."

     },
    {img: Portfolio_design, name: "Mortgage Data Analysis", demo: "https://example2.netlify.app/",
    description:"Northpoint project, aimed to reduce mailing costs and increase profits by leveraging machine learning models. the goal was to identify potential purchasers from a pool of 200,000 customers and predict their spending.\n We analyzed a trial subset of 2000 customers from 20,000 mailing data, achieving targeted mailing and cost optimization. By implementing classification models and regression models, we focused on high-potential customers, significantly enhancing the company's marketing efficiency and reducing unnecessary expenditure."

     },
    {img: Portfolio_design, name: "Mortgage Data Analysis", demo: "https://example2.netlify.app/",
    description:"Northpoint project, aimed to reduce mailing costs and increase profits by leveraging machine learning models. the goal was to identify potential purchasers from a pool of 200,000 customers and predict their spending.\n We analyzed a trial subset of 2000 customers from 20,000 mailing data, achieving targeted mailing and cost optimization. By implementing classification models and regression models, we focused on high-potential customers, significantly enhancing the company's marketing efficiency and reducing unnecessary expenditure."

     },
    {img: Portfolio_design, name: "Mortgage Data Analysis", demo: "https://example2.netlify.app/",
    description:"Northpoint project, aimed to reduce mailing costs and increase profits by leveraging machine learning models. the goal was to identify potential purchasers from a pool of 200,000 customers and predict their spending.\n We analyzed a trial subset of 2000 customers from 20,000 mailing data, achieving targeted mailing and cost optimization. By implementing classification models and regression models, we focused on high-potential customers, significantly enhancing the company's marketing efficiency and reducing unnecessary expenditure."

     }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [desc, setDesc]= useState({})

  const handleOpenModal = (project) => {
    setModalOpen(true);
    setDesc(project)

  };

  const handleCloseModal = (index) => {
  setModalOpen(false);
  };
  



  return (
    <div id="portfolio" className='portfolio'>
    
        <h1>Portfolio</h1>
        <div className='toggle_wrap'>
        <div className='toggle_bar'>
         
          <button 
            className={`toggle_button ${activeTab === 'dataanalysis' ? 'active' : ''}`} 
            onClick={() => setActiveTab('dataanalysis')}>
            Data Analysis Projects
          </button>
          <button 
            className={`toggle_button ${activeTab === 'frontend' ? 'active' : ''}`} 
            onClick={() => setActiveTab('frontend')}>
            Front-End Projects
          </button>
        </div>
        </div>
      
        <div className='portfolio-wrap'>
        {activeTab === 'frontend' ? (
          frontendProjects.map((project, index) => (
            <Projects key={index} img={project.img} name={project.name} demo={project.demo} />
          ))
        ) : (
          dataAnalysisProjects.map((project, index) => (
            <div> <DA_projects key={index} img={project.img} name={project.name} demo={project.demo}  description={project.description} 
           
            onOpenModal={() => handleOpenModal(project)}
            /> 
            
            </div>
            
          ))
        )}
        </div>
      
        <Modal 
     
     show={modalOpen}
     onClose={() => handleCloseModal()} 
       title={desc.name}
       description={desc.description}
       source_code={desc.demo}
     />
    </div>
  )
}

export default Portfolio