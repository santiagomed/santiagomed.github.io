import React, { useRef } from "react";
import About from "../About/about";
import Contact from "../Contact/contact";
import Projects from "../Projects/projects";

import styles from "./Home.module.css";

const Home = () => {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const executeContactScroll = () => contactRef.current.scrollIntoView();
  const executeAboutScroll = () => aboutRef.current.scrollIntoView();

  return (
    <React.Fragment>
      <div ref={aboutRef} className={styles.container}>
        <About />
      </div>
      <div className={styles.container}>
        <Projects
          executeContactScroll={executeContactScroll}
          executeAboutScroll={executeAboutScroll}
        />
      </div>
      <div ref={contactRef} className={styles.container}>
        <Contact />
      </div>
    </React.Fragment>
  );
};

export default Home;
