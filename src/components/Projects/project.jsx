import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";

import cx from "classnames";

const Project = ({ icon, title, caption, git, hc, liveDemo }) => {
  return (
    <div className={cx("card m-3", styles.container, styles.card)}>
      <img
        src={require(`./images/${icon}.svg`).default}
        className={cx("card-img-top center", styles.image)}
        alt="Not found"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{caption}</p>
        {hc ? (
          <Link className="btn btn-primary" to="/contact">
            Contact Me
          </Link>
        ) : (
          <a href={git} className="btn btn-primary">
            GitHub Link
          </a>
        )}
        <Link
          to={liveDemo}
          className={cx(
            `btn btn-primary ${!liveDemo ? "disabled" : ""}`,
            styles.button
          )}
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default Project;
