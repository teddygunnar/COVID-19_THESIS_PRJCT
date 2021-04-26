import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  CircularProgress,
  Grow,
  TextField,
} from "@material-ui/core";

import { fetchIndonesiaProvince } from "../../api";
import CountUp from "react-countup";
import styles from "./Provinsi.module.css";

const Provinsi = () => {
  const [fetchedProvince, setFetchedProvince] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //fetching api province
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedProvince(await fetchIndonesiaProvince());
    };

    fetchAPI();
  }, [setFetchedProvince]);

  console.log(fetchedProvince);

  return (
    <Grow in>
      <Container maxWidth="lg" className={styles.container}>
        {!fetchedProvince.length ? (
          <CircularProgress />
        ) : (
          <Container>
            <Typography variant="h1" className={styles.typography} gutterBottom>
              Provinsi
            </Typography>
            <div>
              <TextField
                className={styles.textField}
                placeholder="Search..."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </Container>
        )}

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={3}
        >
          {fetchedProvince
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.attributes.Provinsi.toLowerCase().includes(
                  searchTerm.toLowerCase()
                )
              ) {
                return val;
              }
            })
            .map((val, i) => (
              <Grid item xs={12} sm={9} md={6} value={val} key={i}>
                <Card className={styles.card}>
                  <Typography variant="h5" className={styles.header}>
                    {val.attributes.Provinsi}
                  </Typography>
                  <Typography variant="body1" className={styles.positif}>
                    Positif :
                    <CountUp
                      start={0}
                      end={val.attributes.Kasus_Posi}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography variant="body1" className={styles.sembuh}>
                    Sembuh :
                    <CountUp
                      start={0}
                      end={val.attributes.Kasus_Semb}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography variant="body1" className={styles.meninggal}>
                    Meninggal :
                    <CountUp
                      start={0}
                      end={val.attributes.Kasus_Meni}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Grow>
  );
};

export default Provinsi;
