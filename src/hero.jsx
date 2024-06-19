import React from 'react'
import styles from './herostyling.module.css';
import Heroimg from '../src/assets/hero-img.png';
import sun from '../src/assets/sun.svg';
import moon from '../src/assets/moon.svg';
import twitterlight from '../src/assets/twitter-light.svg'
import twitterdark from '../src/assets/twitter-dark.svg'
import githubdark from '../src/assets/github-dark.svg'
import linkedindark from '../src/assets/linkedin-dark.svg'
import githublight from '../src/assets/github-light.svg'
import linkedinlight from '../src/assets/linkedin-light.svg'
import CV from '../src/assets/CV.pdf'
import { useTheme } from './common/themecontext';
function Hero() {
    const {theme,toggleTheme}=useTheme();
    const themeIcon=theme==='light'?sun:moon;
    const twittericon=theme==='light'?twitterlight:twitterdark;
    const githubicon=theme==='light'?githublight:githubdark;
    const linkedinicon=theme==='light'?linkedinlight:linkedindark;
  return (
  <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={Heroimg} alt="Hero Image"/>
     <img src={themeIcon} className={styles.colorMode} onClick={toggleTheme} alt="colormode"/>
      </div>
      <div className={styles.info}>
        <h1>Thiru<br></br>
        Raagavendran</h1>
        <h2>Software & Frontend Developer</h2>
      <span>
        <a href="https://www.twitter.com/" alt="Twitter Icon" target="_blank">
        <img src={twittericon}/></a>
        <a href="https://www.github.com/" alt="Github Icon" target="_blank">
        <img src={githubicon}/></a>
        <a href="https://www.linkedin.com/" alt="Linkedin Icon" target="_blank">
        <img src={linkedinicon}/></a>
      </span>
      <p className={styles.description}>With a passion for developing Modern React web apps for commercial buisnesses</p>
      <a href={CV} download><button className='hover'>Resume</button></a>
      </div>
    </section>
  )
}

export default Hero;
