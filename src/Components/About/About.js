import React from "react";
import { Paper, Typography, Container } from "@material-ui/core";
import styles from "./About.module.css";

const About = () => {
  return (
    <Paper elevation={3} className={styles.paper}>
      <Typography
        variant="h2"
        gutterBottom
        align="center"
        className={styles.header}
      >
        About COVID-19 Tracking
      </Typography>
      <Container maxWidth="lg">
        <Typography variant="h6" alignCenter className={styles.body}>
          COVID-19 Tracking adalah sebuah web app yang berguna untuk memudahkan
          masyarakat yang ingin mencari data sebaran covid di seluruh Dunia
          ataupun di Indonesia dengan mudah.
        </Typography>
      </Container>
    </Paper>
  );
};

export default About;
