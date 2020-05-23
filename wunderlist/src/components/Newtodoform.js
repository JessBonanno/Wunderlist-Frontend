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
  const [todo, setTodo] = useState({

  });


  const [form, setForm] = useState({
    newitem: "",
    newlist: "",
    existinglist: "",
    timeinterval: "",
    recurring: false,
  });



  
  const handleChange = (e) => {
    e.persist();
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name] : value });
  };


  const formSubmit = (e) => {
    e.preventDefault(); 
    console.log(form) ;
    setTodo(form);
    setForm({
    newitem: "",
    newlist: "",
    existinglist: "",
    timeinterval: "",
    recurring: false,
    })};



const timeintervalarray = [
  "Day",
  "Week",
  "Month",
  "General",
]



  console.log(todo);








 

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
            <TextField value={form.newitem} type="text" name="newitem" id="outlined-basic" label="Add Item" variant="outlined" onChange={handleChange}/>
          </Paper>
        </Grid>
        <Button variant='outlined' onClick={handleChange}>save</Button>

        <Grid item>
          <Paper elevation={10}>
            <TextField value={form.newlist} type="text" name="newlist" id="outlined-basic" label="New List" variant="outlined" onChange={handleChange}/>
          </Paper>
        </Grid>
        <Button variant='outlined'>save</Button>

          <Grid item>
           <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Choose Existing List</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="existinglist"
                value={form.existinglist}
                onChange={handleChange}
                name="existinglist">
                <MenuItem value="">None</MenuItem>
                {props.noteData.map((note) => {
                  return (
                    
                      <MenuItem value={note.name}>{note.name}</MenuItem>
                    
                  )})}
              </Select>
            </FormControl>
         </Grid>
         <Grid item>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Choose Time Interval</InputLabel>
              <Select
                label Id="demo-simple-select-label"
                id="timeinterval"
                value={form.timeinterval}
                onChange={handleChange}
                name="timeinterval">
                  {timeintervalarray.map((time) => {
                    return (
                    <MenuItem value={time}>{time}</MenuItem>
                      )
                  }

                  )}

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
      />
        </Grid>
      </Grid>
    </Grid>
    <Button onClick={formSubmit} variant='outlined'>save</Button>
    </form>
  );
}