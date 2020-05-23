import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

// local imports
import theme from "./ui/Theme";
import UserThemes from "./UserThemes";

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

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
  const theme = useTheme();
  const [canSubmit, setCanSubmit] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [credential, setCredentials] = useState({});

  const validation = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(validationSchema, e.target.name)
      .validate(value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
  };

  const handleLoginChanges = (e) => {
    e.persist();
    validation(e);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    validationSchema.isValid(formValues).then((valid) => {
      setCanSubmit(!valid);
    });
  }, [formValues]);

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
              <Grid item style={{ height: "2em" }}>
                {canSubmit && (
                  <Typography
                    variant="subtitle1"
                    className="can-submit"
                    style={{ marginTop: "2em" }}
                  >
                    Please fill all required fields to submit
                  </Typography>
                )}
              </Grid>
            </Grid>
            <Grid item style={{ height: "2em" }}>
              <Typography
                variant="subtitle1"
                className="error"
                align="right"
                style={{
                  display: errors.username.length > 0 ? undefined : "none",
                }}
              >
                {errors.username}
              </Typography>
              <Typography
                variant="subtitle1"
                className="error"
                align="right"
                style={{
                  display: errors.username.length > 0 ? undefined : "none",
                }}
              >
                {errors.password}
              </Typography>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}
