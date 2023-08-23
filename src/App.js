import React from "react";
import "./App.css";
import AvailableProduct from "./components/Content/AvailableProduct";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <AvailableProduct/>
    </React.Fragment>
);
}
export default App;