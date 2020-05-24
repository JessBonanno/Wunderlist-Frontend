import { createMuiTheme } from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

const wunderBlack = "#362c36";
const wunderDarkGrey = "#4d4c59";
const wunderGrey = "#71777d";
const wunderBlue = "#47dbd5";
const wunderWhite = "#f7f6f0";

export default createMuiTheme({
  palette: createPalette({
    common: {
      grey: wunderGrey,
      white: wunderWhite,
      black: wunderBlack,
    },
    primary: {
      main: wunderDarkGrey,
    },
    secondary: {
      main: wunderBlue,
    },
  }),
  typography: {
    tab: {
      fontSize: "1.6rem",
      color: wunderWhite,
      
    },
    listIcon: {
      color: wunderBlue,
    },
    cardIcon: {
      color: wunderBlue,
    },
    reoccurring: {
      color: "red",
    },
    loginField: {
      color: wunderBlue,
    },
    subtitle1: {
      color: 'red',
      fontSize: "1.2rem",
    },
  },
});
