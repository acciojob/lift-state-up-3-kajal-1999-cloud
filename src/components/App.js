
import React from "react";
import './../styles/App.css';
import ParentComponents from "./ParentComponents";

const App = () => {
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <ParentComponents />
    </div>
  )
}

export default App;