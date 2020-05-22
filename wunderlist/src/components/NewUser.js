import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
  const allLists = ["one","two","three","four"];

  const [currentList,updatedList] = useState();

  return (
    <div className="formContainer">
      <form>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}><Paper className={classes.paper}><h1>Add new To-Do</h1></Paper></Grid>
        <Grid item xs={6}>
              <Paper className={classes.paper}>    
              <div><label>Type new List
                  <input  type="textarea" placeholder="Type new list here" name="name" id="name"  />
                </label></div>
              </Paper></Grid>
        <Grid item xs={6}><Paper className={classes.paper}>
              <div><label>
              Add to existing list
              <div><select  name="size" id="size">
                <option> {allLists[0]}</option>
                <option> {allLists[0]}</option>
                <option> {allLists[0]}</option>
                <option> {allLists[0]}</option>
              </select></div>
            </label></div>

        </Paper></Grid>
        <Grid item xs={6}><Paper className={classes.paper}>
              <div><label>Type new to-do
                  <input  type="textarea" placeholder="Type new TO-DO here" name="name" id="name"  />
                </label></div>
              </Paper></Grid>
        <Grid item xs={6}><Paper className={classes.paper}>
        <div><label>
              Add to recurring
              <div><select  name="size" id="size">
                <option > Daily</option>
                <option > Weekly</option>
                <option > Monthly</option>
                <option > Anytime</option>
              </select></div>
            </label></div>
          
          </Paper></Grid>
        <Grid item xs={12}><Paper className={classes.paper}><button className="addBTN">Add To-Do</button></Paper></Grid>
      </Grid>
    </div>
    </form>
    </div>
  );
}