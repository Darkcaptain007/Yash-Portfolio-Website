import React, { useEffect, useRef } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import PedalsDp from '../../assets/Pedals_logo.png';
import EHRDp from '../../assets/EHR_LOGO.png';
import  MlDp from '../../assets/pngtree-deep-learning-line-icon-vector-png-image_6688986.png';
import PortDp from '../../assets/Screenshot 2024-06-26 at 4.32.10 PM.png'

function Projects() {
  const projectsRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const currentProjectsRef = projectsRef.current;
    if (currentProjectsRef) {
      observer.observe(currentProjectsRef);
    }

    return () => {
      if (currentProjectsRef) {
        observer.unobserve(currentProjectsRef);
      }
    };
  }, []);

  return (
    <section id="projects" className={`${styles.container} ${styles.hidden}`} ref={projectsRef}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={PedalsDp}
          link="https://github.com/Darkcaptain007/pedals_main/tree/yash_backendd/"
          h3="Pedals"
          p="Cycle Rental System"
        />
        <ProjectCard
          src={EHRDp}
          link="https://ehr-1-gk0j.onrender.com/"
          h3="EHR"
          p="Health Record Tracker "
        />
        <ProjectCard
          src={MlDp}
          link="https://github.com/Darkcaptain007/Winter-of-Code-ML"
          h3="Bootstrapped ML Models"
          p="Made ML models from scratch."
        />
        <ProjectCard
          src={PortDp}
          link="https://github.com/Darkcaptain007/Yash-Portfolio-Website"
          h3="Personal Portfolio"
          p="Portfolio Website"
        />
      </div>
    </section>
  );
}

export default Projects;
