import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentTurnedInTwoToneIcon from "@material-ui/icons/AssignmentTurnedInTwoTone";

// local components
import CheckList from "./Checklist";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "2em",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  editButton: {
    marginLeft: "auto",
  },
});

export default function ListCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          List Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Reoccurring?
        </Typography>
        <CheckList />
      </CardContent>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          <CardActions>
            <Button size="small" className={classes.editButton}>
              <AssignmentTurnedInTwoToneIcon atl="mark completed icon" />
            </Button>
            <Typography variant="button">Mark as Completed</Typography>
          </CardActions>
        </Grid>

        <Grid item>
          <CardActions>
            <Button size="small" className={classes.editButton}>
              <EditIcon atl="edit icon" />
            </Button>
            <Typography variant="button">Edit</Typography>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
