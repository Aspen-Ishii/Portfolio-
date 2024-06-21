import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import fitLift from '../../assets/fitlift.png'
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id='Projects' className={styles.container}>
        <h1 className='sectionTile'>Projects</h1>
        <div className={styles.projectsContainer}>
            {/*Note to self: reduce redundancy for future projects using an array
             library or fetch from an API*/}
            <ProjectsCard 
            src={viberr}
            link= "https://github.com/Aspen-Ishii/checklist"
            h3= "Vibber"
            p= "Streaming App"
            />
            <ProjectsCard 
            src={freshBurger}
            link= "https://github.com/Aspen-Ishii/checklist"
            h3= "Fresh Burger"
            p= "Hamburger Restaurant"
            />
            <ProjectsCard 
            src={fitLift}
            link= "https://github.com/Aspen-Ishii/checklist"
            h3= "Fit Lift"
            p= "Fitness App"
            />
        </div>
    </section>
  );
}

export default Projects;