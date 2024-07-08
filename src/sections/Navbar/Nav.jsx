/*
import styles from './NavStyles.module.css'

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
*/

import styles from './NavStyles.module.css'

function Nav() {
  return (
    <section id='nav' className={styles.container}>
      <nav>
        <ul> 
        <li>
            <a href='#'>Aspen Ishii</a>
          </li>
          <li>
            <a href='#hero'>About me</a>
          </li>
          <li>
            <a href='#Projects'>Projects</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#contact'>Contact</a> 
          </li>
        </ul>
        </nav>
      
    </section>
  )
}

export default Nav;
