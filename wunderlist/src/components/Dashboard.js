import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// MUI imports
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

// local components
import ListCard from "./ListCard";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.common.grey,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
  },
  drawerList: {
    marginTop: "20em",
  },
  drawerItem: {
    ...theme.typography.tab,
  },
  drawerDivider: {
    margin: "1em",
    backgroundColor: theme.palette.common.white,
  },

  listIcon: {
    ...theme.typography.listIcon,
  },
  cardContainer: {
    marginLeft: 300,
    maxWidth: "80%",
  },
  addNote: {
    color: theme.palette.common.grey,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: ".5em",
  },
  buttonText: {
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: "5em",
    marginBottom: "1.5em",
    color: theme.palette.common.grey,
    fontWeight: 700,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory().location.pathname;
  const [filteredNotes, setFilteredNotes] = useState([]);

  // setting filtered notes to be a new array to match the selected category of day, week, month or general
  useEffect(() => {
    setFilteredNotes(
      props.noteData.filter((note) => history.includes(note.listId))
    );
  }, [history]);
  console.log(filteredNotes);

  return (
    <Grid
      container
      direction="row"
      style={{ marginTop: "10em" }}
      justify="space-evenly"
    >
      {/* menu block */}
      <Grid item>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <List disablePadding className={classes.drawerList}>
            <ListItem component={Link} to="/dashboard/today">
              <ListItemIcon className={classes.listIcon}>
                <TodayTwoToneIcon fontSize="large" />
              </ListItemIcon>

              <ListItemText className={classes.drawerItem} disableTypography>
                Today's Lists
              </ListItemText>
            </ListItem>
            <ListItem component={Link} to="/dashboard/week">
              <ListItemIcon className={classes.listIcon}>
                <DateRangeTwoToneIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText className={classes.drawerItem} disableTypography>
                Week Lists
              </ListItemText>
            </ListItem>
            <ListItem component={Link} to="/dashboard/month">
              <ListItemIcon className={classes.listIcon}>
                <CalendarTodayTwoToneIcon fontSize="large" />
              </ListItemIcon>

              <ListItemText className={classes.drawerItem} disableTypography>
                Month Lists
              </ListItemText>
            </ListItem>
            <Divider variant="middle" className={classes.drawerDivider} />
            <ListItem component={Link} to="/dashboard/general">
              <ListItemIcon className={classes.listIcon}>
                <PlaylistAddCheckTwoToneIcon fontSize="large" />
              </ListItemIcon>

              <ListItemText className={classes.drawerItem} disableTypography>
                General
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      {/* card block */}
      <Grid item container className={classes.cardContainer}>
        {history !== "/dashboard"
          ? filteredNotes.map((note, index) => (
              <Grid item className={classes.card} key={index}>
                <ListCard note={note} />
              </Grid>
            ))
          : [].map((note, index) => (
              <Grid item className={classes.card} key={index}>
                <ListCard note={note} />
              </Grid>
            ))}
      </Grid>
      {/* create task  */}
      <Grid item>
        <Typography variant="h5" className={classes.buttonText}>
          Add a note
        </Typography>
        <IconButton className={classes.addNote} aria-label="add note">
          <AddCircleTwoToneIcon style={{ fontSize: "4rem" }} />
        </IconButton>
      </Grid>
    </Grid>
  );
}
