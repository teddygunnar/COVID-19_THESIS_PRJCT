import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography
        className={styles.typography}
        variant="h1"
        onChange={(e) => country(e.target.value)}
      >
        {!country ? "Global" : country}
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid
          xs={12}
          md={3}
          item
          align="center"
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent className={styles.cardContent}>
            <Typography gutterBottom variant="h3">
              Terinfeksi
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          align="center"
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography gutterBottom variant="h3">
              Sembuh
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          xs={12}
          md={3}
          item
          align="center"
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography gutterBottom variant="h3">
              Meninggal
            </Typography>
            <Typography variant="h4">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <Typography variant="body2" gutterBottom className={styles.lastUpdate}>
        Last Update : {new Date(lastUpdate).toDateString()}
      </Typography>
    </div>
  );
};

export default Cards;
