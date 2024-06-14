import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg'
import LinkedinIcon from '../../assets/linkedin-light.svg'

function Hero() {
  return (
  <section id="hero" className={styles.container}>
  <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src= {heroImg} 
        alt="Profile picture of Aspen Ishii" 
        />
        <img src={themeIcon} alt="light/dark mode icon" />
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
        <a href={CV}>
            <button className="hover" download>
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero;