import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// local components
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formPageContainer: {
    marginTop: "10em",
  },
  formContainer: {
    marginTop: "10em",
    width: "60%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NewTodoForm(props) {
  const classes = useStyles();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setUser(form);
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    // axios
    //   .post("https://reqres.in/api/users", formState)
    //   .then((res) => {
    //     setUsers([...users, res.data]);
    //   })
    //   .catch((err) => console.log(err));
  };

  console.log(user);

  return (
    // form container
    <form>
      <Grid
        container
        className={classes.formPageContainer}
        direction="column"
        alignItems="center"
      >
        <h2>New User</h2>
        <Paper elevation={3} value={form.firstname}>
          <TextField
            type="text"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            name="firstname"
            onChange={handleChange}
          />
        </Paper>
        <Paper elevation={3} value={form.lastname}>
          <TextField
            type="text"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="lastname"
            onChange={handleChange}
          />
        </Paper>
        <Paper elevation={3} value={form.email}>
          <TextField
            type="email"
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            name="email"
            onChange={handleChange}
          />
        </Paper>
        <Paper elevation={3} value={form.password}>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
            onChange={handleChange}
          />
        </Paper>
        <Grid>
          <Button onClick={formSubmit} variant="outlined">
            save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
