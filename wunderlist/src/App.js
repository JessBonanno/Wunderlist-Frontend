import React, { useState } from "react";

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
];

function App() {
  const [noteData, setNoteData] = useState(sampleNoteData);

  console.log(noteData);

  return (
    <div className="App">
      {/* wrapping app with ThemeProvider to pass created styles to components */}
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard noteData={noteData} />
      </ThemeProvider>
    </div>
  );
}

export default App;
