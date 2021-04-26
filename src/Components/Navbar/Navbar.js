import React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import covidlogo from "../../images/logo.png";
import styles from "./Navbar.module.css";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={styles.container} position="static" color="transparent">
      <div>
        <img src={covidlogo} height="60" alt="logo" className={styles.logo} />
      </div>
      <Toolbar>
        <div className={classes.button}>
          <Button component={Link} to="/">
            DashBoard
          </Button>
          <Button component={Link} to="/provinsi">
            Provinsi
          </Button>
          <Button component={Link} to="/about">
            About
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
