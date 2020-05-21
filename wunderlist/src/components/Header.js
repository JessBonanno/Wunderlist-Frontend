import React from "react";
// MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
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

// ! this will allow the header bar to float above the scrolled page
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.common.grey,
  },
  toolbar: {
    ...theme.mixins.toolbar,
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
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Tabs className={classes.tabContainer} textColor={theme.palette.common.white}>
              <Tab className={classes.tab} label="Home"></Tab>
              <Tab className={classes.tab} label="Login"></Tab>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
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
    </>
  );
}
