
import React from "react";
import './../styles/App.css';
import ParentComponent from "./ParentComponents";

const App = () => {
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <ParentComponent />

    </div>
  )
}

export default App;