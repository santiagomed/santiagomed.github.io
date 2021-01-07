import React from "react";
import cx from "classnames";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

const InfoCard = ({ title, label, type, caption, lastUpdate }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[label])}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={type.value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{caption}</Typography>
      </CardContent>
    </Grid>
  );
};

export default InfoCard;
