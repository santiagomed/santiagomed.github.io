import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

import cx from "classnames";

const Project = ({
  icon,
  title,
  caption,
  git,
  hc,
  liveDemo,
  executeContactScroll,
  executeAboutScroll,
}) => {
  return (
    <div className={cx("card m-3", styles.container, styles.card)}>
      <img
        src={require(`./svg/${icon}.svg`).default}
        className={cx("card-img-top center", styles.image)}
        alt="Not found"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{caption}</p>
        {hc ? (
          <button className="btn btn-primary" onClick={executeContactScroll}>
            Contact Me
          </button>
        ) : (
          <a href={git} className="btn btn-primary">
            GitHub Link
          </a>
        )}
        {liveDemo === "/home" ? (
          <button
            className={cx("btn btn-primary", styles.button)}
            onClick={executeAboutScroll}
          >
            Live Demo
          </button>
        ) : (
          <Link
            to={liveDemo}
            className={cx(
              `btn btn-primary ${!liveDemo ? "disabled" : ""}`,
              styles.button
            )}
          >
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
