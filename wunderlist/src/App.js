import React, {useState} from "react";

// mui imports
import { ThemeProvider } from "@material-ui/core/styles";

// local component imports
import Header from "./components/Header";
import theme from "./components/ui/Theme";
import Dashboard from "./components/Dashboard";

const sampleNoteData = {
  // sample note data for development
  name: "note title",
  noteItems: ["note item 1", "note item 2", "note item 3"],
  reoccurring: true,
  listId: 'week',
};

function App() {
  const [noteData, setNoteData] = useState(sampleNoteData);

  console.log(noteData);

  return (
    <div className="App">
      {/* wrapping app with ThemeProvider to pass created styles to components */}
      <ThemeProvider theme={theme}>
        <Header />
        <Dashboard/>
      </ThemeProvider>
    </div>
  );
}

export default App;
