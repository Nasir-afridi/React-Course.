import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppName from "./project-component/AppName";
import AppDescription from "./project-component/App-description";
import AppTime from "./project-component/App-Time";

function App() {
  return (
    <center>
      <AppName></AppName>
      <AppDescription></AppDescription>
      <AppTime></AppTime>
    </center>
  );
}

export default App;
