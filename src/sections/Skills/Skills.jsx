import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';


function Skills() {
    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
            <SkillList src ={checkMarkIcon} skill="HTML5" />
            <SkillList src ={checkMarkIcon} skill="CSS3" />
            <SkillList src ={checkMarkIcon} skill="JavaScript ES6" />
            <SkillList src ={checkMarkIcon} skill="Node.js" />
            <SkillList src ={checkMarkIcon} skill="TypeScript" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src ={checkMarkIcon} skill="React" />
                <SkillList src ={checkMarkIcon} skill="Tailwind" />
                <SkillList src ={checkMarkIcon} skill="Node.js" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src ={checkMarkIcon} skill="Git" />
                <SkillList src ={checkMarkIcon} skill="Bootstrap" />
                <SkillList src ={checkMarkIcon} skill="Redux" />
                <SkillList src ={checkMarkIcon} skill="Webpack" />
                <SkillList src ={checkMarkIcon} skill="Jest" />
            </div>
    </section>
  );
}

export default Skills;