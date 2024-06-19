import React from 'react'
import checkmarkdark from '../assets/checkmark-dark.svg'
import checkmarklight from '../assets/checkmark-light.svg'
import { ThemeProvider, useTheme } from './themecontext';
function SkillList({name}) {
    const checkmark=useTheme==='light'?checkmarklight:checkmarkdark;
  return (
      <span><img src={checkmark}></img>
      <p>{name}</p></span>
  )
}

export default SkillList
