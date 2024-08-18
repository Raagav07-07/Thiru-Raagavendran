import React from 'react'
import './Project.css';
import spa from './assets/spa.png';
import netflixlogo from '../src/assets/netflix.jpg';
import ProjectContainer from './common/ProjectContainer';
import forestfiree from './assets/forestfiree.jpg'
import Covid19 from './assets/Covid19.avif';
import house from './assets/house.jpg';
function Project() {
  return (
    <section>
      <span className="HE"><h1>PROJECTS</h1></span><br></br>
      <div className='container'>
      <div className='ProjectContainer'>
      <ProjectContainer link="https://github.com/Raagav07-07/Netflix-Clone" src={netflixlogo} 
      h3="Netflix Clone" p="Streaming App"/> </div> 
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Raagav07-07/Forest-Fire-Prediction" src={forestfiree}  
      h3="Forest Fire Prediction" p="Machine Learning"/> </div>
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Raagav07-07/Covid-19-Diagnosis-Using-ML" src={ Covid19}  
      h3="Covid-19 Diagnosis" p="Machine Learning"/>  </div>  
      <div className='ProjectContainer'><ProjectContainer link="https://github.com/Raagav07-07/House-Price-Prediction" src={house}  
      h3="House Price Prediction" p="Machine Learning"/>  </div> 
</div>
</section>
  )
}

export default Project
