import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
// local components
import theme from "./ui/Theme";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  formPageContainer: {
    marginTop:"10em",
  },
  formContainer: {
    marginTop:"10em",
    width:'60%',
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

  const handleChange = (e) => {
    const value = []
    setUser({ ...user, [e.target.firstname]: value });
  };



  const formSubmit = (e) => {
    e.preventDefault(); 
    console.log("ORDER ACCEPTED & VALIDATED");
    // axios
    //   .post("https://reqres.in/api/users", formState)
    //   .then((res) => {
    //     setUsers([...users, res.data]);
    //   })
    //   .catch((err) => console.log(err));
  };










  const classes = useStyles();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });





  const [age, setAge] = React.useState('');
  const [state, setState] = React.useState({
    checkedB: false,
  });



  const handleSelectChange = (event) => {
    setAge(event.target.value);
  };




  const handleCheckboxChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };



  return (
    // form container
    <form>
      <Grid container className={classes.formPageContainer} direction='column' alignItems='center' ><h2>New User</h2>
        <Paper elevation={3}>
          <TextField value={user.firstname} id="outlined-basic" label="First Name" variant="outlined" name="firstName" onChange={handleChange} /></Paper>
        <Paper elevation={3}>
          <TextField value={user.lastname} type="email" id="outlined-basic" label="Last Name" variant="outlined" name="lastName" onChange={handleChange} /></Paper>
        <Paper elevation={3}>
          <TextField value={user.email} type="email" id="outlined-basic" label="Email Address" variant="outlined" name="email" onChange={handleChange} /></Paper>
        <Paper elevation={3}>
          <TextField value={user.password} type="password" id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleChange} /></Paper>
        <Grid>
          <Button variant='outlined' onClick={formSubmit}>save</Button>
        </Grid>
      </Grid>
    </form>
  );
  
}