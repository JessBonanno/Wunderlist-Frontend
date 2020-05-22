import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Theme from "./ui/Theme";

const useStyles = makeStyles({
  homeHeader: {
    marginTop: "5em",
  },
});

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Grid container direction="column" className={classes.homeHeader}>
        <Grid item>
          <Typography variant="h1">Welcome To Wunderlist</Typography>
        </Grid>
      </Grid>
    </>
  );
}
