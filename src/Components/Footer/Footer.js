import React from "react";
import { Typography, Toolbar, IconButton } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import styles from "./Footer.module.css";
import unmLogo from "../../images/unm_logo.png";

const Footer = () => {
  return (
    <Toolbar className={styles.container}>
      <div className={styles.iconButton}>
        <IconButton size="medium" edge="end">
          <FacebookIcon />
        </IconButton>
        <IconButton size="medium" edge="end">
          <TwitterIcon />
        </IconButton>
        <IconButton size="medium" edge="end">
          <InstagramIcon />
        </IconButton>
      </div>
      <img
        src={unmLogo}
        alt="NusaMandiriLogo"
        height="150"
        className={styles.images}
      />
      <Typography variant="body1">
        Created by <b>Teddy Gunnar Solkjaer</b>
      </Typography>
      <Typography variant="caption">
        As proof of completion of my thesis
      </Typography>
    </Toolbar>
  );
};

export default Footer;
