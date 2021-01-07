import React from "react";
import { Grid } from "@material-ui/core";
import InfoCard from "./InfoCard";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  const info = [
    {
      title: "Infected",
      label: "infected",
      type: confirmed,
      caption: "Number of reported cases of COVID-19",
    },
    {
      title: "Recovered",
      label: "recovered",
      type: recovered,
      caption: "Number of recoveries from COVID-19",
    },
    {
      title: "Deaths",
      label: "deaths",
      type: deaths,
      caption: "Number of deaths caused by COVID-19",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {info.map((item) => (
          <InfoCard
            key={item.label}
            title={item.title}
            label={item.label}
            type={item.type}
            caption={item.caption}
            lastUpdate={lastUpdate}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
