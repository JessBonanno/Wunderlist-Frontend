import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden'

// local imports
import ListCard from "./ListCard";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.common.grey,

    [theme.breakpoints.down("sm")]: {
      width: 190,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
  },
  drawerList: {
    marginTop: "5em",
  },
  drawerItem: {
    ...theme.typography.tab,
    [theme.breakpoints.down("md")]: {
      fontSize: "1.6rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      fontSize: "1rem",
    },
  },
  drawerDivider: {
    margin: "1em",
    backgroundColor: theme.palette.common.white,
  },

  listIcon: {
    marginLeft: ".5em",
    ...theme.typography.listIcon,
  },
  cardContainer: {
    marginBottom: "5em",
    width: "100%",
    minHeight: "1000px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  addNote: {
    color: theme.palette.common.grey,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: ".5em",
  },
  buttonText: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: "5em",
    marginBottom: "1.5em",
    color: theme.palette.common.grey,
    fontWeight: 700,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const history = useHistory().location.pathname;
  const [filteredNotes, setFilteredNotes] = useState([]);

  // setting filtered notes to be a new array to match the selected category of day, week, month or general
  useEffect(() => {
    setFilteredNotes(
      props.noteData.filter((note) => history.includes(note.category))
    );
  }, [history, props.noteData]);

  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "2em" }}
      justify="space-evenly"
    >
      <Grid item>
        <Hidden smDown>
          <Typography
            variant="h2"
            style={{ marginTop: "1em", textAlign: "center" }}
          >
            Welcome To Your Dashboard
          </Typography>
        </Hidden>
      </Grid>
      {/* card block */}
      <Grid
        item
        container
        className={classes.cardContainer}
        justify="space-evenly"
        style={{
          backgroundImage: `url(${props.userTheme.large})`,
        }}
      >
        {history !== "/dashboard"
          ? filteredNotes.map((note, index) => (
              <Grid item className={classes.card} key={index}>
                <ListCard note={note} />
              </Grid>
            ))
          : [].map((note, index) => (
              <Grid item className={classes.card} key={index}>
                <ListCard
                  note={note}
                  setNoteData={props.setNoteData}
                  noteData={props.noteData}
                />
              </Grid>
            ))}
      </Grid>
      {/* create task refactored into drawer menu */}
      {/* <Grid item>
        <Typography variant="h5" className={classes.buttonText}>
          Add a note
        </Typography>
        <IconButton
          className={classes.addNote}
          aria-label="add note"
          component={Link}
          to="/form"
        >
          <AddCircleTwoToneIcon style={{ fontSize: "4rem" }} />
        </IconButton>
      </Grid> */}
    </Grid>
  );
}
