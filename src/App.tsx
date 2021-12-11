import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routeObject } from "./routes/route.map";

function App() {
  // this is tien branch
  const element = useRoutes(routeObject);
  return <div className="App">{element}</div>;
}

export default App;
