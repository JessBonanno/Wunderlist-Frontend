import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import theme from "./ui/Theme";
// local components
const useStyles = makeStyles({
  homeHeader: {
    marginTop: "10em",
  },
  homeButtons: {
    width: 200,
    borderRadius: 0,
    fontSize: "1.5rem",
    margin: "4em 1em",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
});
export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
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
          <Typography variant="h1" style={{ textAlign: "center" }}>
            Welcome To Wunderlist
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/form"
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