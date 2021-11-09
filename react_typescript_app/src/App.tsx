import React, { useState } from "react";
import "./App.css";

import { DataStory } from "@data-story-org/gui";
import "@data-story-org/gui/lib/styles/app.css";

const dataStoryStyle = {
  padding: "10%",
};

function App() {
  const [isDataStoryOpened, setIsDataStoryOpened] = useState(false);

  const DataStoryButton = (
    <div className="button-section">
      <button
        onClick={(e) => {
          setIsDataStoryOpened(isDataStoryOpened ? false : true);
        }}
        className="custom-btn btn-6"
      >
        <span>{isDataStoryOpened ? "Close" : "DataStory"}</span>
      </button>
    </div>
  );

  return (
    <div className="App">
      <header className="App-header"></header>

      <div style={dataStoryStyle}>
        {DataStoryButton}
        {isDataStoryOpened && <DataStory />}
      </div>
    </div>
  );
}

export default App;
