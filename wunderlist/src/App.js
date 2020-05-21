import React from "react";
// mui imports
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// local component imports
import Header from "./components/Header";
import theme from "./components/ui/Theme";

function App() {
  console.log(theme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
