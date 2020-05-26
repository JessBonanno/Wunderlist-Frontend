import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// local imports
import theme from "./ui/Theme";

const useStyles = makeStyles({
  homeHeader: {
    marginTop: "10em",
    padding: '1em',
    [theme.breakpoints.down("md")]: {
      marginTop: "7rem",
    },
  },
  homeButtons: {
    width: 200,
    borderRadius: 0,
    fontSize: "1.5rem",
    margin: "4em 1em",
    [theme.breakpoints.down("md")]: {
      width: 150,
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: 150,
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: 130,
      fontSize: "1rem",
    },
  },
});
export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.homeHeader}
      >
        <Grid item>
          <Typography
            variant="h1"
            style={{ textAlign: "center", fontSize: matchesSM && "3rem" }}
          >
            Welcome To Wunderlist
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/login"
              className={classes.homeButtons}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/register"
              className={classes.homeButtons}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
