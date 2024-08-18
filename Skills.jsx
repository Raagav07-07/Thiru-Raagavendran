import React from 'react'
import SkillList from './common/SkillList';
import './Skillsstyling.css'
function Skills() {
  return (
    <section className='skillcontainer'>
      <h1>Skills</h1>
      <div className='SkillList'>
        <SkillList name="HTML"/>
        <SkillList name="CSS"/>
        <SkillList name="REACT.JS"/>
        <SkillList name="VITE"/>
        <SkillList name="MYSQL"/>
        <SkillList name="EXPRESS"/>
        <SkillList name="NODE.JS"/>
        <SkillList name="KOTLIN"/>
        <SkillList name="C++"/>
        <SkillList name="PYTHON"/>
        <SkillList name="GIT"/>
      </div>
    </section>
  );
}

export default Skills;
