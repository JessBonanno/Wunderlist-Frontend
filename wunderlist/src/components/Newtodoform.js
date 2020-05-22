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




  const classes = useStyles();
  const [currentList, updatedList] = useState();
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
    <Grid container className={classes.formPageContainer} direction='column' alignItems='center'>
      <Grid item>
        <Typography variant='h2'>Add new list</Typography>
      </Grid>
      <Grid item container justify ='space-evenly' className={classes.formContainer}>
        <Grid item>
        <Paper elevation={10}>
        <TextField id="outlined-basic" label="Add Item" variant="outlined" />
        </Paper>
        </Grid>
        <Button variant='outlined'>save</Button>
        <Grid item>
        <Paper elevation={10}>
        <TextField id="outlined-basic" label="New List" variant="outlined" />
        </Paper>
        </Grid>
        <Button variant='outlined'>save</Button>
          <Grid item><FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Choose Existing List</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleSelectChange}
        >
          {props.noteData.map((note) => {
            return (
              <MenuItem value={20}>{note.name}</MenuItem>
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
          value={age}
          onChange={handleSelectChange}
        >
            <MenuItem value={20}>Day</MenuItem>
            <MenuItem value={20}>Week</MenuItem>
            <MenuItem value={20}>Month</MenuItem>
            <MenuItem value={20}>General</MenuItem>
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
  );
}