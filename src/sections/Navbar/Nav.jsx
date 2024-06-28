import Nav from './NavStyles.module.css'

function Nav() {
  return (
    <section id='nav' className={styles.containter}>
          <ul> 
            <li>Profile</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
    </section>
  )
}

export default Nav;