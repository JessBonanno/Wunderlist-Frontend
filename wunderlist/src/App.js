import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

// local imports

import Header from "./components/Header";
import theme from "./components/ui/Theme";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NewTodoForm from "./components/NewTodoForm";
import NewUser from "./components/NewUser.js";

import Login from "./components/Login";
import UserThemes from "./components/UserThemes";

const sampleNoteData = [
  // sample note data for development
  {
    name: "Groceries",
    noteItems: ["milk", "eggs", "bread"],
    reoccurring: false,
    completed: false,
    category: "day",
  },
  {
    name: "Chores",
    noteItems: ["rake the leaves", "run the dishwasher", "mop the kitchen"],
    reoccurring: false,
    completed: false,
    category: "week",
  },
  {
    name: "Bills to pay",
    noteItems: ["rent", "netflix", "electric", "Lambda ISA"],
    reoccurring: true,
    completed: false,
    category: "month",
  },
  {
    name: "Don't forget",
    noteItems: ["feed the pets", "eat dinner", "set an alarm for 5 am"],
    reoccurring: false,
    completed: false,
    category: "general",
  },
  {
    name: "Tidy up",
    noteItems: ["sweep", "take out trash", "wipe the counters"],
    reoccurring: true,
    completed: false,
    category: "day",
  },
  {
    name: "Shopping",
    noteItems: ["groceries", "cleaning supplies", "gas for the car"],
    reoccurring: true,
    completed: false,
    category: "week",
  },
  {
    name: "Pet stuff",
    noteItems: ["buy food", "go to groomer"],
    reoccurring: false,
    completed: false,
    category: "month",
  },
  {
    name: "After work",
    noteItems: ["take care of grocery list", "check tidy list", "call grandad"],
    reoccurring: false,
    completed: false,
    category: "general",
  },
];
function App() {
  const [noteData, setNoteData] = useState(sampleNoteData);

  const [userTheme, setUserTheme] = useState({});

  const handleThemeSelection = (image) => {
    console.log(image);
    setUserTheme(image);
  };

  return (
    <div className="App">
      {/* wrapping app with ThemeProvider to pass created styles to components */}
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard
                {...props}
                noteData={noteData}
                setNoteData={setNoteData}
                userTheme={userTheme}
              />
            )}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <NewUser {...props} />}
          />

          <Route
            path="/form"
            render={(props) => <NewTodoForm {...props} noteData={noteData} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/themes"
            render={(props) => (
              <UserThemes
                {...props}
                handleThemeSelection={handleThemeSelection}
              />
            )}
          />
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
