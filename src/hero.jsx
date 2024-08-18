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
        <h2>Machine Learning & Data Science</h2>
      <span>
        <a href="https://www.x.com/ruskmlon" alt="Twitter Icon" >
        <img src={twittericon}/></a>
        <a href="https://www.github.com/Raagav07-07" alt="Github Icon" >
        <img src={githubicon}/></a>
        <a href="https://www.linkedin.com/in/thiru-raagavendran-s-b-a5744b290" alt="Linkedin Icon" >
        <img src={linkedinicon}/></a>
      </span>
      <p className={styles.description}>With expertise in developing scalable,data-driven solutions using advanced algorithms.</p>
      <a href={CV} download><button className='hover'>Resume</button></a>
      </div>
    </section>
  )
}

export default Hero;
