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
  const classes = useStyles();
  const [currentList, updatedList] = useState();
  const [todo, setTodo] = useState({
    newitem: "",
    newlist: "",
    existinglist: "",
    timeinterval: "",
  });


  const [form, setForm] = useState({
    newitem: "",
    newlist: "",
    existinglist: "",
    timeinterval: "",
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



  // const formSubmit = (e) => {
  //   e.preventDefault(); 
  //   console.log(form) ;
  //   setTodo(form);
  //   setForm({
  //   newitem: "",
  //   newlist: "",
  //   existinglist: "",
  //   timeinterval: "",
  //   });



 

  return (
    // form container
    <form >
    <Grid container className={classes.formPageContainer} direction='column' alignItems='center'>
      <Grid item>
        <Typography variant='h2'>Add new list</Typography>
      </Grid>
      
      <Grid item container justify='space-evenly' className={classes.formContainer}>
        <Grid item>
          <Paper elevation={10}>
            <TextField value={form.newitem} name="newitem" id="outlined-basic" label="Add Item" variant="outlined" />
          </Paper>
        </Grid>
        <Button variant='outlined'>save</Button>

        <Grid item>
          <Paper elevation={10}>
            <TextField value={form.newlist} name="newlist" id="outlined-basic" label="New List" variant="outlined" />
          </Paper>
        </Grid>
        <Button variant='outlined'>save</Button>

          <Grid item><FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose Existing List</InputLabel>
        <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={form.existinglist}
          onChange={handleSelectChange}
          name="existinglist">         
          {props.noteData.map((note) => {
            return (
              <MenuItem value={form.existinglist}>{note.name}</MenuItem>
            )
          })}
        </Select>


      </FormControl>
        </Grid>
        <Grid item><FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose Existing List</InputLabel>
        <Select
          label Id="demo-simple-select-label"
          id="demo-simple-select"
          value={form.timeinterval}
          onChange={handleSelectChange}
          name="timeInterval">
            <MenuItem value={form.timeinterval}>Day</MenuItem>
            <MenuItem value={form.timeinterval}>Week</MenuItem>
            <MenuItem value={form.timeinterval}>Month</MenuItem>
            <MenuItem value={form.timeinterval}>General</MenuItem>
          })}
        </Select>
      </FormControl>


        </Grid>
        <Grid item>
        <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleCheckboxChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Recurring"
      />
        </Grid>
      </Grid>
    </Grid>
    </form>
  );
}