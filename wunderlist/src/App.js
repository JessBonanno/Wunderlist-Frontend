import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// mui imports
import { ThemeProvider } from "@material-ui/core/styles";

// local component imports
import Header from "./components/Header";
import theme from "./components/ui/Theme";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import NewTodoForm from "./components/NewTodoForm";
import Login from "./components/Login";
import UserThemes from "./components/UserThemes";

const sampleNoteData = [
  // sample note data for development
  {
    name: "Groceries",
    noteItems: ["milk", "eggs", "bread"],
    reoccurring: false,
    completed: false,
    listId: "day",
  },
  {
    name: "Chores",
    noteItems: ["rake the leaves", "run the dishwasher", "mop the kitchen"],
    reoccurring: false,
    completed: false,
    listId: "week",
  },
  {
    name: "Bills to pay",
    noteItems: ["rent", "netflix", "electric", "Lambda ISA"],
    reoccurring: true,
    completed: false,
    listId: "month",
  },
  {
    name: "Don't forget",
    noteItems: ["feed the pets", "eat dinner", "set an alarm for 5 am"],
    reoccurring: false,
    completed: false,
    listId: "general",
  },
  {
    name: "Tidy up",
    noteItems: ["sweep", "take out trash", "wipe the counters"],
    reoccurring: true,
    completed: false,
    listId: "day",
  },
  {
    name: "Shopping",
    noteItems: ["groceries", "cleaning supplies", "gas for the car"],
    reoccurring: true,
    completed: false,
    listId: "week",
  },
  {
    name: "Pet stuff",
    noteItems: ["buy food", "go to groomer"],
    reoccurring: false,
    completed: false,
    listId: "month",
  },
  {
    name: "After work",
    noteItems: ["take care of grocery list", "check tidy list", "call grandad"],
    reoccurring: false,
    completed: false,
    listId: "general",
  },
];

function App() {
  const [noteData, setNoteData] = useState(sampleNoteData);

  return (
    <div className="App">
      {/* wrapping app with ThemeProvider to pass created styles to components */}
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} noteData={noteData} />}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            path="/form"
            render={(props) => <NewTodoForm {...props} noteData={noteData} />}
          />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
        </Router>
        <UserThemes />
      </ThemeProvider>
    </div>
  );
}

export default App;
