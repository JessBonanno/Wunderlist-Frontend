import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "@material-ui/core/Link";

//  local imports
import postIt from "../assets/images/postit.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1302,
    position: "absolute",
    bottom: 0,
  },
  footerImg: {
    width: "5em",
    verticalAlign: "bottom",
    padding: ".5em",
  },
  socialContainer: {
    width: "auto",
    marginRight: "2em",
  },
  socialIcon: {
    fontSize: "2rem",
    margin: ".3em",
    color: theme.palette.common.white,
  },
  footerlinksContainer: {
    width: "auto",
  },
  link: {
    color: theme.palette.common.white,
    padding: "1em",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.footerContainer}
      >
        <Grid item>
          <img alt="sticky note" src={postIt} className={classes.footerImg} />
        </Grid>
        <Grid
          item
          container
          justify="space-evenly"
          className={classes.footerlinksContainer}
        >
          <Grid item>
            <Link underline='none' className={classes.link} href="">
              About Us
            </Link>
          </Grid>
          <Grid item>
            <Link underline='none' className={classes.link} href="">
              Contact Us
            </Link>
          </Grid>
        </Grid>
        <Grid item container className={classes.socialContainer}>
          <Grid item>
            <FacebookIcon className={classes.socialIcon} />
          </Grid>
          <Grid item>
            <InstagramIcon className={classes.socialIcon} />
          </Grid>
          <Grid item>
            <TwitterIcon className={classes.socialIcon} />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
