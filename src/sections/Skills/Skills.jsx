import React, { useEffect, useRef } from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import HtmlDp from '../../assets/HTMLL.png';
import CssDP from '../../assets/css1.jpeg';
import JsDp from '../../assets/jss.png';
import reactDp from '../../assets/reactt.png';
import nodeDp from '../../assets/nodee.png';
import tailDp from '../../assets/tailcss.png';
import mongoDp from '../../assets/mongoo.png';
import postgresDp from '../../assets/postgress.png';
import bootstrapDp from '../../assets/bootstrapp.png';
import gitDp from '../../assets/gitt.png';
import pythonDp from '../../assets/pythonn.png';
import cDp from '../../assets/c+++.png';
import numpyDp from '../../assets/numpyy.png';
import pandasDp from '../../assets/pandass.png';


function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillListItems = skillsRef.current.querySelectorAll(`.${styles.skillList} > div`);
    skillListItems.forEach(item => observer.observe(item));

    return () => {
      skillListItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="skills" className={styles.container} ref={skillsRef}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={HtmlDp} skill="HTML" src1={checkMarkIcon} />
        <SkillList src={CssDP} skill="CSS" src1={checkMarkIcon} />
        <SkillList src={JsDp} skill="JavaScript" src1={checkMarkIcon}/>
        <SkillList src={reactDp} skill="React" src1={checkMarkIcon}/>
        <SkillList src={nodeDp} skill="Node" src1={checkMarkIcon}/>
        
      </div>
      <hr/>
      <div className={styles.skillList}>
        
        <SkillList src={tailDp} skill="Tailwind CSS" src1={checkMarkIcon}/>
        <SkillList src={mongoDp} skill="MongoDB" src1={checkMarkIcon}/>
        <SkillList src={postgresDp} skill="PostgreSQL" src1={checkMarkIcon}/>
        <SkillList src={bootstrapDp} skill="Bootstrap" src1={checkMarkIcon}/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={gitDp} skill="Git" src1={checkMarkIcon}/>
        <SkillList src={cDp} skill="C++" src1={checkMarkIcon}/>
        <SkillList src={pythonDp} skill="Python" src1={checkMarkIcon}/>
        <SkillList src={pandasDp} skill="Pandas" src1={checkMarkIcon}/>
        <SkillList src={numpyDp} skill="Numpy" src1={checkMarkIcon}/>
        
      </div>
    </section>
  );
}

export default Skills;
