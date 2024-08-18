import React from 'react'
import SkillList from './common/SkillList';
import './Skillsstyling.css'
function Skills() {
  return (
    <section className='skillcontainer'>
      <h1>Skills</h1>
      <div className='SkillList'>
        <SkillList name="Machine Learning"/>
        <SkillList name="Data Analysis"/>
        <SkillList name="Pandas"/>
        <SkillList name="Python"/>
        <SkillList name="MYSQL"/>
        <SkillList name="C++"/>
        <SkillList name="React"/>
        <SkillList name="Node"/>
        <SkillList name="Kotlin"/>
        <SkillList name="Git"/>
        <SkillList name="GenAi"/>
        <SkillList name="Cloud Computing"/>
        <SkillList name="Problem Solving"/>
        <SkillList name="Project Management"/>
      </div>
    </section>
  );
}

export default Skills;
