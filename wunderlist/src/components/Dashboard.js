import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Typography from "@material-ui/core/Typography";

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
  const [id, setId] = useState(props.userId);
  const [unfilteredTodos, setUnfilteredTodos] = useState([]);

  const dummyNotes = [
    {
      category: "day",
      completed: false,
      id: 2,
      item: "trash",
      name: "chores",
      reoccurring: false,
      todo_id: 27,
    },
    {
      category: "day",
      completed: false,
      id: 1,
      item: "dishwasher",
      name: "chores",
      reoccurring: false,
      todo_id: 27,
    },
    {
      category: "month",
      completed: false,
      id: 3,
      item: "butter",
      name: "groceries",
      reoccurring: true,
      todo_id: 28,
    },
    {
      category: "month",
      completed: false,
      id: 2,
      item: "eggs",
      name: "groceries",
      reoccurring: true,
      todo_id: 28,
    },
    {
      category: "month",
      completed: false,
      id: 1,
      item: "milk",
      name: "groceries",
      reoccurring: true,
      todo_id: 28,
    },
  ];

  // this function will reduce all the items belonging to one todo into an array inside the object instead of an seperate object for each list item
  let reducedList = {};
  unfilteredTodos.forEach((note) => {
    if (!reducedList[note.name]) {
      reducedList[note.name] = {
        name: note.name,
        noteItems: [],
        reoccurring: note.reoccurring === 0 ? false : true,
        completed: note.completed === 0 ? false : true,
        category: note.category,
        id: note.todo_id,
      };
    }
    reducedList[note.name].noteItems.push(note.item);
  });

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}/todos`)
      .then((res) => {
        console.log("get res: ", res);
        setUnfilteredTodos(res.data);
      })
      .catch((err) => console.log("login post err", err));
  }, [id]);

  // setting filtered notes to be a new array to match the selected category of day, week, month or general
  // this will conditionally show the lists accordingly
  useEffect(() => {
    setFilteredNotes(
      Object.values(reducedList).filter((note) =>
        history.includes(note.category)
      )
    );
  }, [history]);

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${props.userTheme.large})`, // setting background to chosen user theme
        }}
      >
        {/* <Grid item style={{marginTop: '3em', color: theme.palette.common.white, textAlign: 'center'}}>
          <Typography variant="h4">
            Welcome To Your Dashboard!<br></br> Use the menu to select your list
            view.
          </Typography>
        </Grid> */}

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
