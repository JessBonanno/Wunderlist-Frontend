import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// local imports
import theme from "./ui/Theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

export default function CheckList({ noteItems }) {
  // setting the list items back to arry from string backend format
  const listItems = noteItems.split(',')

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {listItems.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                size={matchesSM && "small"} // changes size of checkbox responsively
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={`${value}`}
              classes={{ primary: classes.listItem }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
