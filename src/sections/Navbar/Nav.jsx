import React, { useState } from 'react';
import styles from './NavStyles.module.css'

function Nav() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  
  return (
    <section id='nav' className={styles.container}>
      <nav>
        <ul className={`${styles.sidebar} ${sidebarVisible ? styles.sidebarVisible : ''}`}> 
        <li className={styles.closeSidebar} onClick={toggleSidebar}>
            <a><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
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

        <ul> 
          <li>
            <a>Aspen Ishii</a>
          </li>
          <li className={styles.hideOnMobile}>
            <a href='#hero'>About me</a>
          </li>
          <li className={styles.hideOnMobile}>
            <a href='#Projects'>Projects</a>
          </li>
          <li className={styles.hideOnMobile}>
            <a href='#skills'>Skills</a>
          </li>
          <li className={styles.hideOnMobile}>
            <a href='#contact'>Contact</a> 
          </li>
          <li className={styles.menuBTN} onClick={toggleSidebar}>
            <a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a> 
          </li>
        </ul>
      </nav>

    </section>
  )
}

export default Nav;
