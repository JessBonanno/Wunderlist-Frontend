import React from "react";
import { Link, useHistory } from "react-router-dom";
// MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Divider from "@material-ui/core/Divider";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles, useTheme } from "@material-ui/core/styles";


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

const useStyles = makeStyles((theme) => ({
  appbar: {
    zIndex: theme.zIndex.modal + 1,
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
    marginRight: '2em'
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
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory().location.pathname;

  console.log(history);

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar}>
          <Toolbar disableGutters>
            <Tabs
              className={classes.tabContainer}
              textColor={theme.palette.common.white}
            >
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              ></Tab>
              <Divider
                orientation="vertical"
                flexItem
                className={classes.tabDivider}
              />
              <Tab
                className={classes.tab}
                label="Dashboard"
                component={Link}
                to="/dashboard"
              ></Tab>
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
