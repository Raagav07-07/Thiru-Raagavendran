import React from 'react'
import './Project.css';
import spa from './assets/spa.png';
import netflixlogo from '../src/assets/netflix.png';
import ProjectContainer from './common/ProjectContainer';
function Project() {
  return (
    <section className='container'>
      <h1>PROJECTS</h1>
      <div className='ProjectContainer'>
      <ProjectContainer link="https://github.com/Raagav07-07/Netflix-Clone" src={netflixlogo} 
      h3="Netflix Clone" p="Streaming App"/> 
      <ProjectContainer link="https://github.com/Raagav07-07/Beauty-Spa-Frontend-" src={spa}  
      h3="Commercial Spa" p="Skeletal Design"/>     
</div> 
</section>
  )
}

export default Project
