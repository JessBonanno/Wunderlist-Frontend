import React, { useState, useEffect } from "react";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// local imports
import theme from "./ui/Theme";

const validationSchema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

const useStyles = makeStyles({
  loginContainer: {
    margin: "10em auto 0",
    [theme.breakpoints.down("md")]: {
      margin: "8em auto 0",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "6em auto 0",
      maxWidth: "95%",
    },
  },
  loginPaper: {
    height: "100%",
    padding: "5em",
    [theme.breakpoints.down("md")]: {
      padding: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
    },
  },
  inputContainer: {
    marginTop: "2rem",
  },

  loginField: {
    margin: "3em 2em 1em",
    [theme.breakpoints.down("sm")]: {
      margin: "1em",
    },
  },
  errorMessage: {
    fontSize: "1.1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
});

export default function Login() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [canSubmit, setCanSubmit] = useState(false);
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
      setCanSubmit(valid);
    });
  }, [formValues]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      setCredentials(formValues);
      setFormValues({ username: "", password: "" });
    } else {
      alert("You must enter a username and password");
    }
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
            <Typography variant="h5" style={{ textAlign: "center" }}>
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
            <Grid
              item
              container
              direction={matchesSM && "column"}
              alignItems="center"
              className={classes.inputContainer}
            >
              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "50%" }}
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
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    className={classes.errorMessage}
                    align="right"
                    style={{
                      display: errors.username.length > 0 ? undefined : "none",
                    }}
                  >
                    {errors.username}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                item
                container
                direction="column"
                style={{ maxWidth: "50%" }}
              >
                <Grid item>
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
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    className={classes.errorMessage}
                    align="right"
                    style={{
                      display: errors.password.length > 0 ? undefined : "none",
                    }}
                  >
                    {errors.password}
                  </Typography>{" "}
                </Grid>
              </Grid>
            </Grid>
            <Grid item align={matchesSM ? "center" : "right"}>
              <Button
                variant="outlined"
                type="submit"
                form="loginForm"
                onClick={handleLoginSubmit}
                style={{ marginTop: "3em" }}
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
