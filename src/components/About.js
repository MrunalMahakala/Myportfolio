import React from 'react';
import '../Css/About.css'
import ME from '../images/vint portarit.jpg'
function About() {
    return ( 
    <div id='About'>
<div className='image-about'>
<img className="img" src={ME} alt=""/>
</div>
<div className='text-about'>

<h1>About Me</h1>
<p>
    I am a Master's student in Data Analytics with a passion for using my skills to solve real-world problems.
 I am proficient in programming languages such as Python and R, and I have experience in data visualization, statistical analysis, and machine learning. 
I am also a web designer and developer with experience in HTML/CSS, JSON, DBMS, Core Java, Git, and Tableau.
<br/>
</p>
<p>
I am a highly motivated and results-oriented individual, and I am always looking for new challenges and opportunities to learn and grow. I am confident that my skills and experience make me a valuable asset to any organization.
</p>
</div>
    </div>
     );
}

export default About;