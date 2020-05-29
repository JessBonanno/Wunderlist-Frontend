import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// local components
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formPageContainer: {
    marginTop: "15em",
  },
  formContainer: {
    marginTop: "10em",
    width: "60%",
  },

  lastbtn: {
    marginTop: "1em",
    marginBottom: "1em",
  },

  formItemslast: {
    marginBottom: "0em",
  },

  formItems: {
    marginBottom: "1em",
  },

  topForm: {
    borderRadius: "15px",
    justifyContent: "center",
    margin: "auto ",
    width: "25%",
    height: "5",
    [theme.breakpoints.down("md")]: {
      margin: "8em auto 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "6em auto 0",
      width: "95%",
    },
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
    username: "",
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
      username: "",
      password: "",
    });

    // axios
    //   .post("https://reqres.in/api/users", formState)
    //   .then((res) => {
    //     setUsers([...users, res.data]);
    //   })
    //   .catch((err) => console.log(err));

    axiosWithAuth()
      .post("/auth/register", form)
      .then((res) => {
        console.log('register res: ', res);
        
        localStorage.setItem("token", res.data.payload);

        props.history.push("/dashboard");
      })
      .catch((err) => console.log("axios regis err", err));
  };

  console.log(user);

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
          <h2>New User</h2>
          <Grid item>
            <Paper
              className={classes.formItems}
              elevation={3}
              value={form.username}
            >
              <TextField
                type="text"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                name="username"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          {/* <Grid item><Paper className={classes.formItems} elevation={3} value={form.lastname}>
            <TextField
              type="text"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              name="lastname"
              onChange={handleChange}
            />
          </Paper></Grid> */}
          {/* <Grid item><Paper className={classes.formItems} elevation={3} value={form.email}>
            <TextField
              type="email"
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              name="email"
              onChange={handleChange}
            />
          </Paper></Grid> */}
          <Grid item>
            <Paper
              className={classes.formItems}
              elevation={3}
              value={form.password}
            >
              <TextField
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                onChange={handleChange}
              />
            </Paper>
          </Grid>
          <Grid className={classes.lastbtn}>
            <Button onClick={formSubmit} variant="outlined">
              save
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
}
