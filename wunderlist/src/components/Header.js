import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TodayTwoToneIcon from "@material-ui/icons/TodayTwoTone";
import CalendarTodayTwoToneIcon from "@material-ui/icons/CalendarTodayTwoTone";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import PhotoSizeSelectActualTwoToneIcon from "@material-ui/icons/PhotoSizeSelectActualTwoTone";
import DateRangeTwoToneIcon from "@material-ui/icons/DateRangeTwoTone";



// local imports

import postIt from "../assets/images/postit.png";
import { useMediaQuery } from "@material-ui/core";

//  this will allow the header bar to float above the scrolled page
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

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
    marginRight: "2em",
  },
  tab: {
    ...theme.typography.tab,
    color: theme.palette.common.white,
    textTransform: "none",
  },
  tabDivider: {
    margin: ".5em",
    backgroundColor: theme.palette.common.white,
  },
  headerImg: {
    height: "3em",
    paddingLeft: ".5em",
  },
  menuButton: {
    marginLeft: "auto",
    marginRight: "2em",
  },
}));

export default function Header(props) {
  const history = useHistory().location.pathname;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState(0);

    // state and functions for drawer
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
  
  
    const handleMenuClick = (e) => {
      setAnchorEl(e.currentTarget);
      setOpenMenu(true);
    };
  
    const handleMenuClose = (e) => {
      setAnchorEl(null);
      setOpenMenu(false);
    };
  
    const handleMenuItemClick = (e, i) => {
      setAnchorEl(null);
      setOpenMenu(false);
    };
  
  
  

  const handleTabChange = (e, newValue) => {
    setValue(newValue);
  };
  const tabs = (
    <Tabs
      value={value}
      className={classes.tabContainer}
      onChange={handleTabChange}
    >
      <Tab
        index={0}
        className={classes.tab}
        label="Home"
        component={Link}
        to="/"
      ></Tab>
      <Divider orientation="vertical" flexItem className={classes.tabDivider} />
      <Tab
        index={1}
        className={classes.tab}
        label="Dashboard"
        component={Link}
        to="/dashboard"
      ></Tab>
    </Tabs>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        classes={{ paper: classes.drawer }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding className={classes.drawerList}>
            <ListItem disableGutters component={Link} to="/dashboard/today">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <TodayTwoToneIcon className={classes.listIcon} />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                Today's Lists
              </ListItemText>
            </ListItem>
            <ListItem disableGutters component={Link} to="/dashboard/week">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <DateRangeTwoToneIcon className={classes.listIcon} />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                Week Lists
              </ListItemText>
            </ListItem>
            <ListItem disableGutters component={Link} to="/dashboard/month">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <CalendarTodayTwoToneIcon className={classes.listIcon} />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                Month Lists
              </ListItemText>
            </ListItem>
            <ListItem disableGutters component={Link} to="/dashboard/general">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <PlaylistAddCheckTwoToneIcon className={classes.listIcon} />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                General
              </ListItemText>
            </ListItem>
            <Divider variant="middle" className={classes.drawerDivider} />
            <ListItem disableGutters component={Link} to="/form">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <AddCircleTwoToneIcon className={classes.listIcon} />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                Add / Edit
              </ListItemText>
            </ListItem>
            <ListItem disableGutters component={Link} to="/themes">
              <Hidden xsDown>
                <ListItemIcon className={classes.listIcon}>
                  <PhotoSizeSelectActualTwoToneIcon
                    className={classes.listIcon}
                  />
                </ListItemIcon>
              </Hidden>
              <ListItemText className={classes.drawerItem} disableTypography>
                Themes
              </ListItemText>
            </ListItem>
          </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );


  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <img alt="sticky note" src={postIt} className={classes.headerImg} />
            {/* refactor commented out code */}
            {/* {matchesSM && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuOpenIcon style={{ fontSize: "1.6em" }} />
              </IconButton>
            )}
            <Hidden smDown>{tabs}</Hidden> */}
            {tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
