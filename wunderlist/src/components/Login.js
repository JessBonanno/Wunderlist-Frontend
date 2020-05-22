import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  loginContainer: {
    margin: "15em auto",
  },
  loginPaper: {
    height: "100%",
    padding: "5em",
  },
  loginField: {
    margin: "3em",
  },
});

export default function Login() {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [credential, setCredentials] = useState({});

  const handleLoginChanges = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setCredentials(formValues);
    setFormValues({ username: "", password: "" });
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.loginContainer}
    >
      <Paper variant="elevation" elevation="10" className={classes.loginPaper}>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h5">
              Enter your credentials and lets get{" "}
              <span style={{ fontStyle: "italic" }}>productive!</span>
            </Typography>
          </Grid>
          <form
            className={classes.root}
            id="loginForm"
            noValidate
            autoComplete="off"
          >
            <Grid item>
              <TextField
                color="secondary"
                className={classes.loginField}
                required
                id="standard-required"
                label="UserName"
                name="username"
                value={formValues.username}
                onChange={handleLoginChanges}
              />
              <TextField
                color="secondary"
                className={classes.loginField}
                required
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={formValues.password}
                onChange={handleLoginChanges}
              />
            </Grid>
            <Grid item align="right">
              <Button
                variant="outlined"
                type="submit"
                form="loginForm"
                onClick={handleLoginSubmit}
              >
                Login
              </Button>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}
