import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Weather/>
      </div>
    </React.Fragment>
  );
}

export default App;
