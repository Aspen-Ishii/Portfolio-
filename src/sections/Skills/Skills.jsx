import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faGitAlt, faGithub, faBootstrap, faRProject, faPython, faFigma}
from '@fortawesome/free-brands-svg-icons';

function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
    const iconClass = theme === 'light' ? styles.iconLight : styles.iconDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
            <SkillList className="icon"  src ={<FontAwesomeIcon icon={faHtml5} className={iconClass} />} skill="HTML5" />
            <SkillList src ={<FontAwesomeIcon icon={faJs} className={iconClass}/>}  skill="JavaScript ES6" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src ={<FontAwesomeIcon icon={faReact} className={iconClass}/>} skill="React" />
                <SkillList src ={<FontAwesomeIcon icon={faNodeJs} className={iconClass}/>} skill="Node.js" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src ={<FontAwesomeIcon icon={faGitAlt} className={iconClass}/>} skill="Git" />
                <SkillList src ={<FontAwesomeIcon icon={faGithub} className={iconClass}/>} skill="GitHub" />
                <SkillList src ={<FontAwesomeIcon icon={faBootstrap} className={iconClass}/>} skill="Bootstrap" />
                <SkillList src ={<FontAwesomeIcon icon={faBootstrap} className={iconClass}/>} skill="Visual Studio Code" />
                <SkillList src ={<FontAwesomeIcon icon={faFigma} className={iconClass}/>} skill="Figma" />
            </div>
            <hr />
            <div className={styles.skillList}>
              <SkillList src = {<FontAwesomeIcon icon={faRProject} className={iconClass}/>} skill="R Project" />
              <SkillList src = {<FontAwesomeIcon icon={faPython} className={iconClass}/>} skill="Python" />
              <SkillList src ={checkMarkIcon} skill="Adobe Photoshop" />
              <SkillList src ={checkMarkIcon} skill="Microsoft Word" />
              <SkillList src ={checkMarkIcon} skill="Powerpoint" />
              <SkillList src ={checkMarkIcon} skill="Excel" />
            </div>
    </section>
  );
}

export default Skills;