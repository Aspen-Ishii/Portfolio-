import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import ProjectsCard from '../../common/ProjectsCard';

function Projects() {
  return (
    <section id='Projects' className={styles.container}>
        <h1 className='sectionTile'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard src={viberr} />
        </div>
    </section>
  );
}

export default Projects;