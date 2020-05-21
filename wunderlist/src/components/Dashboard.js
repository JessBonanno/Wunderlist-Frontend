import React from "react";
import Grid from "@material-ui/core/Grid";
// MUI imports
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
    marginTop: "5em",
    marginLeft: 300,
    maxWidth: "80%",
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="row" marginTop="10em" justify="space-evenly">
      <Grid item>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <List disablePadding className={classes.drawerList}>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <TodayTwoToneIcon fontSize="large" />
              </ListItemIcon>

              <ListItemText className={classes.drawerItem} disableTypography>
                Today's Lists
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <DateRangeTwoToneIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText className={classes.drawerItem} disableTypography>
                Week Lists
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listIcon}>
                <CalendarTodayTwoToneIcon fontSize="large" />
              </ListItemIcon>

              <ListItemText className={classes.drawerItem} disableTypography>
                Month Lists
              </ListItemText>
            </ListItem>
            <Divider variant="middle" className={classes.drawerDivider} />
            <ListItem>
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

      <Grid item>
        <Grid item container className={classes.cardContainer}>
          {props.noteData.map((note) => (
            <Grid item className={classes.card}>
              <ListCard note={note}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
