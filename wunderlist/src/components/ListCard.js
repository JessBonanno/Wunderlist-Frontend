import React from "react";
import { makeStyles} from "@material-ui/core/styles";
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
import theme from "./ui/Theme";

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

export default function ListCard({ note }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {note.name}
        </Typography>
        {note.reoccurring && (
          <Typography
            style={{ color: "red" }}
            className={classes.pos}
            color="textSecondary"
          >
            Reoccurring
          </Typography>
        )}

        <CheckList noteItems={note.noteItems} />
      </CardContent>
      <Grid container direction="column" alignItems="flex-start">
        <Grid item>
          {!note.reoccurring && (
            <CardActions>
              <Button size="small" className={classes.editButton}>
                <AssignmentTurnedInTwoToneIcon atl="mark completed icon" />
              </Button>
              <Typography variant="button">Mark as Completed</Typography>
            </CardActions>
          )}
        </Grid>

        <Grid item>
          <CardActions>
            <Button size="small" className={classes.editButton}>
              <EditIcon atl="edit icon" />
            </Button>
            <Typography variant="button">Edit</Typography>
          </CardActions>
        </Grid>
        <Typography className={classes.cardCategory}>{note.listId}</Typography>
      </Grid>
    </Card>
  );
}
