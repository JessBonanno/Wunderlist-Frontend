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

// local imports
import CheckList from "./Checklist";
import theme from "./ui/Theme";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: "5em",
    padding: "1em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 1,
  },
  pos: {
    marginBottom: 12,
  },
  editButton: {
    ...theme.typography.cardIcon,
    marginLeft: "auto",
  },
  cardCategory: {
    textTransform: "uppercase",
    color: theme.palette.secondary.main,
    marginLeft: "auto",
    marginRight: "1em",
    marginBottom: ".5em",
  },
});

export default function ListCard(props) {
  const classes = useStyles();
  
// need to make this functional
  const handleCompleted = (name) => {

  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h2">
          {props.note.name}
        </Typography>
        {props.note.reoccurring && (
          <Typography
            style={{ color: "red" }}
            className={classes.pos}
            color="textSecondary"
          >
            Reoccurring
          </Typography>
        )}

        <CheckList noteItems={props.note.noteItems} />
      </CardContent>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          {!props.note.reoccurring && (
            <CardActions>
              <Button
                size="small"
                className={classes.editButton}
                onClick={() => handleCompleted(props.note.name)}
              >
                <AssignmentTurnedInTwoToneIcon atl="mark completed icon" />
              </Button>
              <Typography variant="button" style={{ fontSize: "1.2rem" }}>
                Mark as Completed
              </Typography>
            </CardActions>
          )}
        </Grid>

        <Grid item>
          <CardActions>
            <Button
              size="small"
              className={classes.editButton}
              component={Link}
              to="/form"
            >
              <EditIcon atl="edit icon" />
            </Button>
            <Typography variant="button" style={{ fontSize: "1.2rem" }}>
              Edit
            </Typography>
          </CardActions>
        </Grid>
        <Typography className={classes.cardCategory}>{props.note.listId}</Typography>
      </Grid>
    </Card>
  );
}
