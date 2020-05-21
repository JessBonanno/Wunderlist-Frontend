import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// mui imports
import { ThemeProvider } from "@material-ui/core/styles";

// local component imports
import Header from "./components/Header";
import theme from "./components/ui/Theme";
import Dashboard from "./components/Dashboard";

const sampleNoteData = [
  // sample note data for development
  {
    name: "Groceries",
    noteItems: ["milk", "eggs", "bread"],
    reoccurring: false,
    listId: "day",
  },
  {
    name: "Chores",
    noteItems: ["rake the leaves", "run the dishwasher", "mop the kitchen"],
    reoccurring: false,
    listId: "week",
  },
  {
    name: "Bills to pay",
    noteItems: ["rent", "netflix", "electric", "Lambda ISA"],
    reoccurring: true,
    listId: "month",
  },
  {
    name: "Don't forget",
    noteItems: ["feed the pets", "eat dinner", "set an alarm for 5 am"],
    reoccurring: false,
    listId: "general",
  },
  {
    name: "Tidy up",
    noteItems: ["sweep", "take out trash", "wipe the counters"],
    reoccurring: true,
    listId: "day",
  },
  {
    name: "Shopping",
    noteItems: ["groceries", "cleaning supplies", "gas for the car"],
    reoccurring: true,
    listId: "week",
  },
  {
    name: "Pet stuff",
    noteItems: ["buy food", "go to groomer"],
    reoccurring: false,
    listId: "month",
  },
  {
    name: "After work",
    noteItems: ["take care of grocery list", "check tidy list", "call grandad"],
    reoccurring: false,
    listId: "general",
  },

];

function App() {
  const [noteData, setNoteData] = useState(sampleNoteData);

  console.log(noteData);

  return (
    <div className="App">
      {/* wrapping app with ThemeProvider to pass created styles to components */}
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Route
            path="/"
            render={(props) => <Dashboard {...props} noteData={noteData} />}
          />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
