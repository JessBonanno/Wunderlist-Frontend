import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInTwoToneIcon from "@material-ui/icons/AssignmentTurnedInTwoTone";
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';

// local imports
import CheckList from "./Checklist";
import theme from "./ui/Theme";

const useStyles = makeStyles({
  root: {
    marginTop: "5em",
    padding: "1em",
    [theme.breakpoints.down("sm")]: {
      width: 270,
      padding: ".2em",
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      padding: ".2em",
    },
  },
  cardContent: {
    padding: ".5em",
  },
  
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4rem",
      fontWeight: "bold",
    },
  },
  reoccurring: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  cardButton: {
    ...theme.typography.cardIcon,
    marginLeft: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  buttonText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
  cardCategory: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    marginLeft: "auto",
    marginRight: "1em",
    marginBottom: ".5em",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".9rem",
    },
  },
});

export default function ListCard(props) {
  const classes = useStyles();

  // need to make this functional
  const handleCompleted = (name) => {};

  const handleDelete = (name) => {};

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" component="h2" className={classes.title}>
          {props.note.name}
        </Typography>
        {props.note.reoccurring && (
          <Typography
            style={{ color: "red" }}
            color="textSecondary"
            className={classes.reoccurring}
          >
            Reoccurring
          </Typography>
        )}

        <CheckList noteItems={props.note.noteItems} />
      </CardContent>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          {!props.note.reoccurring && (
            <CardActions style={{padding: 0}}>
              <Button
                size="small"
                className={classes.cardButton}
                onClick={() => handleCompleted(props.note.name)}
              >
                <AssignmentTurnedInTwoToneIcon atl="mark completed icon" />
              </Button>
              <Typography variant="button" className={classes.buttonText}>
                Mark as Completed
              </Typography>
            </CardActions>
          )}
        </Grid>

        <Grid item>
          <CardActions style={{padding: 0}}>
            <Button
              size="small"
              className={classes.cardButton}
              onClick={() => handleDelete(props.note.name)}
              component={Link}
              to="/form"
            >
              <DeleteSweepTwoToneIcon alt='delete icon'/>
            </Button>
            <Typography variant="button" className={classes.buttonText}>
              Delete List
            </Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
