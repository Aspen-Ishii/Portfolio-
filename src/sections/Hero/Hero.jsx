import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const LinkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
  <section id="hero" className={styles.container}>
  <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src= {heroImg} 
        alt="Profile picture of Aspen Ishii" 
        />
        <img 
        src={themeIcon} 
        alt="light/dark mode icon" 
        onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
        <h1>
            Aspen 
            <br />
            Ishii
        </h1>
        <h2> Frontend Developer</h2>
        <span>
            <a href = "https://github.com/Aspen-Ishii" target='_blank'>
            <img src={githubIcon} alt="GitHub Icon"/>
            </a>
            <a href = "https://linkedin.com/in/aspen-ishii-568b0b128" target='_blank'>
            <img src={LinkedinIcon} alt="Linkedin Icon"/>
            </a>
        </span>
        <p>
            with a strong passion for creating visually appealing and user-friendly 
            web applications. Eager to collaborate with a dynamic team and 
            contribute my skills towards solving real-world problems and creating 
            meaningful solutions.
        </p>
        <a href={CV} download>
            <button className="hover" >
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero;