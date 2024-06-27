import styles from './HeroStyles.module.css';
import heroImg from '../../assets/YASH_img.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import emailLight from '../../assets/email-black-envelope-back-svgrepo-com.svg';
import emailDark from '../../assets/empty-email-svgrepo-com.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';

import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ?  emailLight:emailDark ;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}  >
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yash
          <br />
          Anand
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="mailto:yashanand037@gmail.com" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Darkcaptain007" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/yash-anand-0a13b6286" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Hi! I am Yash, currently a Pre-Final year student at IIT(ISM) Dhanbad who loves Competitive Programming and has a knack for buliding beautiful Modern Day Web-Apps.If you want to connect with me, just drop me a dm on any of the platforms or Directly Mail me ! 
        </p>
        <a href={'src/assets/Yash Anand_Resume.pdf'} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
