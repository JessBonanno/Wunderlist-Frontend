import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// local imports
import theme from "./ui/Theme";

//state management
import { addTodo } from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  formPageContainer: {
    marginTop: "7em",
  },
  formContainer: {
    margin: "5em 0 10em",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  topForm: {
    borderRadius: "15px",
    justifyContent: "center",
    margin: "auto ",
    width: "45%",
    height: "5",
    [theme.breakpoints.down("md")]: {
      margin: "8em auto 0",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "6em auto 0",
      width: "95%",
    },
  },

  addItemContainer: {
    margin: "2em 0",
  },
}));

export default function NewTodoForm(props) {
  const classes = useStyles();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState({});
  const [form, setForm] = useState({
    listItems: [],
    title: "",
    frequency: "",
    reocurring: false,
  });

  const [newItem, setNewItem] = useState({
    item: "",
  });

  const [listItems, setListItems] = useState([]);
  const frequency = ["day", "week", "month", "general"];

  const handleChange = (e) => {
    e.persist();
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleItemChange = (e) => {
    setNewItem({ ...newItem, item: e.target.value });
  };

  const handleItemSubmit = (e) => {
    e.preventDefault();
    setListItems([...listItems, newItem]);

    addTodo(newItem)

    setNewItem({
      item: "",
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setTodo({ ...form, listItems: listItems });
    setForm({
      listItems: [],
      title: "",
      frequency: "",
      recurring: false,
    });
    setListItems([]);
  };

  console.log(todo);

  const newName = (
    <Grid item>
      <Paper elevation={10}>
        <TextField
          style={{ width: 300 }}
          value={form.title}
          type="text"
          name="title"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={handleChange}
        />
      </Paper>
    </Grid>
  );

  const existing = (
    <Grid item>
      <FormControl className={classes.formControl} style={{ width: 300 }}>
        <InputLabel id="demo-simple-select-label">
          Choose Existing List
        </InputLabel>
        <Select
          id="title"
          value={form.title}
          onChange={handleChange}
          name="title"
        >
          <MenuItem value="">None</MenuItem>
          {props.noteData.map((note) => {
            return <MenuItem value={note.name}>{note.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Grid>
  );

  return (
    // form container
    <form>
      <Paper variant="elevation" elevation={16} className={classes.topForm}>
        <Grid
          container
          className={classes.formPageContainer}
          direction="column"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h2">Add New List</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              onClick={() => setEdit(!edit)}
              style={{ margin: "2em" }}
            >
              {!edit ? "Edit Existing" : "New List"}
            </Button>
          </Grid>

          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.formContainer}
          >
            {edit ? existing : newName}
            <Grid
              item
              container
              justify="center"
              className={classes.addItemContainer}
            >
              <Grid item style={{ margin: "0 1em" }}>
                <Paper elevation={10}>
                  <TextField
                    value={newItem.item}
                    type="text"
                    name="item"
                    id="outlined-basic"
                    label="Add Item"
                    variant="outlined"
                    onChange={handleItemChange}
                  />
                </Paper>
              </Grid>
              <Grid item style={{ margin: matchesMD ? "1em" : "0 1em" }}>
                <Button variant="outlined" onClick={handleItemSubmit}>
                  Add
                </Button>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify="center"
              alignItems="flex-end"
              style={{ marginBottom: "2em" }}
            >
              <Grid item style={{ margin: "0 2em" }}>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">When?</InputLabel>
                  <Select
                    label
                    Id="demo-simple-select-label"
                    id="frequency"
                    value={form.frequency}
                    onChange={handleChange}
                    name="frequency"
                  >
                    {frequency.map((time) => {
                      return <MenuItem value={time}>{time}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      type="checkbox"
                      id="recurring"
                      checked={form.recurring}
                      onChange={handleChange}
                      name="recurring"
                      color="primary"
                    />
                  }
                  label="Recurring?"
                />
              </Grid>
            </Grid>
            <Grid item>
              <Button onClick={formSubmit} variant="outlined">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
