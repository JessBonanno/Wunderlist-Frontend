import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";

// local imports
import ListCard from "./ListCard";
import theme from "./ui/Theme";

const useStyles = makeStyles((theme) => ({
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
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [filteredNotes, setFilteredNotes] = useState([]);

  // setting filtered notes to be a new array to match the selected category of day, week, month or general
  // this will conditionally show the lists accordingly
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
      {/* card block */}
      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        className={classes.cardContainer}
        justify={matchesXS ? undefined : "space-evenly"}
        alignItems={matchesXS && "center"}
        style={{
          backgroundImage: `url(${props.userTheme.large})`, // setting background to chosen user theme
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
    </Grid>
  );
}
