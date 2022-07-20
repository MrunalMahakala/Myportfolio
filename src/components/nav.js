import React from 'react'
import '../Css/nav.css'
import Logo from "../svg/m2_logo.svg"
function nav() {
  return (
    <section id="home">
    <div className="navigation">
    <header>
         <nav className="nav">
         <img className="Logo" src={Logo} alt=""/>

           <div className="hamburger">
             <span className="line"></span>
             <span className="line"></span>
             <span className="line"></span>
           </div>

           <div className="nav__link hide">
             <a className="tabs" href="#">Home</a>
             <a className="tabs" href="#">About</a>
             <a className="tabs" href="#services">Skills</a>
             <a className="tabs" href="#portfolio">Portfolio</a>
             <a className="tabs" href="#contact">Contact</a>
           </div>
         </nav>
       </header>
     
     </div>
</section>
        // {/* <div className='logo-div'>
        //     <h3>M.Mrunal</h3>
        // </div>
        // <div className='menu-items'>
        //     <div className='menu-item'>
        //         <a href='#'>Home</a>
        //         <div className='dot'></div>
        //     </div>
        //     <div className='menu-item'>
        //         <a href='#'>About</a>
        //         <div className='dot'></div>
        //     </div>
        //     <div className='menu-item'>
        //         <a href='#'>Portfolio</a>
        //         <div className='dot'></div>
        //     </div>
        //     <div className='menu-item'>
        //         <a href='#'>Contact</a>
        //         <div className='dot'></div>
        //     </div>
        // </div> */}
 
  )
}

export default nav