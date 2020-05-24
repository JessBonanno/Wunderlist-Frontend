import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

//  local imports
import backgrounds from "../backgrounds";
import theme from "./ui/Theme";

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    margin: "1em",
    [theme.breakpoints.down("xs")]: {
      maxWidth: 150,
    },
  },
  media: {
    height: 140,
  },
  themesContainer: {
    marginTop: "5em",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "4em",
    },
  },
  cardContainer: {
    marginTop: '4em',
  },
});

export default function UserThemes({ handleThemeSelection }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.themesContainer}
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h3">
          Choose your theme
        </Typography>
      </Grid>
      <Grid item container justify="space-evenly" className={classes.cardContainer}>
        {backgrounds.map((image) => {
          console.log(image);

          return (
            <Grid item>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={image.small}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {image.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleThemeSelection(image)}
                    component={Link}
                    to="/dashboard"
                  >
                    Choose Theme
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
